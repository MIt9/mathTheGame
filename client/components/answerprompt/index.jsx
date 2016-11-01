/**
 * Created by dima on 24.08.16.
 */
import React, { PropTypes } from 'react';
import {} from './style.less';
const PROMPTS = {
    0: "start",
    1: "Right answer !!!",
    2: "Congratulation",
    3: "Game over"
};
let AnswerPrompt = React.createClass({
        _click(){
            let {prompt, action} = this.props;
            if (typeof action === 'function') {
                action(prompt);
            }
        },

        render() {
            return (
                <div className="answerPrompt" onClick={this._click}>
                    {PROMPTS[this.props.prompt]}
                </div>
            )
        }
    });
export default AnswerPrompt;