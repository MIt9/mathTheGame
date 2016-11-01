import React from 'react';

let Button = React.createClass({
    propTypes: {
        button: React.PropTypes.object.isRequired
    },
    isMount:false,
    getInitialState(){
        return {
            //нажата или ненажата кнопка
            tapped: false
        }
    },
    componentDidMount(){
        this.isMount = true;
    },
    componentWillUnmount(){
        this.isMount = false;
    },
    _click(){
        let button = this.props.button;
        let that = this;
        that.setState({
            tapped: true
        });
        setTimeout(function () {
            if(that.isMount){
                that.setState({
                    tapped: false
                })
            }
        }, 300);
        if (typeof button.action === 'function') {
            button.action(button);
        }
    },

    render() {
        let {text, className} =this.props.button;
        className = this.state.tapped ? className + ' tapped' : className;
        return (
            <div className={className} onClick={this._click}>{text}</div>
        )
    }
});

export default Button;