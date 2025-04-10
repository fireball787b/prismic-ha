import { render, screen } from "@testing-library/react";
import NotFoundPage from "./not-found";

describe("NotFoundPage", () => {
  it("renders the 404 image, heading, message, and home link", () => {
    render(<NotFoundPage />);

    // Check for image by alt text
    const image = screen.getByAltText(/404 - Not Found/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      expect.stringContaining("/not-found.png"),
    );

    // Heading
    expect(
      screen.getByRole("heading", { name: /404 - Page Not Found/i }),
    ).toBeInTheDocument();

    // Paragraph text
    expect(
      screen.getByText(/The page you are looking for doesn’t exist/i),
    ).toBeInTheDocument();

    // Back link
    const link = screen.getByRole("link", { name: /go back home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
