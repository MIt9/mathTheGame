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
export function restLevel(  ) {
    return {
        type: 'REST_LEVEL'
    }
}
export function setCurrentVal(value){
    return {
        type: 'CURRENT_VALUE',
        value
    }
}

export function pressOption(answer) {
    return {
        type: 'PRESS',
        answer
    }
}

