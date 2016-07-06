import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'

function * delay (action) {
  yield put({type: 'ADD_TODO', text: 'add by saga'})
}

function * mySaga () {
  yield * takeEvery('ADD_TODO_SAGA', delay)
}

export default mySaga
