import { ErrorMessage } from "./ErrorMessage";
import { render, screen } from "@testing-library/react";

test("Should render correct message when message prop passed", () => {
  render(<ErrorMessage message="test" />);
  expect(screen.getByText("test")).toBeInTheDocument();
});