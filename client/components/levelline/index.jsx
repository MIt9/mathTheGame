/**
 * Created by dima on 24.08.16.
 */
import React, { PropTypes } from 'react';
import {} from './style.less';
let LevelLife = React.createClass({
    propTypes: {
        count: React.PropTypes.number.isRequired,
        all: React.PropTypes.number.isRequired
    },
    _levelCount(count, all){
        const hearts = [];
        const style = {width:100/all + "%"};
        for (let i = 0; i < all; i++) {
            let className = "level empty";
            if(count-i>0){
                className="level animated flipInY";
            }
            hearts.push(<div key={"level"+i} className={className} style={style}></div>)
        }
        return hearts;
    },
    render() {
        return (
            <div className="levelLine" >
                {this._levelCount(this.props.count,this.props.all)}
            </div>
        )
    }
});
export default LevelLife;