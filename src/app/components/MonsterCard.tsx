import React from 'react';

interface MonsterCardProps {
    name: string;
    imageUrl: string;
    description: string;
}

export function MonsterCard({ name, imageUrl, description }: MonsterCardProps) {
    return (
        <div className="relative bg-white shadow-lg rounded overflow-hidden cursor-pointer group perspective">
            {/* Front side */}
            <div className="backface-hidden group-hover:rotate-y-180 transform transition-transform duration-500 ease-in-out">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="font-bold text-lg">{name}</h2>
                </div>
            </div>

            {/* Back side */}
            <div className="absolute inset-0 rotate-y-180 backface-hidden transform transition-transform duration-500 ease-in-out group-hover:rotate-y-0 bg-gray-100 p-4">
                <p className="font-medium">{description}</p>
            </div>
        </div>
    );
}
