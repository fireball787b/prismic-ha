import React, { useState } from 'react';
import { SearchBox } from './SearchBox';
import { MonsterGrid } from './MonsterGrid';
import { Monster } from '../types/Monster';

interface LandingPageProps {
    monsters: Monster[];
    onMonsterSelect: (uid: string) => void;
}

export function LandingPage({ monsters, onMonsterSelect }: LandingPageProps) {
    const [searchText, setSearchText] = useState('');

    // Single responsibility: filter logic
    const filteredMonsters = monsters.filter((m) =>
        m.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Imaginary Monster Pokedex</h1>

            <SearchBox
                searchText={searchText}
                onSearchTextChange={setSearchText}
            />

            <MonsterGrid
                monsters={filteredMonsters}
                onMonsterClick={onMonsterSelect}
            />
        </main>
    );
}
