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
};
const soundManager = SM.soundManager;

let Barmenu = React.createClass({
    getInitialState(){
        return {
            //нажата или ненажата кнопка
            sound: true
        }
    },

    componentDidMount(){
        soundManager.setup({onready: this._loadSoundLibery});

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
        soundManager.play('backSound',{loops:100});
    },
    _soundTrigger(){
        const soundOn = !this.state.sound;
        this.setState({
            sound: soundOn
        });
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
            'levels': '/'
        };
        if (rout[hash]) {
            hashHistory.push(rout[hash]);
        } else {
            console.log('exit');
        }
        console.log(hash);
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