import React, { PropTypes } from 'react';
import {} from './style.less';
import { hashHistory } from 'react-router';
import Button from '../../components/button/index.jsx';
import AnswerPrompt from '../../components/answerprompt/index.jsx';
import LANGUAGE from '../../language/language.js';
let L = LANGUAGE[localStorage.getItem('lng')];

let Info = React.createClass({

    componentDidMount(){
    },
    componentWillUnmount(){
        L = LANGUAGE[localStorage.getItem('lng')];
    },
    _goToLink(button){
        if(typeof cordova !== 'undefined'){
            cordova.InAppBrowser.open(button.link, '_system')
        }else{
            console.log(button.link)

        }
    },
    _promptClick(){
        hashHistory.push("/home");
    },
    render() {

        return (
                <div className="info">
                    <div className="whale"></div>
                        <div className="wrapper">
                            <div className="textWrapper">
                                <div className="textAlign">
                                <h2 className="title">developer</h2>
                                <Button button={{
                                className: "linkToFacebook",
                                link: "https://www.facebook.com/dmitrii.bilukha",
                                text: "Dmitrii Bilukha",
                                action: this._goToLink
                            }}/>
                                <h2 className="title">design</h2>
                                <Button button={{
                                className: "linkToFacebook",
                                link: "https://www.facebook.com/MaksymKapliuk",
                                text: "Maksym Kapliuk",
                                action: this._goToLink
                            }}/>
                            </div>
                        </div>
                    </div>
                    <AnswerPrompt prompt={5} action={this._promptClick}/>
                    <div className='withoutButton'></div>
                </div>
        )
    }
});


export default Info

