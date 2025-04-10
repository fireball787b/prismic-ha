"use client";

export function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4">
            {/* Left side: Snugglewild logo or title */}
            <h1 className="text-2xl font-bold">Snugglewild</h1>

            {/* Right side: Disabled Log in button */}
            <button
                disabled
                className="border border-gray-400 rounded px-4 py-2 text-sm text-gray-400 bg-gray-100 cursor-not-allowed"
            >
                Log in
            </button>
        </header>
    );
}
