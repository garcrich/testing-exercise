import { getPerson } from "./data";

test("Should return not found message when person not found", async () => {
  const person = await getPerson(-99);
  expect(person).toContain("Person Not Found");
});

