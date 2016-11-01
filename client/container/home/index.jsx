import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {} from './style.less';
import Background from '../../components/background/index.jsx';
import Barmenu from '../../components/barmenu/index.jsx';
import Button from '../../components/button/index.jsx';
import AnswerPrompt from '../../components/answerprompt/index.jsx';
import LANGUAGE from '../../language/language.js';
let L = LANGUAGE[localStorage.lng];

let Home = React.createClass({
    _chgLanguage(){
        const currentLng = localStorage.lng;
        const allLng = Object.keys(LANGUAGE);
        for (let i = 0; i < allLng.length; i++) {
            let key = allLng[i];
            if(key === currentLng){
                localStorage.lng = LANGUAGE[allLng[i+1]] !== undefined? allLng[i+1] : allLng[0];
                L = LANGUAGE[localStorage.lng];
                this.forceUpdate();
            }
        }
    },
    render() {

        return (
            <div className="canvas">
                <Background/>

                <div className="home">
                    <div className="wrapper">
                        <Button button={{className:"lng "+localStorage.lng, action:this._chgLanguage}}/>
                        <h1>{L['GAME_TITLE']}</h1>
                        <Link to="/levels" className="answerPrompt"><span>{L['START']}</span></Link>
                        <Barmenu />
                    </div>
                </div>
            </div>
        )
    }
});
export default Home;