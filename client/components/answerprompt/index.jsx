/**
 * Created by dima on 24.08.16.
 */
import React, { PropTypes } from 'react';
import {} from './style.less';
import LANGUAGE from '../../language/language.js';
const PROMPTS = {
    0: "START",
    1: "RIGHT_ANSWER",
    2: "CONGRATULATION",
    3: "GAME_OVER"
};

let AnswerPrompt = React.createClass({
        _click(){
            let {prompt, action} = this.props;
            if (typeof action === 'function') {
                action(prompt);
            }
        },

        render() {
            const L = LANGUAGE[localStorage.lng];
            return (
                <div className="answerPrompt" onClick={this._click}>
                    {L[PROMPTS[this.props.prompt]]}
                </div>
            )
        }
    });
export default AnswerPrompt;