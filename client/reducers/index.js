/**
 * Created by d.bilukha on 10.08.2016.
 */
import { combineReducers } from 'redux';
import game from './game';
import levels from './levels';

export default combineReducers({
    game,
    levels
})