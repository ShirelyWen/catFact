import { render, screen } from "@testing-library/react";
import App from "./App";
import * as redux from "react-redux";

const mockStore = {
  fact: "A cat has more bones than a human",
  fetchFactStatus: "success",
  errorMsg: "",
  counter: 1,
};

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("Test App", () => {
  const useSelectorMock = redux.useSelector;
  const useDispatchMock = redux.useDispatch;
  const fetchFact = jest.spyOn(redux, "useDispatch");
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });
  it("Should dispatch an action", () => {
    render(<App />);
    expect(fetchFact).toHaveBeenCalled();
  });
  it("shows counter and cat fact", () => {
    render(<App />);
    expect(
      screen.getByText("A cat has more bones than a human")
    ).toBeInTheDocument();
    expect(screen.getByText("Counter: 1")).toBeInTheDocument();
  });
});
