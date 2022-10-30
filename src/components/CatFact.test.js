import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CatFact from "./CatFact";

const mockStore = configureStore();

describe("catFact should display different content", () => {
  it("Should display Loading when the status is pending", () => {
    render(
      <Provider
        store={mockStore({
          fact: "",
          fetchFactStatus: "pending",
          errorMsg: "",
          counter: 0,
        })}
      >
        <CatFact />
      </Provider>
    );
    const loading = screen.getByText("Loading...");
    expect(loading).toBeInTheDocument();
  });
  it("Should display Loading when the status is fetching", () => {
    render(
      <Provider
        store={mockStore({
          fact: "",
          fetchFactStatus: "fetching",
          errorMsg: "",
          counter: 0,
        })}
      >
        <CatFact />
      </Provider>
    );
    const loading = screen.getByText("Loading...");
    expect(loading).toBeInTheDocument();
  });
  test("Should display cat fact when the status is success", () => {
    render(
      <Provider
        store={mockStore({
          fact: "A cat has more bones than a human",
          fetchFactStatus: "success",
          errorMsg: "",
          counter: 1,
        })}
      >
        <CatFact />
      </Provider>
    );
    const catFact = screen.getByText("A cat has more bones than a human");
    expect(catFact).toBeInTheDocument();
  });
  it("Should display error message when the status is failed", () => {
    render(
      <Provider
        store={mockStore({
          fact: "",
          fetchFactStatus: "failure",
          errorMsg: "Something went wrong",
          counter: 0,
        })}
      >
        <CatFact />
      </Provider>
    );
    const error = screen.getByText("Something went wrong");
    expect(error).toBeInTheDocument();
  });
});
