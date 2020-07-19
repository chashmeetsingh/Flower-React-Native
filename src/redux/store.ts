import {compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: storage,
};
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
  const {logger} = require(`redux-logger`);

  middlewares.push(logger);
}

export default function configureStore() {
  const enhancer = compose(applyMiddleware(...middlewares));
  const persistedReducer = persistReducer(persistConfig, reducer);
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return {store, persistor};
}
