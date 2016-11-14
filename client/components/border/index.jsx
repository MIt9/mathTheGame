/**
 * Created by dima on 24.08.16.
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Button from '../button/index.jsx';
import LifeLine from '../liveline/index.jsx';
import {} from './style.less';
let Border = React.createClass({
    getInitialState(){
        return {
            left: 0,
            right: 0,
            isSighnPlus: true,
            itemIcon: "item_1",
            savedExample: "",
            rotate: 0
        }
    },

    componentWillMount(){
        this._updateBoard(this.props.example);
        if (window.DeviceOrientationEvent) {
            // Listen for the event and handle DeviceOrientationEvent object
            window.addEventListener('deviceorientation', this._devOrientHandler, false);
        }
        if(typeof cordova !== 'undefined'){
            this.accelerationId = navigator.accelerometer.watchAcceleration(this._accelerometerSuccess,
                this._accelerometerError,{ frequency: 500 });
        }
    },
    componentWillUnmount(){
        if(typeof cordova !== 'undefined'){
            navigator.accelerometer.clearWatch(this.accelerationId);
        }
    },
    componentWillReceiveProps(nextProps){
        if (nextProps.example !== this.state.savedExample) {
            this._updateBoard(nextProps.example);
        }
    },
    _devOrientHandler(a){
        const tiltLR = Math.floor(a.gamma);
        this.setState({
            rotate: tiltLR
        });
    },
    _accelerometerSuccess(a){
        const rotate = a.x / 10 * 90;
        if(rotate !== this.state.rotate){
            this.setState({
                rotate: rotate
            });
        }
    },
    _accelerometerError(e){
        console.warn(e);
    },
    _updateBoard(e){
        const left = parseInt(e[0]);
        const right = parseInt(e[2]);
        const isSighnPlus = e[1] === "+";
        this.setState({
            left,
            isSighnPlus,
            right,
            savedExample: e
        });
        this._updateValue(left, right, isSighnPlus);
    },
    _itemPress(button){
        let {left, right } = this.state;
        setTimeout(()=> {
            if (button.side === "left") {
                left = left - 1;
                this.setState({
                    left: left
                })
            } else {
                right = right - 1;
                this.setState({
                    right: right
                })
            }
            this._updateValue(left, right, null);
        }, 500);

    },
    _sighnPress(){
        const isSighnPlus = !this.state.isSighnPlus;
        this.setState({
            isSighnPlus: isSighnPlus
        });
        this._updateValue(null, null, isSighnPlus);
    },
    _updateValue(_left, _right, _isSighnPlus){
        let {left, right, isSighnPlus} = this.state;
        left = _left !== null ? _left : left;
        right = _right !== null ? _right : right;
        isSighnPlus = _isSighnPlus === null ? isSighnPlus : _isSighnPlus;

        let newValue = left + right;
        if (!isSighnPlus) {
            newValue = left - right;
        }
        this.props.action(newValue);
    },
    _generateItems(count, icon, side, rotate){
        const result = [];
        const cssStyle = {transform: "rotate(" + rotate + "deg)"};
        for (let i = 0; i < count; i++) {
            const className = 'item ' + icon + ' i' + (i + 1);
            result.push(<Button key={'item_'+i} button={
            {className: className, side: side, action: this._itemPress, cssStyle: cssStyle}
            }/>)
        }
        return result;
    },
    render() {
        const {left, right, isSighnPlus, itemIcon, rotate} = this.state;
        const sighnClass = isSighnPlus ? "plus" : "minus";
        return (
            <div className="border">
                <div className={"leftNumber hold-"+left}>
                    {this._generateItems(left, itemIcon, "left", rotate)}
                </div>
                <Button button={{className:"sighn "+sighnClass, action:this._sighnPress}}/>

                <div className={"rightNumber hold-"+right}>
                    {this._generateItems(right, itemIcon, "right", rotate)}
                </div>
                <div className="question"></div>
            </div>
        )
    }
});
export default Border;