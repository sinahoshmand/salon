"use client";

import { Link } from "@/src/i18n/navigation";
import { CgChevronRight } from "react-icons/cg";

type Props = {
  href?: string;
  hrefSecond?: string;
  prev: string;
  active: string;
  secoundPrev?: string;
};

export default function BreadCrumb({
  href = "#",
  prev,
  active,
  secoundPrev,
  hrefSecond="#",
}: Props) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Link
        href={href}
        className="text-[var(--primary)]/80 font-bold text-[15px]"
      >
        {prev}
      </Link>
      <CgChevronRight color="var(--rose-gold)" size={15} />
      {secoundPrev && (
        <>
          <Link
            href={hrefSecond}
            className="text-[var(--primary)]/80 font-bold text-[15px]"
          >
            {prev}
          </Link>
          <CgChevronRight color="var(--rose-gold)" size={15} />
        </>
      )}

      <p className="text-[var(--primary)] font-bold text-[15px]">{active}</p>
    </div>
  );
}
