/**
 * Created by d.bilukha on 10.08.2016.
 */
const initialState = {
    allLevels: 7,
    currentLevel: 0,
    currentVal: 0,
    options: [],
    levelArray: [],
    lives: 3,
    prompt: 0
};

export default function game (state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_EXAMPLES_ARRAY':
            const levelArray = action.levelArray;
            const currentVal = _startLevel(levelArray, 0);
            const options = _generateAnswer(currentVal);
            return { ...state,
                levelArray,
                currentVal,
                options,
                lives: 3,
                prompt: 0
            };
        break;
        case 'PRESS':
        {
            if (state.currentVal === action.answer) {
                if (!(state.levelArray[state.currentLevel + 1])) {
                    return {...state, prompt:2};
                }
                return {...state, prompt:1};
            } else {
                if (state.lives > 1) {
                    const lives = state.lives -1;
                    return {...state, lives};
                } else {
                    return {...state, lives: 0, prompt: 3};
                }
            }
        }
            break;

        case 'NEXT_EXAMPLE':
        {
            const currentLevel = state.currentLevel + 1;
            const newCurrentVal = _startLevel(state.levelArray, currentLevel);
            const options = _generateAnswer(newCurrentVal);

            return { ...state,
                currentLevel: currentLevel,
                options: options,
                prompt: 0
            };
        }

        break;
        case 'CURRENT_VALUE':
            if(state.currentVal !== action.value) {
                return { ...state,currentVal: action.value}
            }
            return state;
            break;
        case 'REST_LEVEL':
            return { ...state, currentVal:0, currentLevel:0};
            break;

        case 'SET_ANSWER':
            let tmpResult = (state.model[0] + state.model[2]) === action.answer;
            return { ...state,
                answer : action.answer,
                result : tmpResult,
                mistakes:(!tmpResult)?state.mistakes+1: state.mistakes};
        break;

        default:
            return state;
    }
}
function _startLevel(levelArray, select){
    const level = levelArray[select];
    let result = 0;
    if (level[1] === "+") {
        result = parseInt(level[0]) + parseInt(level[2]);
    } else {
        result = parseInt(level[0]) - parseInt(level[2]);
    }
    return result;
}
function _generateAnswer(answer){
    const result = [answer];
    for (var i = 0; i < 3; i++) {
        result.push(getRandomIntWithoutNum(0, 10, result))
    }
    return result.shuffle();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomIntWithoutNum(min, max, ignoreArray) {
    var result = getRandomInt(min, max);
    var eqNum = 0;
    while (eqNum !== ignoreArray.length) {
        eqNum = 0;
        result = getRandomInt(min, max);
        for (var i = 0; i < ignoreArray.length; i++) {
            var ignore = ignoreArray[i];
            if (ignore !== result) {
                eqNum++;
            }
        }
    }
    return result;
}

Array.prototype.shuffle = function (b) {
    var i = this.length, j, t;
    while (i) {
        j = Math.floor(( i-- ) * Math.random());
        t = b && typeof this[i].shuffle !== 'undefined' ? this[i].shuffle() : this[i];
        this[i] = this[j];
        this[j] = t;
    }
    return this;
};