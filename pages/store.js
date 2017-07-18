import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import categoryReducer from './reducer';

const defaultState = {
    isFetching: false,
    category: {},
};

let initialState =
    typeof __NEXT_DATA__ !== 'undefined'
        ? __NEXT_DATA__.props.initialState
        : defaultState;

export const initStore = intialState => {
    return createStore(
        categoryReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
};
