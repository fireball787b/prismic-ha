import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { Product } from "@/app/types/Product";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  const { uid } = await params;
  const client = createClient();

  let doc;
  try {
    doc = await client.getByUID("product", uid);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return notFound();
  }

  if (!doc) {
    return notFound();
  }

  const product: Product = {
    id: doc.id,
    uid: doc.uid,
    name: doc.data.name || "Unnamed product",
    image: doc.data.image?.url || "",
    star_rating: doc.data.star_rating || 0,
    compatible_monsters: doc.data.compatible_monsters || "N/A",
    summary: doc.data.summary || "N/A",
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 text-gray-900">
      {/* PRODUCT NAME */}
      <h1 className="text-4xl font-bold mb-6">{product.name}</h1>{" "}
      {/* Increased bottom margin */}
      {/* Full image */}
      {product.image && (
        <div className="relative mb-10">
          {/* Star rating in top right */}
          <div className="absolute top-0 right-0 p-2 text-yellow-600 text-lg font-bold">
            {"★".repeat(product.star_rating)}
            {"☆".repeat(5 - product.star_rating)}
          </div>

          {/* Image */}
          <Image
            src={product.image}
            alt={product.name ?? "Product image"}
            width={360}
            height={360}
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
      )}
      <div className="mb-10">
        {" "}
        {/* Extra spacing between blocks */}
        <h2 className="text-xl font-bold mb-2">Compatible monsters</h2>
        <PrismicRichText field={product.compatible_monsters} />
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Summary</h2>
        <PrismicRichText field={product.summary} />
      </div>
      {/* Disabled button */}
      <button
        disabled
        className="bg-gray-400 text-white px-6 py-3 rounded font-semibold cursor-not-allowed opacity-75"
      >
        No stock
      </button>
    </section>
  );
}
