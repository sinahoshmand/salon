"use client";
import simpleSearchParams from "@/src/helper/simpleSearchParams";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface Link {
  url: string;
  link: string;
  label: string;
  active: boolean;
  page: number | null;
}

interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
  links: Link[];
}

export default function Pagination({ meta }: { meta: Meta }) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";

  return (
    <div className="mt-10 flex items-center justify-center gap-2" dir="rtl">
      {/* Previous */}
      <button
        disabled={meta.current_page === 1}
        onClick={() => {
          const page = meta.current_page - 1;
          page === 1
            ? simpleSearchParams("page")
            : simpleSearchParams("page", String(page));
        }}
        type="button"
        className={`
             flex h-10 min-w-10 items-center justify-center rounded-lg
            border border-[#F0E8E1]
             ${meta.current_page === 1 ? " bg-slate-300 text-slate-500 cursor-not-allowed" : "hover:bg-slate-50"}
            px-3
            text-sm text-[#6B6B6B]
            transition-all duration-200
            hover:border-[#C97B8B]
            hover:bg-[#C97B8B]/10
            hover:text-[#C97B8B]
            `}
      >
        <ChevronRight size={20} />
      </button>

      {/* Pages */}
      <div className="flex items-center gap-1.5">
        {/* Active */}
        {meta.links?.map((link, index) => (
          <div key={index}>
            {link.label !== "&laquo; Previous" &&
              link.label !== "Next &raquo;" && (
                <>
                  {link.label === "..." ? (
                    <span className="px-1 text-[#C9A46B]">...</span>
                  ) : (
                    <button
                      onClick={() => {
                        if (link.page === 1) {
                          simpleSearchParams("page");
                        } else {
                          simpleSearchParams("page", link.label);
                        }
                      }}
                      key={index}
                      type="button"
                      className={`flex h-10 w-10   transition-all duration-200
            hover:border-[#C97B8B]
            hover:bg-[#C97B8B]/10
            hover:text-[#C97B8B] items-center justify-center rounded-lg
          ${page === link.label ? "bg-[#C97B8B] text-white" : "bg-[#FFFFFF] text-[#6B6B6B]"}
                    text-sm font-medium 
                    shadow-[0_4px_15px_rgba(201,123,139,0.25)]`}
                    >
                      {link.label}
                    </button>
                  )}
                </>
              )}
          </div>
        ))}
      </div>

      {/* Next */}
      <button
        disabled={meta.last_page === Number(page)}
        onClick={() => {
          const page = meta.current_page + 1;
          page === 1
            ? simpleSearchParams("page")
            : simpleSearchParams("page", String(page));
        }}
        type="button"
        className={`
           ${meta.last_page === Number(page) ? " bg-slate-300 text-slate-500 cursor-not-allowed" : "hover:bg-slate-50"}
            flex h-10 min-w-10 items-center justify-center rounded-lg
            border border-[#F0E8E1]
            bg-[#FFFFFF]
            px-3
            text-sm text-[#6B6B6B]
            transition-all duration-200
            hover:border-[#C97B8B]
            hover:bg-[#C97B8B]/10
            hover:text-[#C97B8B]
            `}
      >
        <ChevronLeft size={20} />
      </button>
    </div>
  );
}
