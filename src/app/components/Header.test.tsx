import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
    it("renders the title and login button", () => {
        render(<Header />);

        // Check the heading
        expect(screen.getByRole("heading", { name: /snugglewild/i })).toBeInTheDocument();

        // Check the button
        const loginButton = screen.getByRole("button", { name: /log in/i });
        expect(loginButton).toBeInTheDocument();
        expect(loginButton).toHaveAttribute("type", "button");
    });
});
