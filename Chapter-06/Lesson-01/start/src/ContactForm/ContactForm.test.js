import { render, screen} from "@testing-library/react";
import { ContactForm } from "./ContactForm";
import userEvent from "@testing-library/user-event";

test("Clicking submit button without filling in form renders name validation error", async () => {
  const user = userEvent.setup();
  render(<ContactForm />);
  screen.getByLabelText("Name").focus();
  await user.keyboard("test");

  screen.getByLabelText("Message").focus();
  await user.keyboard("test");

  await user.click(screen.getByText("Save"));
  expect(await screen.findByText("Successfully saved")).toBeInTheDocument();
});

test("Pressing Enter when form is completed in should render a success message", async () => {
  const user = userEvent.setup();
  render(<ContactForm />);

  screen.getByLabelText("Message").focus();
  await user.keyboard("test");
  screen.getByLabelText("Name").focus();
  await user.keyboard("test{enter}");
  
  expect(await screen.findByText("Successfully saved")).toBeInTheDocument();
});
