import { createStore, applyMiddleware, compose } from 'redux'

import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
// const store = createStore(
//   rootReducer,
//   // composeEnhancers(applyMiddleware(ReduxThunk))
//   composeEnhancers(applyMiddleware(sagaMiddlaware))
// )

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
