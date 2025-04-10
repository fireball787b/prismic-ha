import { FC } from "react";
import { Content, RichTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ProductCard } from "@/app/components/ProductCard";
import { Product } from "@/app/types/Product";

/**
 * Props for `RelatedProducts`.
 */
export type RelatedProductsProps =
  SliceComponentProps<Content.RelatedProductsSlice>;

/**
 * Component for "RelatedProducts" Slices.
 */
const RelatedProducts: FC<RelatedProductsProps> = ({ slice }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {slice.primary.products.map((groupItem, index) => {
        const productDoc = groupItem.product;

        if (!productDoc || !("data" in productDoc)) return null;
        // Cast `productDoc.data` to a known shape
        const data = productDoc.data as {
          name: string;
          uid: string;
          image: { url: string };
          star_rating: number;
          compatible_monsters: RichTextField;
          summary: RichTextField;
        };

        const product: Product = {
          id: productDoc.id,
          uid: data.uid,
          name: data.name,
          image: data.image?.url || "",
          star_rating: data.star_rating || 0,
          compatible_monsters: data.compatible_monsters,
          summary: data.summary,
        };

        return <ProductCard key={productDoc.id ?? index} product={product} />;
      })}
    </div>
  );
};

export default RelatedProducts;
