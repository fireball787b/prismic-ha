import {KeyTextField, RichTextField} from "@prismicio/client";

export interface Monster {
    id: string;
    uid: string;
    name: KeyTextField;
    card_image: string;
    card_description: string;
    full_image: string;
    weight: string;
    size: string;
    locations: string;
    summary: RichTextField;
}