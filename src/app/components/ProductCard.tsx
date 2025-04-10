"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/types/Product";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Link
            href={`/products/${product.uid}`}
            className="block group border rounded-xl shadow overflow-hidden relative h-full"
        >
            <div className="relative w-full h-64">
                {/* Image fills the card */}
                <Image
                    src={product.image}
                    alt={""}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Star rating at top */}
                <div className="absolute top-0 left-0 w-full text-yellow-400 text-sm font-semibold bg-black/50 px-3 py-1">
                    {"★".repeat(product.star_rating)}
                    {"☆".repeat(5 - product.star_rating)}
                </div>

                {/* Name at bottom */}
                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center px-3 py-2 text-sm font-semibold">
                    {product.name}
                </div>
            </div>
        </Link>
    );
}
