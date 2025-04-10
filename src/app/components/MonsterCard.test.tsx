import { render, screen } from "@testing-library/react";
import { MonsterCard } from "./MonsterCard";
import { Monster } from "@/app/types/Monster";

describe("MonsterCard", () => {
    const mockMonster: Monster = {
        id: "1",
        uid: "dragon",
        name: "Fire Dragon",
        card_image: "/fire-dragon.png",
        card_description: "Breathes fire",
        full_image: "",
        weight: "200",
        size: "100",
        locations: "Mountain",
        summary: [
            {
                type: "paragraph",
                text: "The full lore of the Fire Dragon",
                spans: [],
            },
        ],
    };

    it("displays monster name on both front and back", () => {
        render(<MonsterCard monster={mockMonster} />);

        // We expect "Fire Dragon" on the front overlay and on the back heading
        const nameElements = screen.getAllByText("Fire Dragon");
        expect(nameElements).toHaveLength(2);

        // Also confirm the description is present
        expect(screen.getByText("Breathes fire")).toBeInTheDocument();
    });

    it("displays the monster image", () => {
        render(<MonsterCard monster={mockMonster} />);

        // By default, getByAltText matches <img alt="Fire Dragon" />
        const image = screen.getByAltText("Fire Dragon");
        expect(image).toBeInTheDocument();

        // Optionally check the src
        expect(image).toHaveAttribute("src", expect.stringContaining("/fire-dragon.png"));
    });
});
