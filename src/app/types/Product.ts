import { KeyTextField, RichTextField } from "@prismicio/client";

export interface Product {
  id: string;
  uid: string;
  name: KeyTextField;
  image: string;
  star_rating: number;
  compatible_monsters: RichTextField;
  summary: RichTextField;
}
