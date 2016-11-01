/**
 * Created by dima on 24.08.16.
 */
import React from 'react';
import {} from './style.less';

let Background = React.createClass({

    render() {
        return (
            <div className="background" >
                <div id="clouds">
                    <div className="cloud x1"></div>
                    <div className="cloud x2"></div>
                    <div className="cloud x3"></div>
                    <div className="cloud x4"></div>
                    <div className="cloud x5"></div>
                </div>
                <div className="ground">
                    <div className="l1">
                        <div className="grass1"></div>
                        <div className="grass2"></div>
                    </div>
                </div>
            </div>
        )
    }
});
export default Background;