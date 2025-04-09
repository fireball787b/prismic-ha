import { type Metadata } from "next";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import {MonsterCard} from "@/app/components/MonsterCard";
import {Monster} from "@/app/types/Monster"; // your Slice components map

/**
 * Dynamically generate metadata (title, description, etc.)
 * from the home document in Prismic.
 */
export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home"); // or getSingle("home_page") if that's your custom type

  return {
    title: asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title || undefined,
      images: [
        {
          url: home.data.meta_image?.url || "",
        },
      ],
    },
  };
}

/**
 * The main homepage route. Renders:
 * 1) A global <Navigation>
 * 2) The SliceZone for the "home" page
 * 3) A listing of all "monster" documents from Prismic
 * 4) Another <Navigation> if desired
 */
export default async function Index() {
  // 1. Initialize Prismic client
  const client = createClient();

  // 2. Fetch the homepage doc by UID "home"
  //    (assuming your custom type is "page" and doc UID is "home")
  const home = await client.getByUID("page", "home");

  // 3. Fetch all "monster" docs, ordered however you'd like
  //    For example, by name or by creation date
  const documents = await client.getAllByType("monster", {
    orderings: [{ field: "my.monster.name", direction: "asc" }],
    pageSize: 100,
  });

  const monsters: Monster[] = documents.map((doc) => ({
    id: doc.id,
    uid: doc.uid,
    name: doc.data.name, // if `name` is Key Text, it's likely a string
    card_image: doc.data.card_image?.url || "",
    card_description: doc.data.card_description || "",
    full_image: doc.data.full_image?.url || "",
    weight: doc.data.weight || "",
    size: doc.data.size || "",
    locations: doc.data.locations || "",
    summary: doc.data.summary || "",
  }));

  return (
      <>
        {/* 2) SliceZone for your "home" page content */}
        <SliceZone slices={home.data.slices} components={components} />

        {/* 3) Monster listing section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl w-full mx-auto my-8">
          {monsters.map((monster) => (
              <MonsterCard key={monster.id} monster={monster} />
          ))}
        </section>

      </>
  );
}
