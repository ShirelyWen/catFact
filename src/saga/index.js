import { put, takeEvery, call, all } from "redux-saga/effects";

import {
  FETCH_FACT,
  FETCH_FACT_REQUESTED,
  FETCH_FACT_SUCCESS,
  FETCH_FACT_FAILURE,
} from "../actions/index";
import fetchFact from "../fetch/fetchFact";

export function* onfetchFactSaga() {
  yield put({ type: FETCH_FACT_REQUESTED });
  try {
    const response = yield call(fetchFact, "https://catfact.ninja/fact");
    const fact = response.fact;
    yield put({ type: FETCH_FACT_SUCCESS, payload: fact });
  } catch (error) {
    yield put({ type: FETCH_FACT_FAILURE, payload: error.message });
  }
}

function* watchFetchFactSaga() {
  yield takeEvery(FETCH_FACT, onfetchFactSaga);
}

export default function* fetchSaga() {
  yield all([watchFetchFactSaga()]);
}
