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

export default function catFact(state = initialState, { payload, type }) {
  switch (type) {
    case FETCH_FACT_REQUESTED:
      return {
        ...state,
        fetchFactStatus: "fetching",
      };
    case FETCH_FACT_SUCCESS:
      return {
        ...state,
        fetchFactStatus: "success",
        fact: payload,
        counter: state.counter + 1,
      };
    case FETCH_FACT_FAILURE:
      return { ...state, fetchFactStatus: "failure", errorMsg: payload };

    default:
      return state;
  }
}
