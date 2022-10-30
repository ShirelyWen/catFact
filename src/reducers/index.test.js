import catFact from "./index";
import {
  FETCH_FACT_REQUESTED,
  FETCH_FACT_SUCCESS,
  FETCH_FACT_FAILURE,
} from "../actions/index";

const initialState = {
  fact: "",
  fetchFactStatus: "pending",
  errorMsg: "",
  counter: 0,
};

describe("Cat Fact", () => {
  it("should return default state when state is not undefined", () => {
    expect(catFact(undefined, { type: "DUMMY_ACTION" })).toEqual(initialState);
  });

  it("should return default state for DUMMY_ACTION action type", () => {
    expect(catFact(undefined, { type: "DUMMY_ACTION" })).toEqual(initialState);
  });

  it("should return expected state for FETCH_FACT_REQUESTED action type and specific state", () => {
    const previousState = {
      fact: "A cat has more bones than a human",
      fetchFactStatus: "success",
      errorMsg: "",
      counter: 2,
    };
    const action = {
      type: FETCH_FACT_REQUESTED,
    };
    const expectedState = {
      fact: "A cat has more bones than a human",
      fetchFactStatus: "fetching",
      errorMsg: "",
      counter: 2,
    };
    expect(catFact(previousState, action)).toEqual(expectedState);
  });

  it("should return expected state for FETCH_FACT_SUCCESS action type and specific state", () => {
    const previousState = {
      fact: "A cat has more bones than a human",
      fetchFactStatus: "fetching",
      errorMsg: "",
      counter: 2,
    };
    const action = {
      payload:
        "Cats have individual preferences for scratching surfaces and angles. Some are horizontal scratchers while others exercise their claws vertically.",
      type: FETCH_FACT_SUCCESS,
    };
    const expectedState = {
      fact: "Cats have individual preferences for scratching surfaces and angles. Some are horizontal scratchers while others exercise their claws vertically.",
      fetchFactStatus: "success",
      errorMsg: "",
      counter: 3,
    };
    expect(catFact(previousState, action)).toEqual(expectedState);
  });

  it("should return expected state for FETCH_FACT_FAILURE action type and specific state", () => {
    const previousState = {
      fact: "Cats have individual preferences for scratching surfaces and angles. Some are horizontal scratchers while others exercise their claws vertically.",
      fetchFactStatus: "success",
      errorMsg: "",
      counter: 3,
    };
    const action = {
      payload: "500 Internal Server Error",
      type: FETCH_FACT_FAILURE,
    };
    const expectedState = {
      fact: "Cats have individual preferences for scratching surfaces and angles. Some are horizontal scratchers while others exercise their claws vertically.",
      fetchFactStatus: "failure",
      errorMsg: "500 Internal Server Error",
      counter: 3,
    };
    expect(catFact(previousState, action)).toEqual(expectedState);
  });
});
