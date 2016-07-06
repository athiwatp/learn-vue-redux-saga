import Vue from 'vue'
import Revue from 'revue'
import {createStore, combineReducers} from 'redux'
// create the logic how you would update the todos
import todos from './reducers/todos'

// create a redux store
const reduxStore = createStore(combineReducers({todos}), window.devToolsExtension && window.devToolsExtension())
// binding the store to Vue instance, actions are optional
const store = new Revue(Vue, reduxStore)
// expose the store for your component to use
export default store
