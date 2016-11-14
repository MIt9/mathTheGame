import React, { PropTypes } from 'react';
import {} from './style.less';
import { Link, hashHistory } from 'react-router';
import Barmenu from '../../components/barmenu/index.jsx';
import AnswerPrompt from '../../components/answerprompt/index.jsx';
const VIDEO ={
    0:'UlX3hITCKGU',
    1:'qZqR5wwVzPk',
    2:'HFuUM-p3wcQ',
    3:'Pba_JgjvOgI',
    4:'uqCtSQ2rqaA',
    5:'na9K6pXfJ5k',
    6:'JcBHyLLrqkg',
    7:'mSdwF7XNeV4',
    8:'ztqAnwkw3T0',
    9:'VSJdUkX2Z10',
    10:'JGnbQ-s_JZk',
    11:'8y68ZI6x6gs',
    12:'jGdvwPuGgVE',
    13:'r61ZFAWth6A'
};
let Video = React.createClass({
    getInitialState(){
        return {
            playSound: null,
            animationClass: null
        }
    },
    componentDidMount(){
    },
    componentWillUnmount(){
    },
    _promptClick(){
        hashHistory.push("/levels/complete/" + this.props.params.level);
    },

    render() {

        const animationLink = "https://www.youtube.com/embed/"+VIDEO[this.props.params.level]+"?autoplay=1";
        return (
                <div className="video">
                    <div className="wrapper">
                        <iframe
                            src={animationLink}>
                            frameborder="0" allowfullscreen
                        </iframe>
                        <AnswerPrompt prompt={4} action={this._promptClick}/>
                        <Barmenu backgroundMute={true} playSound={this.state.playSound} showLives={false} lives={0}/>
                    </div>
                </div>
        )
    }
});


export default Video

