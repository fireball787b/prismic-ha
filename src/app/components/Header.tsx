"use client";

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      {/* Left side: Snugglewild logo or title */}
      <h1 className="text-2xl font-bold">Snugglewild</h1>

      {/* Right side: Log in button */}
      <button
        type="button"
        className="border border-gray-900 rounded px-4 py-2 text-sm hover:bg-gray-100"
      >
        Log in
      </button>
    </header>
  );
}
