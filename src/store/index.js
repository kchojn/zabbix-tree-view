import {createStore, applyMiddleware} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {combineReducers} from 'redux';
import hostReducer from './hosts/reducers'

const initialState = {};

const persistConfig = {
    key: 'treeMenu',
    storage,
    whitelist: [""],
};

const rootReducer = combineReducers({
    hosts: hostReducer
    });

const persistedReducer = persistReducer(
    persistConfig, rootReducer
);

let middleware;

if (process && process.env && (process.env.NODE_ENV === 'production')){
    middleware = applyMiddleware(thunk, promise)
}
else{
    middleware = applyMiddleware(thunk, promise, logger)
}

const store = createStore(persistedReducer, initialState, middleware);

export default store;
