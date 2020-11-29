import { compose, createStore } from 'redux';
import rootReducer from '../reducers/index';

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = compose(
    window.devToolsExtension && window.devToolsExtension(),
  )(createStore)(rootReducer);

export default store;