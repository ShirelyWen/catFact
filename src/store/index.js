import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import catFact from "../reducers";
import fetchSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
  const store = createStore(catFact, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(fetchSaga);
  return store;
};

export default configureStore;
