"use client";
import React from 'react';
import {Monster} from "@/app/types/Monster";
import Link from "next/link";


interface MonsterCardProps {
    monster: Monster;
}

export function MonsterCard({ monster }: MonsterCardProps) {


    return (
        <section className="py-16 mx-auto sm:py-20">
            <div className="mx-auto flex justify-center object-center  px-4 py-16  sm:py-24 lg:max-w-7xl ">
                <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
                    <div className=" mx-auto grid gap-24 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
                        <div
                            key={monster.name}
                            className="group  h-96 w-96  [perspective:1000px]"
                        >
                            <div
                                className="relative  rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute inset-0  rounded-xl [backface-visibility:hidden]">
                                    {monster.card_image && (
                                        <img
                                            className="object-cover cursor-pointer object-left  rounded-xl"
                                            src={monster.card_image}
                                            width={320}
                                            height={320}
                                        />
                                    )}
                                    <p className=" md:my-6 text-2xl">{monster.name}</p>
                                </div>
                                {/* Back face with text */}
                                <div
                                    className="border-black bg-red-600 absolute inset-0 rounded-xl px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <div className="flex min-h-full flex-col items-center justify-center">
                                        <h2 className="text-2xl font-bold mb-4">
                                            {monster.name}
                                        </h2>
                                        <p className="text-lg text-pretty text-center mb-4 ">
                                            {monster.card_description}
                                        </p>
                                        <Link
                                            href={`/monsters/${monster.uid}`}
                                            className="inline-flex items-center bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
                                        >
                                            Learn more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
