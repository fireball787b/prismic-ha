import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MonsterListingSlice`.
 */
export type MonsterListingSliceProps =
  SliceComponentProps<Content.MonsterListingSliceSlice>;

/**
 * Component for "MonsterListingSlice" Slices.
 */
const MonsterListingSlice: FC<MonsterListingSliceProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for monster_listing_slice (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default MonsterListingSlice;
