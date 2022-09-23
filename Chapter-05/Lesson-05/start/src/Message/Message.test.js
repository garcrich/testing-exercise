import React from "react";
import { render, screen } from "@testing-library/react";
import { Message } from "./Message";
import { logRoles } from '@testing-library/dom'

test("Should render correct image when type is error", () => {
  render(<Message message="test" type="error" />);
  expect(screen.getByRole("img", { name: "cross" })).toBeInTheDocument();
});
