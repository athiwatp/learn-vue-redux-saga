import Vue from 'vue'
import Revue from 'revue'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
// create the logic how you would update the todos
import todos from './reducers/todos'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

// create a redux store
const reduxStore = createStore(combineReducers({todos}), compose(applyMiddleware(sagaMiddleware), window.devToolsExtension && window.devToolsExtension()))
sagaMiddleware.run(sagas)

// binding the store to Vue instance, actions are optional
const store = new Revue(Vue, reduxStore)

// expose the store for your component to use
export default store
