import React, { PropTypes } from 'react';
import { Link, hashHistory } from 'react-router';
import {} from './style.less';
import Background from '../../components/background/index.jsx';
import Barmenu from '../../components/barmenu/index.jsx';
import Border from '../../components/border/index.jsx';
import LevelLine from '../../components/levelline/index.jsx';
import Options from '../../components/options/index.jsx';
import AnswerPrompt from '../../components/answerprompt/index.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../../actions/GameActions';

let Game = React.createClass({
    getInitialState(){
        return {
            playSound: null,
            animationClass: null
        }
    },
    componentDidMount(){
        this.props.gameActions.setExamplesArray(this.props.levels.levelsArray[this.props.params.level]);
    },
    componentWillUnmount(){
        this.props.gameActions.restLevel();
    },
    componentWillReceiveProps(nextProps) {
        const newPrompt = nextProps.game.prompt;
        const newLives = nextProps.game.lives;
        if (newPrompt !== this.props.game.prompt) {
            if (newPrompt !== 0) {
                const sound = {
                    1: 'congratulation',
                    2: 'congratulation',
                    3: 'loss'
                };
                this._buttonPress(
                    null, sound[newPrompt]
                )
            }
        } else if (newLives !== this.props.game.lives) {
            this.setState({animationClass: 'shake'});
            this._buttonPress(
                ()=> {
                    this.setState({animationClass: null});
                }, 'mistake'
            )
        }
    },
    _promptClick(prompt){
        this._buttonPress(
            ()=> {
                switch (prompt) {
                    case 1:
                        this.props.gameActions.nextExample();
                        break;
                    case 2:
                        hashHistory.push("/video/" + this.props.params.level);
                        break;
                    case 3:
                        hashHistory.push("/levels");
                        break;
                }
            }
        )
    },
    _buttonPress(callback, soundId = 'button', hold = 300){
        this.setState({playSound: soundId});
        setTimeout(()=> {
            this.setState({playSound: null});
            if (typeof callback === 'function') {
                callback();
            }
        }, hold);
    },
    _setCurrentValue(value){
        this._buttonPress(
            ()=> {
                this.props.gameActions.setCurrentVal(value)
            }, 'bubble'
        )
    },
    render() {
        const {prompt,levelArray, allLevels, currentLevel, lives, options} = this.props.game;
        if (levelArray.length === 0) {
            return null
        }
        const actions = this.props.gameActions;
        let stars = currentLevel;
        if (prompt === 2) {
            stars = 1 + currentLevel;
        }
        const animationClass = "wrapper animated " + this.state.animationClass;
        return (
                <div className="game">
                    <div className={animationClass}>
                        <LevelLine all={allLevels} count={stars}/>
                        <Border example={levelArray[currentLevel]} action={this._setCurrentValue}/>
                        {prompt !== 0 ? <AnswerPrompt prompt={prompt} action={this._promptClick}/> :
                            <Options optionArray={options} action={actions.pressOption}/>}
                        <Barmenu playSound={this.state.playSound} showLives={true} lives={lives}/>
                    </div>
                </div>
        )
    }
});

function mapStateToProps(state) {
    return {
        game: state.game,
        levels: state.levels
    }
}

function mapDispatchToProps(dispatch) {
    return {
        gameActions: bindActionCreators(gameActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)

