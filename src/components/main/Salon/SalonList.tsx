"use client";

import Item from "./Item";
import LatestFilter from "./LatestFilter";

export default function SalonList() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <p className="text-[14px] text-[var(--secondary-text)]">
          Showing 12 of 14 salons
        </p>
         <LatestFilter/>
      </div>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </div>
  );
}
