"use client";

import simpleSearchParams from "@/src/helper/simpleSearchParams";
import { useSearchParams } from "next/navigation";

export default function LatestFilter() {
  const searchParams = useSearchParams();

  const sort = searchParams.get("sort");
  const popular = searchParams.get("popular");

  const handleLatest = () => {
    simpleSearchParams("popular");
    simpleSearchParams("sort", "latest");
  };

  const handlePopular = () => {
    simpleSearchParams("sort");
    simpleSearchParams("popular", "true");
  };

  return (
    <div className="flex items-center flex-row gap-4">
      <span className="text-[14px] text-[var(--secondary-text)]">
        Sort By:
      </span>

      <button
        type="button"
        onClick={handleLatest}
        className={
          sort === "latest"
            ? "text-[var(--primary)] font-semibold"
            : "text-[var(--text)]"
        }
      >
        <p className="text-[13px]">Latest</p>
      </button>

      <button
        type="button"
        onClick={handlePopular}
        className={
          popular === "true"
            ? "text-[var(--primary)] font-semibold"
            : "text-[var(--text)]"
        }
      >
        <p className="text-[13px]">Popular</p>
      </button>
    </div>
  );
}