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
    _renderTitle(title){
        return(
            <svg  viewBox="0 0 580 400">
                <g>
                    <path d="m460.989228,158.166753c0.372016,-3.818058 0.587394,-7.675275 0.587394,-11.571652c0,-67.589412 -54.784235,-122.373645 -122.373648,-122.373645c-52.454241,0 -97.076568,33.070254 -114.482996,79.47434c-11.532493,-12.64854 -27.979511,-20.73499 -46.443247,-20.73499c-34.812856,0 -63.027324,28.214468 -63.027324,63.027322c0,4.111754 0.450335,8.12561 1.213947,12.002407c-46.443247,7.655695 -81.980555,47.696352 -81.980555,96.293374c0,54.079361 43.839136,97.898916 97.898919,97.898916l310.829067,0c54.079363,0 97.898919,-43.819555 97.898919,-97.898916c0.01958,-47.990049 -34.558318,-87.737008 -80.120475,-96.117156z" strokeWidth="1.5" fill="#fff"/>
                    <text stroke="#5f9ea0" transform="matrix(2.8684060718058646,0,0,3.7457140833990934,-536.837758652749,-626.3956695158145) " textAnchor="middle" fontFamily="Days, sans-serif"  fontSize="24" y="242.640351" x="286" fill="#00c5ca">{title}</text>
                </g>
            </svg>
        )
    },
    render() {
        const lng = localStorage.getItem('lng');
        return (
                <div className="home">
                    <div className="wrapper">
                        <Button button={{className:"lng "+lng, action:this._chgLanguage}}/>
                        <div className="title animated bounceInRight">
                            {this._renderTitle(L['GAME_TITLE'])}
                        </div>
                        <AnswerPrompt prompt={0} action={this._promptClick}/>
                        <Barmenu showInfo={true} playSound={this.state.playSound}/>
                    </div>
                </div>
        )
    }
});
export default Home;