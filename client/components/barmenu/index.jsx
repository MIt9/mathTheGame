/**
 * Created by dima on 24.08.16.
 */
import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';
import SM from 'soundmanager2';
import Button from '../button/index.jsx';
import LiveLine from '../liveline/index.jsx';
import {} from './style.less';
const AUDIO = {
    'backSound':'audio/lemoncreme.ogg',
    'congratulation':'audio/congratulation.ogg',
    'loss':'audio/loss.ogg',
    'mistake':'audio/mistake.ogg',
    'button':'audio/button.ogg',
    'bubble':'audio/bubble.ogg'
};
const soundManager = SM.soundManager;

let Barmenu = React.createClass({
    getInitialState(){
        return {
            sound: false,
            playSound: null
        }
    },

    componentDidMount(){
        if (localStorage.sound === undefined){localStorage.setItem('sound', "true")}
        this.setState({
            sound: localStorage.sound === "true"
        });
        soundManager.setup({
            onready: this._loadSoundLibery,
            useHTML5Audio: true,
            debugMode: false
        });

        document.addEventListener("backbutton", this._exitGame, false);
        if (this.props.backgroundMute == true) {
            soundManager.pauseAll();
        }else if(localStorage.sound === "true"){
            this._playBackgroundSound();
        }
    },
    componentWillUnmount(){
        document.removeEventListener("backbutton", this._exitGame, false);
        soundManager.stopAll();
    },
    componentWillReceiveProps(nextProps) {
        if (nextProps.playSound !== this.state.playSound && nextProps.playSound !== null) {
            this._playSound(nextProps.playSound)
        }


    },
    _playSound(soundName){
        if(soundName !== null && this.state.sound){
            soundManager.pause('backSound');
            soundManager.play(soundName, {
                volume:100,
                onfinish:this._playBackgroundSound
            });
            this.setState({ playSound: null });
        }else{
            this.setState({ playSound: null });
        }
    },
    _loadSoundLibery(){
        for(let ID in AUDIO){
            soundManager.createSound(ID, AUDIO[ID]);
        }
        if (this.state.sound) {
            this._playBackgroundSound();
        }
    },
    _playBackgroundSound(){
        if(!this.props.backgroundMute){
            soundManager.play('backSound',{
                loops:100,
                volume:30,
                onerror:()=>{soundManager.play('backSound',{loops:100, volume:30, url:AUDIO['backSound']})
                }
            });
        }else{
            soundManager.pauseAll();
        }
    },
    _soundTrigger(){
        this._playSound('button');
        const soundOn = !this.state.sound;
        this.setState({
            sound: soundOn
        });
        localStorage.setItem('sound', soundOn);
        if(soundOn){
            this._playBackgroundSound();
        }else{
            soundManager.stopAll();
        }
    },
    _exitGame(){
        let hash = window.location.hash.split('?')[0];
        hash = hash.replace('#/', '');
        hash = hash.split('/')[0];
        const rout = {
            'game': '/levels',
            'video': '/levels',
            'levels': '/'
        };
        this._playSound('button');
        if (rout[hash]) {
            hashHistory.push(rout[hash]);
        } else {
            console.log('exit');
            navigator.app.exitApp();
        }
    },
    render() {
        const soundClass = this.state.sound ? "soundSwitch" : "soundSwitch off";
        const {showLives, lives} = this.props;
        return (
            <div className="barmenu">
                <Button button={{className:soundClass,text:"",action:this._soundTrigger}}/>
                {showLives ? <LiveLine count={lives}/> : null}
                <Button button={{className:"exit",text:"",action:this._exitGame}}/>
            </div>
        )
    }
});
export default Barmenu;