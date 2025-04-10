"use client";

import React from "react";
import Link from "next/link";
import { Monster } from "@/app/types/Monster";

interface MonsterCardProps {
  monster: Monster;
}

export function MonsterCard({ monster }: MonsterCardProps) {
  return (
    <div
      className="relative w-full h-96 overflow-hidden rounded-xl shadow-xl group [perspective:1000px]">
      {/* The 'inner' container that flips on hover */}
      <div
        className="
          absolute
          inset-0
          transition-transform
          duration-500
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
        "
      >
        {/* FRONT SIDE */}
        <div
          className="
            absolute
            inset-0
            [backface-visibility:hidden]
          "
        >
          <img
            src={monster.card_image}
            alt={monster.name?.toString()}
            className="w-full h-full object-cover"
          />
          {/* Optional overlay name */}
          <div
            className="
              absolute
              bottom-4
              left-4
              bg-black/50
              text-white
              px-2
              py-1
              rounded
            "
          >
            {monster.name}
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="
            absolute
            inset-0
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
            bg-white
            flex
            flex-col
            items-center
            justify-center
            p-4
            text-center
            rounded-xl border border-black
          "
        >
          <h2 className="text-2xl font-bold mb-4">{monster.name}</h2>
          <p className="text-lg mb-4">{monster.card_description}</p>
          <Link
            href={`/monsters/${monster.uid}`}
            className="
              inline-flex
              items-center
              bg-yellow-800
              hover:bg-yellow-700
              text-white
              font-bold
              py-2
              px-4
              rounded-full
            "
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
