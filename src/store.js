import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducer/reducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const logMiddleWare = () => (dispatch) => (action) => {
  return dispatch(action);
};

const store = createStore(reducer, composeEnhancers(applyMiddleware(logMiddleWare)));

export default store;
