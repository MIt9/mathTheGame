import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {} from './style.less';
let GameOver = React.createClass({
    render() {
        return (
            <div className="gameOver" >
                <h1 className="congratulation"><span>You win</span></h1>
                <Link to="/" className="start"><span>try from begin</span></Link>
            </div>
        )
    }
});
export default GameOver;