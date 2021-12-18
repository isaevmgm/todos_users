import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import usersReducer from './users';
import todosReducer from './todos';

const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootReducer = combineReducers({
    todos: todosReducer,
    users: usersReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store;