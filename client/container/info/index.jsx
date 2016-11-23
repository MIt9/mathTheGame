import React, { PropTypes } from 'react';
import {} from './style.less';
import { Link, hashHistory } from 'react-router';
import Barmenu from '../../components/barmenu/index.jsx';
import Button from '../../components/button/index.jsx';

let Info = React.createClass({

    componentDidMount(){
    },
    componentWillUnmount(){
    },
    _goToLink(button){
        if(typeof cordova !== 'undefined'){
            cordova.InAppBrowser.open(button.link, '_system')
        }else{
            console.log(button.link)

        }
    },

    render() {

        return (
                <div className="info">
                    <div className="whale"></div>
                    <div className="wrapper">
                        <div className="textWrapper">
                            <h2 className="title">Developing</h2>
                            <Button button={{
                            className: "linkToFacebook",
                            link: "https://www.facebook.com/dmitrii.bilukha",
                            text: "Dmitrii Bilukha",
                            action: this._goToLink
                        }}/>
                            <h2 className="title">Art</h2>
                            <Button button={{
                            className: "linkToFacebook",
                            link: "https://www.facebook.com/MaksymKapliuk",
                            text: "Maksym Kapliuk",
                            action: this._goToLink
                        }}/>
                        </div>
                        <Barmenu showLives={false}/>
                    </div>
                </div>
        )
    }
});


export default Info

