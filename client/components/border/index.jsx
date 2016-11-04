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
            savedExample: ""
        }
    },

    componentWillMount(){
        this._updateBoard(this.props.example);
    },
    componentWillReceiveProps(nextProps){
        if(nextProps.example !== this.state.savedExample){
            this._updateBoard(nextProps.example);
        }
    },
    _updateBoard(e){
        const left = parseInt(e[0]);
        const right = parseInt(e[2]);
        const isSighnPlus = e[1] === "+";
        this.setState({
            left,
            isSighnPlus,
            right,
            savedExample:e
        });
        this._updateValue(left, right, isSighnPlus);
    },
    _itemPress(button){
        let {left, right } = this.state;
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
    },
    _sighnPress(){
        const isSighnPlus = !this.state.isSighnPlus;
        this.setState({
            isSighnPlus: isSighnPlus
        });
        this._updateValue(null, null, isSighnPlus);
    },
    _updateValue(_left, _right, _isSighnPlus){
        let{left, right, isSighnPlus} = this.state;
        left = _left !== null?_left : left;
        right = _right !== null?_right : right;
        isSighnPlus = _isSighnPlus === null? isSighnPlus : _isSighnPlus;

        let newValue = left+right;
        if (!isSighnPlus) {
            newValue = left-right;
        }
        this.props.action(newValue);
    },
    _generateItems(count, icon, side){
        const result = [];
        for (let i = 0; i < count; i++) {
            const className = 'item ' + icon + ' i' + (i + 1);
            result.push(<Button key={'item_'+i} button={{className:className, side:side, action:this._itemPress}}/>)

        }
        return result;
    },
    render() {
        const {left, right, isSighnPlus, itemIcon} = this.state;
        const sighnClass = isSighnPlus ? "plus" : "minus";

        return (
            <div className="border">
                <div className={"leftNumber hold-"+left}>
                    {this._generateItems(left, itemIcon, "left")}
                </div>
                <Button button={{className:"sighn "+sighnClass, action:this._sighnPress}}/>

                <div className={"rightNumber hold-"+right}>
                    {this._generateItems(right, itemIcon, "right")}
                </div>
                <div className="question"></div>
            </div>
        )
    }
});
export default Border;