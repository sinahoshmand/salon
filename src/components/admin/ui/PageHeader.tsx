"use client";

import simpleSearchParams from "@/src/helper/simpleSearchParams";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { FiPlus, FiSearch } from "react-icons/fi";

type Props = {
  title: string;
  activeSearch?:boolean
  meta?: string | null;
  href?: string;
  back_href?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string | null>>;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PageHeader({
  title,
  meta,
  setSearch,
  activeSearch = true,
  href,
  back_href,
  setOpen,
}: Props) {
  const t = useTranslations("adminPannel");

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-7">
      {/* Title */}
      <div className="min-w-0">
        <h2 className="text-xl font-bold text-slate-800 tracking-tight">
          {title}
        </h2>

        {meta && (
          <p className="text-sm text-slate-500 mt-1.5 leading-6">
            {meta}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
        {/* Search */}
      
         {activeSearch && <div className="relative w-full sm:w-72 group">
            <FiSearch
              size={17}
              className="
                absolute right-3.5 top-1/2 -translate-y-1/2
                text-slate-400
                transition-colors duration-200
                group-focus-within:text-[#405189]
              "
            />

            <input
              onChange={(e) => simpleSearchParams('search' , e.target.value)}
              type="text"
              placeholder={`${t("search")} ${title}...`}
              className="
                w-full
                pr-10 pl-4
                py-2.5
                rounded-xl
                border border-slate-200
                bg-white
                text-sm text-slate-700
                placeholder:text-slate-400
                outline-none
                transition-all duration-200

                hover:border-slate-300

                focus:border-[#405189]
                focus:ring-4
                focus:ring-[#405189]/10
              "
            />
          </div>
        }

        {/* Add */}
        {href && (
          <Link
            href={href}
            className="
              flex items-center justify-center gap-2
              px-4.5 py-2.5
              rounded-xl
              bg-[#405189]
              text-white
              text-sm font-medium
              shadow-sm
              shadow-[#405189]/15
              transition-all duration-200

              hover:bg-[#354577]
              hover:shadow-md
              hover:shadow-[#405189]/20

              active:scale-[0.98]
            "
          >
            <FiPlus size={18} />
            <span>{t("add")}</span>
          </Link>
        )}

        {/* Modal Add */}
        {setOpen && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="
              rounded-xl
              bg-[#405189]
              px-5 py-2.5
              text-sm font-medium
              text-white
              shadow-sm
              shadow-[#405189]/15

              flex items-center justify-center gap-2

              transition-all duration-200

              hover:bg-[#354577]
              hover:shadow-md
              hover:shadow-[#405189]/20

              active:scale-[0.98]
            "
          >
            <span>افزودن</span>
            <FaPlus size={12} />
          </button>
        )}

        {/* Back */}
        {back_href && (
          <Link
            href={back_href}
            className="
              flex items-center justify-center gap-2
              px-4 py-2.5
              rounded-xl
              bg-white
              border border-slate-200
              text-slate-600
              text-sm font-medium

              transition-all duration-200

              hover:border-[#405189]/30
              hover:bg-[#405189]/5
              hover:text-[#405189]

              active:scale-[0.98]
            "
          >
            <span>بازگشت</span>
            <FaArrowLeft size={12} />
          </Link>
        )}
      </div>
    </div>
  );
}