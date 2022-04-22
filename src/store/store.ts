import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/reducer';
import thunk from 'redux-thunk'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));