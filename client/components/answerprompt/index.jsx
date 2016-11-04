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
//{L[PROMPTS[this.props.prompt]]}
    render() {
        const L = LANGUAGE[localStorage.lng];
        return (
            <svg onClick={this._click} className="answerPrompt" width="40mm" height="50mm" version="1.1"
            viewBox="0 0 4000 5000">
                <g>
                    <g id="_691834456">
                        <path stroke="black" strokeWidth="7.62" fill="white"  d="M1164 1993c15,679 17,979 55,1652 66,1146 32,511 40,905 10,23 17,76 19,134 2,74 -7,130 -21,123 -54,-41 -48,-294 -44,-475 -69,-1125 -73,-1231 -99,-2373 -1,-74 9,-127 22,-117 14,9 26,77 28,151z"/>
                        <path stroke="black" strokeWidth="7.62" fill="white" d="M1980 1968c27,1306 36,1078 94,2265 6,109 6,157 7,260 2,73 -8,124 -22,115 -14,-9 -26,-75 -27,-147 -6,-380 -9,-214 -46,-861 -39,-678 -41,-982 -56,-1665 -1,-72 9,-123 22,-114 14,9 26,75 28,147z"/>
                    </g>

                    <path stroke="black" strokeWidth="7.62" fill="white" d="M83 1241c148,-633 1098,-429 1603,-484 224,-24 927,-94 1057,-100 174,-9 729,121 730,396 1,273 116,844 -60,918 -544,341 -2250,275 -2901,250 -474,-19 -383,-422 -383,-424 -43,-162 -111,-330 -46,-556z"/>
                    <path fill="#01644F" stroke="black" strokeWidth="7.62" d="M1043 2209c474,6 2492,-12 2376,-409 44,-393 38,-577 -28,-764 -89,-254 -369,-419 -1544,-249 -627,91 -1423,-116 -1654,373 -170,360 -32,277 -23,654 9,382 283,386 873,395z"/>
                    <text stroke="#000" transform="rotate(-3.9734346866607666 674.8984374999966,1375.085937500001) " xmlSpace="preserve" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="450" id="svg_12" y="1700" x="1600" strokeWidth="0" fill="#fcf9f9">{L[PROMPTS[this.props.prompt]]}</text>

                    <g id="_691833688">
                        <g>
                            <path stroke="black" strokeWidth="7.62" fill="white" d="M3504 290l108 295c2,6 5,9 11,11l298 99c32,11 54,37 60,70 6,33 -7,65 -33,85l-247 195c-5,3 -7,7 -7,13l-3 315c0,33 -18,62 -47,78 -30,16 -64,14 -92,-5l-261 -175c-5,-4 -9,-4 -15,-3l-300 95c-32,10 -65,2 -89,-21 -24,-23 -33,-56 -24,-88l87 -303c1,-6 0,-10 -3,-15l-183 -256c-19,-27 -22,-61 -7,-91 14,-30 43,-49 76,-50l315 -12c6,0 10,-2 13,-7l187 -253c20,-26 52,-40 85,-35 33,5 60,26 71,58z"/>
                            <path fill="#F4171E" stroke="black" strokeWidth="7.62"  d="M3470 302l108 296c6,15 18,26 34,32l298 99c19,7 32,22 36,42 3,20 -4,39 -20,51l-248 194c-13,11 -20,25 -20,42l-3 314c0,20 -10,38 -28,47 -18,10 -38,8 -55,-3l-261 -175c-14,-10 -30,-12 -46,-7l-300 95c-19,6 -38,1 -53,-13 -14,-14 -20,-33 -14,-53l86 -302c5,-16 2,-32 -8,-46l-183 -256c-11,-16 -13,-36 -4,-54 9,-18 26,-29 46,-30l314 -12c17,0 31,-8 41,-21l187 -253c12,-17 31,-24 51,-21 20,2 35,15 42,34z"/>
                        </g>
                        <path stroke="black" strokeWidth="7.62" fill="white" d="M3402 333c30,40 68,171 95,180 -18,-88 -28,-174 -95,-180z"/>
                    </g>
                    <path stroke="black" strokeWidth="7.62" fill="white" d="M3357 1377c17,40 14,172 36,181 9,-89 25,-175 -36,-181z"/>

                </g>
            </ svg>
        )
    }
});
export default AnswerPrompt;