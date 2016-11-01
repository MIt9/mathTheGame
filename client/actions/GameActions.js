export function setExamplesArray( levelArray ) {
    return {
        type: 'SET_EXAMPLES_ARRAY',
        levelArray
    }
}
export function nextExample(  ) {
    return {
        type: 'NEXT_EXAMPLE'
    }
}
export function getCurrentVal(value){
    return {
        type: 'CURRENT_VALUE',
        value
    }
}

export function pressOption(option) {
    const answer = parseInt(option.text);
    return {
        type: 'PRESS',
        answer
    }
}

