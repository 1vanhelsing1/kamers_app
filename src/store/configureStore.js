import * as redux from 'redux';
import rootSaga from '../sagas/sagas'

//import reducers here
import {makersReducer, authReducer, uploadReducer} from '../reducers/reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const devtools = window.devToolsExtension || (() => noop => noop);

export var configure = (initialState = {}) => {

  var reducer = redux.combineReducers({
    makers: makersReducer,
    auth: authReducer,
    uploads: uploadReducer,
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  sagaMiddleware.run(rootSaga)
  return store;
};
