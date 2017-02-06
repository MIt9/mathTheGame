import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';
import {} from './style.less';
import Background from '../../components/background/index.jsx';
import Barmenu from '../../components/barmenu/index.jsx';
import Button from '../../components/button/index.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as levelsActions from '../../actions/LevelsActions';


let Levels = React.createClass({
    getInitialState(){
        return {
            playSound: null
        }
    },
    componentDidMount(){
        const {params, levelsActions, levels} = this.props;
        if(params.status === "complete"){
            levelsActions.complete(params.levelNumber);
        }
        if(levels.newGame){
            levelsActions.newGame()
        }
    },
    _selectLevel(button){
        console.log("press");
        if(button.block){
            this._buttonPress(null, 'mistake');
        }else{
            this._buttonPress(
                ()=>{
                    hashHistory.push("/game/"+ button.level);
                }
            );
        }

    },
    _buttonPress(callback, soundId = 'button'){
        this.setState({playSound: soundId});
        setTimeout(()=>{
            this.setState({playSound: null});
            if(typeof callback === 'function'){
                callback();
            }
        }, 300);
    },
    _generateLevels(){
        const result = [];
        const style = this._starSize();
        const {levelsArray, completeLevel} = this.props.levels;
        for (let i = 0; i < levelsArray.length; i++) {
            let full = i<= completeLevel? 'full animated flipInY' : 'empty';
            result.push(<Button key={"level_"+i} button={{
                style,
                level: i,
                block: i>completeLevel,
                className: "levelCloud level_"+(i+1)+" "+full,
                text: ""+(i+1),
                action: this._selectLevel
            }}/>)

        }
        return result;
    },
    _starSize(){
        const width = window.innerWidth/4;
        return {
            width: width+'px',
            lineHeight: width+'px',
            fontSize: width/2.5+'px',
            margin: width/6+'px'
        }
    },
    render() {
        return (
                <div className="levels">
                    <div className="wrapper">
                        {this._generateLevels()}
                        <Barmenu showLives={false} playSound={this.state.playSound} lives={0}/>
                    </div>
                </div>
        )
    }
});
function mapStateToProps (state) {
    return {
        levels: state.levels
    }
}

function mapDispatchToProps(dispatch) {
    return {
        levelsActions: bindActionCreators(levelsActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Levels)