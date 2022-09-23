import { render, screen } from "@testing-library/react";
import { PersonPage } from "./PersonPage";

test("Should render loading indicator when data is loading", async () => {
  render(<PersonPage id={0} />);
  expect(
    await screen.findAllByText("Herman Vandervort", undefined, {
      timeout: 5000,
    })
  ).toHaveLength(2);
});
