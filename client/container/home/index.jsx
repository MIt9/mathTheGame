import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {} from './style.less';
import Background from '../../components/background/index.jsx';
import Barmenu from '../../components/barmenu/index.jsx';
import AnswerPrompt from '../../components/answerprompt/index.jsx';

let Home = React.createClass({

    render() {

        return (
            <div className="canvas">
                <Background/>

                <div className="home">
                    <div className="wrapper">
                        <h1>Math the game</h1>
                        <Link to="/levels" className="answerPrompt"><span>start</span></Link>
                        <Barmenu />
                    </div>
                </div>
            </div>
        )
    }
});
export default Home;