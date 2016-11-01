/**
 * Created by dima on 24.08.16.
 */
import React, { PropTypes } from 'react';
import {} from './style.less';
let LiveLine = React.createClass({
    propTypes: {
        count: React.PropTypes.number.isRequired
    },
    _lifeCount(count){
        const hearts = [];
        for (let i = 1; i < 4; i++) {
            let className = "heart empty";
            if(count-i>=0){
                className="heart";
            }
            hearts.push(<div key={"heart_"+i}className={className}></div>)
        }
        return hearts;
    },
    render() {
        return (
            <div className="liveLine" >
                {this._lifeCount(this.props.count)}
            </div>
        )
    }
});
export default LiveLine;