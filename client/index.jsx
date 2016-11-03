if (!localStorage.lng){localStorage.setItem('lng', "en")}

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory} from 'react-router';
import { loadState, saveState } from './util/local/index.js';
import {} from './style.less';

//import App from './components/index.jsx';
import Game from './container/game/index.jsx';
import Home from './container/home/index.jsx';
import Levels from './container/levels/index.jsx';
import configureStore from './store/configureStore'

const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(()=>{
   saveState({
       levels:store.getState().levels
   });
});


render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home}/>
            <Route path="/levels(/:status/:levelNumber)" component={Levels}/>
            <Route path="/game/:level" component={Game}/>
        </Router>
    </Provider>, document.getElementById('app'));
