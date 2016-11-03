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
    'backSound':'audio/lezaarth_drum.mp3',
    'congratulation':'audio/congratulation.mp3',
    'loss':'audio/loss.mp3',
    'mistake':'audio/mistake.mp3',
    'button':'audio/button.mp3',
    'bubble':'audio/bubble.mp3'
};
const soundManager = SM.soundManager;

let Barmenu = React.createClass({
    getInitialState(){
        return {
            //нажата или ненажата кнопка
            sound: false,
            playSound: null
        }
    },

    componentWillMount(){
        if (localStorage.sound === undefined){localStorage.setItem('sound', "true")}
        this.setState({
            sound: localStorage.sound === "true"
        });
        soundManager.setup({onready: this._loadSoundLibery});
    },
    componentWillReceiveProps(nextProps) {
        if (nextProps.playSound !== this.state.playSound) {
            this._playSound(nextProps.playSound)
        }
    },
    _playSound(soundName){
        if(soundName && this.state.sound){
            soundManager.play(soundName, {volume:100});
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
        soundManager.play('backSound',{loops:100, volume:20});
    },
    _soundTrigger(){
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
        this._playSound('button');
    },
    _exitGame(){
        let hash = window.location.hash.split('?')[0];
        hash = hash.replace('#/', '');
        hash = hash.split('/')[0];
        const rout = {
            'game': '/levels',
            'levels': '/'
        };
        this._playSound('button');
        if (rout[hash]) {
            hashHistory.push(rout[hash]);
        } else {
            console.log('exit');
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