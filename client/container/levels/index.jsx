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
    componentDidMount(){
        this.props.levelsActions.newGame()
    },
    _selectLevel(button){
        console.log("press");
        hashHistory.push("/game/"+ button.level);
    },
    _generateLevels(){
        const result = [];
        const {levelsArray} = this.props.levels;
        for (var i = 0; i < levelsArray.length; i++) {
            result.push(<Button key={"level_"+i} button={{
                level: i,
                className: "level level_"+(i+1),
                text: ""+(i+1),
                action: this._selectLevel
            }}/>)

        }
        return result;
    },
    render() {

        return (
            <div className="canvas">
                <Background/>

                <div className="levels">
                    <div className="wrapper">
                        {this._generateLevels()}
                        <Barmenu showLives={false} lives={0}/>
                    </div>
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