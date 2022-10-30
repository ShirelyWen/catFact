import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { onfetchFactSaga } from "./index";
import fetchFact from "../fetch/fetchFact";
import {
  FETCH_FACT,
  FETCH_FACT_SUCCESS,
  FETCH_FACT_FAILURE,
  FETCH_FACT_REQUESTED,
} from "../actions";

describe("test saga", () => {
  it("Should handle request", () => {
    const fakeFact = { fact: "A cat has more bones than a human", length: 20 };

    return expectSaga(onfetchFactSaga)
      .provide([[matchers.call.fn(fetchFact), fakeFact]])
      .put({
        type: FETCH_FACT_REQUESTED,
      })
      .put({
        type: FETCH_FACT_SUCCESS,
        payload: fakeFact.fact,
      })
      .dispatch({ type: FETCH_FACT })
      .run();
  });

  it("Should handle errors", () => {
    const error = new Error("500 Internal Server Error");

    return expectSaga(onfetchFactSaga)
      .provide([[matchers.call.fn(fetchFact), throwError(error)]])
      .put({ type: FETCH_FACT_FAILURE, payload: error.message })
      .dispatch({ type: FETCH_FACT })
      .run();
  });
});
