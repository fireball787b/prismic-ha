import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the correct footer text", () => {
    render(<Footer />);

    // Check if the footer element exists
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();

    // Check for the text
    expect(
      screen.getByText(/Joan Marc 2025 - The Pokedex no one asked for/i),
    ).toBeInTheDocument();
  });
});
