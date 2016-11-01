import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {} from './style.less';
//import Keyboard from './keyboard/index.jsx';
//import Example from './example/index.jsx';
//import Hands from './hands/index.jsx';
//import Moves from './moves/index.jsx';
//import Barmenu from './barmenu/index.jsx';
//import Animation from './animation/index.jsx';
import * as gameActions from '../actions/GameActions';


let App = React.createClass({


    componentDidMount() {
        //console.log(this.props);
        if(this.props.params.isNewGame && this.props.params.isNewGame === 'n'){
            this.props.gameActions.newList();
            this.forceUpdate();
        }
        //if(!localStorage.getItem('save')){
        //    this.props.gameActions.newList();
        //}
        localStorage.setItem('save','true');
    },

    render() {
        const { game} = this.props;
        return (
            <div id="game">

            </div>

        )
    }
});

function mapStateToProps (state) {
    return {
        game: state.game
    }
}

function mapDispatchToProps(dispatch) {
    return {
        gameActions: bindActionCreators(gameActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)