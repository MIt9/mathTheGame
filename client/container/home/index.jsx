import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';
import {} from './style.less';
import Background from '../../components/background/index.jsx';
import Barmenu from '../../components/barmenu/index.jsx';
import Button from '../../components/button/index.jsx';
import AnswerPrompt from '../../components/answerprompt/index.jsx';
import LANGUAGE from '../../language/language.js';

let L = LANGUAGE[localStorage.getItem('lng')];
let Home = React.createClass({
    getInitialState(){
        return {
            playSound: null
        }
    },
    componentWillMount(){
        L = LANGUAGE[localStorage.getItem('lng')];
    },
    _chgLanguage(){
        const currentLng = localStorage.lng;
        const allLng = Object.keys(LANGUAGE);

        for (let i = 0; i < allLng.length; i++) {
            let key = allLng[i];
            if(key === currentLng){
                localStorage.lng = LANGUAGE[allLng[i+1]] !== undefined? allLng[i+1] : allLng[0];
                L = LANGUAGE[localStorage.lng];

                console.log('home 2', L);
                this._buttonPress();
            }
        }
    },
    _promptClick(){
        this._buttonPress(()=>{hashHistory.push("/levels")});
    },
    _buttonPress(callback){
        this.setState({playSound: 'button'});
        setTimeout(()=>{
            this.setState({playSound: null});
            if(typeof callback === 'function'){
                callback();
            }
        }, 300);
    },
    render() {
        const lng = localStorage.getItem('lng');
        return (
                <div className="home">
                    <div className="wrapper">
                        <Button button={{className:"lng "+lng, action:this._chgLanguage}}/>
                        <div className="title animated bounceInRight">
                        </div>
                        <AnswerPrompt prompt={0} action={this._promptClick}/>
                        <Barmenu playSound={this.state.playSound}/>
                    </div>
                </div>
        )
    }
});
export default Home;