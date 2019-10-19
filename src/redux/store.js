import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ImageReducer from './reducer';

const store = createStore(
  ImageReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
