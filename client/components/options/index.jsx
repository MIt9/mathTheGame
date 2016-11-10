/**
 * Created by dima on 24.08.16.
 */
import React, { PropTypes } from 'react';
import Button from '../button/index.jsx';
import {} from './style.less';
let Options = React.createClass({
    getInitialState(){
        return {
            0: null,
            1: null,
            2: null,
            3: null
        }
    },
    _optionGenerator(){
        const {optionArray, action} = this.props;
        const result =[];
        for (let i = 0; i < optionArray.length; i++) {
            result.push(<Button key={"option_"+i}button={{className:"option"+(i+1),text:optionArray[i],action:action}}/>)
        }
        return result;
    },
    _onClick(num){
        const {optionArray, action} = this.props;
        const animation = 'animated bounceIn';
        switch(num){
            case 0:
                this.setState({0:animation});
                break;
            case 1:
                this.setState({1:animation});
                break;
            case 2:
                this.setState({2:animation});
                break;
            case 3:
                this.setState({3:animation});
                break;
        }
        setTimeout(()=>{
            this.setState({
                0: null,
                1: null,
                2: null,
                3: null
            });
            action(optionArray[num])

        },500);
    },
    render() {
        const {optionArray} = this.props;
        return (
            <div className="options animated zoomInUp" >
                <svg key="option_0" className={"option1 "+this.state[0]} onClick={()=>{this._onClick(0)}} width="30mm" height="40mm" version="1.1" viewBox="0 0 3000 4000">
                    <g id="_261029968">
                        <path fill="#027218" d="M1256 3067c367,85 500,284 571,431 43,87 70,175 101,263 13,36 27,73 46,108 14,26 31,54 58,78l20 17 -94 15 -20 -18c-30,-26 -49,-56 -64,-84 -18,-35 -32,-70 -45,-104l-2 -7c-32,-87 -58,-175 -100,-262 -61,-125 -173,-301 -461,-388 -21,-6 -42,-12 -65,-17l-43 -10 54 -32 44 10z"/>
                        <path fill="white" d="M1260 1499c367,231 501,771 572,1170 42,238 69,477 101,716 13,98 27,197 46,294 13,70 30,146 57,211l20 47 -94 40 -20 -48c-30,-72 -49,-154 -64,-230 -18,-93 -32,-188 -44,-282l-3 -18c-31,-238 -58,-476 -100,-712 -61,-340 -173,-820 -461,-1055 -20,-16 -42,-32 -65,-46l-43 -28 55 -86 43 27z"/>
                        <circle fill="white" cx="1492" cy="1456" r="1374"/>
                        <path fill="#F4171E" d="M1492 182c704,0 1274,570 1274,1274 0,704 -570,1274 -1274,1274 -703,0 -1274,-570 -1274,-1274 0,-704 571,-1274 1274,-1274z"/>
                    </g>
                    <text stroke="#000" transform="rotate(-8 1402,1358) matrix(65,0,0,64.6,-71644,-94552) " textAnchor="middle" fontFamily="Days, sans-serif" fontSize="24" y="1494" x="1125" strokeWidth="0" fill="#ffffff">{optionArray[0]}</text>
                </svg>
                <svg key="option_1" className={"option2 "+this.state[1]} onClick={()=>{this._onClick(1)}}  width="30mm" height="40mm" version="1.1" viewBox="0 0 3000 4000">
                    <g >
                        <path fill="#027218" d="M1383 3052c187,63 290,356 323,449 52,148 87,296 116,444l3 17 -89 2 -3 -16c-12,-59 -24,-118 -39,-177 -21,-89 -46,-177 -77,-266 -25,-70 -109,-302 -236,-397 -19,-13 -38,-24 -59,-31l-33 -11 61 -25 33 11z"/>
                        <path fill="white" d="M1383 1488c187,171 290,967 323,1219 52,402 87,805 116,1208l3 45 -89 6 -3 -44c-12,-160 -24,-320 -39,-480 -21,-242 -46,-483 -77,-723 -25,-191 -109,-823 -236,-1079 -19,-37 -38,-67 -59,-86l-33 -30 61 -66 33 30z"/>
                        <path fill="white" d="M1440 37c664,0 1202,539 1202,1203 0,664 -538,1202 -1202,1202 -664,0 -1203,-538 -1203,-1202 0,-664 539,-1203 1203,-1203z"/>
                        <path fill="#F4171E" d="M1440 125c615,0 1114,499 1114,1115 0,615 -499,1114 -1114,1114 -616,0 -1115,-499 -1115,-1114 0,-616 499,-1115 1115,-1115z"/>
                    </g>
                    <text stroke="#000" transform="rotate(-8 1402,1358) matrix(65,0,0,64.45,-71644,-94552) " textAnchor="middle" fontFamily="Days, sans-serif" fontSize="24" y="1494" x="1125" strokeWidth="0" fill="#ffffff">{optionArray[1]}</text>
                </svg>
                <svg key="option_2" className={"option3 "+this.state[2]} onClick={()=>{this._onClick(2)}}  width="30mm" height="40mm" version="1.1" viewBox="0 0 3000 4000">
                    <g >
                        <path fill="#027218" d="M1596 3140c-14,7 -27,14 -40,21 -309,172 -282,474 -207,687 9,24 18,47 27,69l8 18 -97 5 -8 -17c-100,-232 -172,-608 239,-805l30 -14 78 22 -30 14z"/>
                        <path fill="white" d="M1588 1782c-14,18 -27,37 -40,56 -309,468 -281,1288 -206,1867 8,66 17,129 27,188l7 49 -97 15 -8 -49c-99,-629 -172,-1652 239,-2186l30 -39 78 60 -30 39z"/>
                        <path fill="white" d="M1454 73c731,0 1323,593 1323,1324 0,731 -592,1323 -1323,1323 -731,0 -1324,-592 -1324,-1323 0,-731 593,-1324 1324,-1324z"/>
                        <path fill="#F4171E" d="M1454 169c678,0 1227,550 1227,1228 0,677 -549,1227 -1227,1227 -678,0 -1227,-550 -1227,-1227 0,-678 549,-1228 1227,-1228z"/>
                    </g>
                    <text stroke="#000" transform="rotate(2 1402,1358) matrix(65,0,0,64.5,-71644,-94552)" textAnchor="middle" fontFamily="Days, sans-serif" fontSize="24" y="1494" x="1125" strokeWidth="0" fill="#ffffff">{optionArray[2]}</text>
                </svg>

                <svg key="option_3" className={"option4 "+this.state[3]} onClick={()=>{this._onClick(3)}}  width="30mm" height="40mm" version="1.1" viewBox="0 0 3000 4000">
                    <g>
                        <path fill="#027218" d="M1401 3173c-66,65 -132,131 -186,197 -43,53 -83,109 -98,164 -10,38 -20,76 -38,113 -20,44 -42,87 -60,130l-6 16 -105 -4 6 -16c18,-43 40,-86 60,-130 18,-37 28,-74 38,-111 15,-57 55,-115 100,-169 51,-63 112,-125 174,-186 150,-150 267,-155 115,-4z"/>
                        <path fill="white" d="M1313 1626l-10 -5 -72 -40 25 -46c29,-52 58,-106 90,-156 22,-34 55,-84 104,-62 57,24 29,107 18,151 -19,75 -42,149 -64,223 -66,221 -132,442 -186,666 -43,181 -83,371 -97,556 -10,128 -21,256 -39,384 -20,147 -42,292 -60,440l-6 52 -105 -13 6 -52c18,-148 40,-294 60,-442 18,-125 28,-251 38,-377 15,-191 56,-386 100,-572 51,-212 112,-421 175,-629l0 -1c7,-26 15,-51 23,-77z"/>
                        <circle fill="white" cx="1476" cy="1452" r="1422"/>
                        <path fill="#F4171E" d="M1476 134c728,0 1318,590 1318,1318 0,728 -590,1318 -1318,1318 -728,0 -1318,-590 -1318,-1318 0,-728 590,-1318 1318,-1318z"/>
                    </g>
                    <text stroke="#000" transform="rotate(10 1402,1358) matrix(65,0,0,64.6,-71644,-94552) " textAnchor="middle" fontFamily="Days, sans-serif" fontSize="24" y="1494" x="1125" strokeWidth="0" fill="#ffffff">{optionArray[3]}</text>
                </svg>
            </div>
        )
    }
});
export default Options;