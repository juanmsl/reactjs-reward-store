import {createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import reducer from './reducers';
import initialState from './initialState';

export default createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk))
);