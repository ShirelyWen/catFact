import fetchFact from "./fetchFact";

it("fetch fact", async () => {
  global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          fact: "A cat's normal pulse is 140-240 beats per minute, with an average of 195.",
        }),
    })
  );
  const result = await fetchFact("");
  expect(result.fact).toEqual(
    "A cat's normal pulse is 140-240 beats per minute, with an average of 195."
  );
});
