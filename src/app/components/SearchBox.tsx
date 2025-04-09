import React from 'react';

interface SearchBoxProps {
    searchText: string;
    onSearchTextChange: (value: string) => void;
}

export function SearchBox({ searchText, onSearchTextChange }: SearchBoxProps) {
    return (
        <input
            type="text"
            placeholder="Search for a monster..."
            value={searchText}
            onChange={(e) => onSearchTextChange(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full max-w-md mb-6"
        />
    );
}
