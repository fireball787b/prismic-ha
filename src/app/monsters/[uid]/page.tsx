import { createClient } from "@/prismicio";
import { Monster } from "@/app/types/Monster";
import { notFound } from "next/navigation";
import { PrismicRichText } from "@prismicio/react";
type Params = Promise<{ uid: string }>

export default async function MonsterPage(props: { params: Params }) {
  const params = await props.params;
  const { uid } = params;
  const client = createClient();

  let doc;
  try {
    doc = await client.getByUID("monster", uid);
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
        <img
          src={monster.full_image}
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
        <h2 className="text-xl font-bold mb-1">Long Description</h2>
        <PrismicRichText field={monster.summary} />
      </div>
    </section>
  );
}
