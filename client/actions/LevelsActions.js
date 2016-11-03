export function newGame() {
    return {
        type: 'SET_NEW_LIST'
    }
}
export function complete(levelNumber) {
    return {
        type: 'NEXT',
        levelNumber
    }
}
