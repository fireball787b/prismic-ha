import "@testing-library/jest-dom";
import React from "react"; // ✅ required for createElement

// ✅ Mock next/image to behave like a regular <img>
jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: any) => {
        const { src, alt, ...rest } = props;
        return React.createElement("img", { src, alt, ...rest });
    },
}));
