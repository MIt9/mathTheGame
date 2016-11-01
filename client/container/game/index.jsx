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

    componentDidMount(){
        const levelArray = this.props.gameActions.setExamplesArray(this.props.levels.levelsArray[this.props.params.level]);
    },
    _promptClick(prompt){
        console.log(prompt);
        switch (prompt){
            case 1:
                this.props.gameActions.nextExample();
                break;
            case 2:
                hashHistory.push("/levels");
                break;
            case 3:
                hashHistory.push("/levels");
                break;


        }

    },
    render() {
        const {prompt,levelArray, allLevels, currentLevel, lives, options} = this.props.game;
        if(levelArray.length===0){return null}
        const actions = this.props.gameActions;
        return (
            <div className="canvas">
                <Background/>

                <div className="game">
                    <div className="wrapper">
                        <LevelLine all={allLevels} count={currentLevel}/>
                        <Border example={levelArray[currentLevel]} action={actions.getCurrentVal}/>
                        {prompt !== 0 ? <AnswerPrompt prompt={prompt} action={this._promptClick}/> : <Options optionArray={options} action={actions.pressOption}/>}
                        <Barmenu showLives={true} lives={lives}/>
                    </div>
                </div>
            </div>
        )
    }
});
export default Game;

function mapStateToProps (state) {
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

