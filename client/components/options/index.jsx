/**
 * Created by dima on 24.08.16.
 */
import React, { PropTypes } from 'react';
import Button from '../button/index.jsx';
import {} from './style.less';
let Options = React.createClass({
    _optionGenerator(){
        const {optionArray, action} = this.props;
        const result =[];
        for (let i = 0; i < optionArray.length; i++) {
            result.push(<Button key={"option_"+i}button={{className:"option"+(i+1),text:optionArray[i],action:action}}/>)
        }
        return result;
    },
    render() {
        return (
            <div className="options" >
                {this._optionGenerator()}
            </div>
        )
    }
});
export default Options;