import React from 'react';
import { MonsterCard } from './MonsterCard';
import { Monster } from '../types/Monster';

interface MonsterGridProps {
    monsters: Monster[];
    onMonsterClick?: (uid: string) => void; // for navigation or detail page
}

export function MonsterGrid({ monsters, onMonsterClick }: MonsterGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {monsters.map((monster) => (
                <div
                    key={monster.uid}
                    onClick={() => onMonsterClick?.(monster.uid)}
                    className="transition-transform hover:scale-[1.02]"
                >
                    <MonsterCard
                        name={monster.name}
                        imageUrl={monster.cardImageUrl}
                        description={monster.cardDescription}
                    />
                </div>
            ))}
        </div>
    );
}
