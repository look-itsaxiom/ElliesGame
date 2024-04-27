import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Noras name on page", () => {
  render(<App />);
  const header = screen.getByText(/Nora/i);
  expect(header).toBeInTheDocument();
});
