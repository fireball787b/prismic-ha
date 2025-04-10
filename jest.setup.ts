import "@testing-library/jest-dom";
import React from "react"; // ✅ required for createElement

// ✅ Mock next/image to behave like a regular <img>
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ priority, ...props }: any) => {
    return React.createElement("img", props); // strip `priority`
  },
}));
