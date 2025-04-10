import { createClient } from "@/prismicio";
import { Monster } from "@/app/types/Monster";
import { notFound } from "next/navigation";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices"; // Your slices map

export default async function MonsterPage({ params }: { params: Promise<{ uid: string }> }) {
    const { uid } = await params;
    const client = createClient();

  let doc;
  try {
    doc = await client.getByUID("monster", uid, {
        fetchLinks: [
            "product.uid",
            "product.name",
            "product.image",
            "product.star_rating",
            "product.compatible_monsters",
            "product.summary"
        ],
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return notFound();
  }

  if (!doc) {
    return notFound();
  }

  const monster: Monster = {
    id: doc.id,
    uid: doc.uid,
    name: doc.data.name || "Unnamed Monster",
    card_image: doc.data.card_image?.url || "",
    card_description: doc.data.card_description || "",
    full_image: doc.data.full_image?.url || "",
    weight: doc.data.weight || "N/A",
    size: doc.data.size || "N/A",
    locations: doc.data.locations || "",
    summary: doc.data.summary || "",
  };

  return (
      <section className="max-w-4xl mx-auto px-4 py-8 text-gray-900">
          {/* MONSTER NAME */}
          <h1 className="text-4xl font-bold mb-2">{monster.name}</h1>

          {/* Weight & Size */}
          <div className="text-gray-700 mb-6">
              <p>
                  <span className="font-bold">Weight:</span> {monster.weight}
              </p>
              <p>
                  <span className="font-bold">Size:</span> {monster.size}
              </p>
          </div>

          {/* Full image */}
          {monster.full_image && (
              <Image
                  src={monster.full_image}
                  alt={monster.name ?? "Monster image"}
                  width={360}
                  height={360}
                  className="w-full h-auto rounded-md mb-8 object-cover"
              />
          )}

          {/* Description */}
          <div className="mb-6">
              <h2 className="text-xl font-bold mb-1">Description</h2>
              <p className="leading-relaxed">{monster.card_description}</p>
          </div>

          {/* Long Description */}
          <div>
              <h2 className="text-xl font-bold mb-1">Summary</h2>
              <PrismicRichText field={monster.summary}/>
          </div>

          {doc.data.slices.some(slice => slice.slice_type === "related_products") && (
              <section className="py-12 border-t mt-12">
                  <h2 className="text-2xl font-bold mb-6">Recommended Products</h2>
                  <SliceZone slices={doc.data.slices} components={components} />
              </section>
          )}
      </section>
  );
}
