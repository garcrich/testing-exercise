import { render, screen } from "@testing-library/react";
import { PersonPage } from "./PersonPage";

test("Should render loading indicator when data is loading", async () => {
  render(<PersonPage id={0} />);
  expect(await screen.getAllByText("Herman Vandervort")).toBeInTheDocument;
});
