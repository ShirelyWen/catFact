import { render, screen, fireEvent } from "@testing-library/react";
import CatButton from "./CatButton";
import * as redux from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("Test Button", () => {
  const useDispatchMock = redux.useDispatch;
  const fetchFact = jest.spyOn(redux, "useDispatch");
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
  });
  afterEach(() => {
    useDispatchMock.mockClear();
  });
  it("Should dispatch an action on button click", () => {
    render(<CatButton />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(fetchFact).toHaveBeenCalled();
  });
});
