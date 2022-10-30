import configureStore from ".";

it("Should successfully configure store", () => {
  const store = configureStore();
  expect(store.dispatch).toBeInstanceOf(Function);
  expect(store.getState).toBeInstanceOf(Function);
});
