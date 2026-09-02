"use client";

import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

type Props = {
  title: string;
  activePage: string;
  prevPage?: string | null;
  href?: string;
  theme?: boolean;
};

export default function BreadCrumb({
  title,
  activePage,
  prevPage = null,
  href = "#",
  theme = false,
}: Props) {
  const t = useTranslations("adminPannel");

  return (
    <div
      className={`w-full px-5 py-4 border-b-2 ${
        theme
          ? "bg-[#243041] border-b-[#0F1623]"
          : "bg-[#FFFFFF] border-b-[#F3F3F9]"
      }`}
    >
      <div className="flex items-center justify-between">
        <h1
          className={`text-[18px] font-bold ${
            theme ? "text-[#F8FAFC]" : "text-slate-800"
          }`}
        >
          {title}
        </h1>

        <div
          className={`flex items-center gap-2 mt-1 text-sm ${
            theme ? "text-[#94A3B8]" : ""
          }`}
        >
          <Link
            href="/admin/dashboard"
            className={theme ? "text-[#94A3B8]" : "text-slate-400"}
          >
            {t("admin")}
          </Link>

          <span className={theme ? "text-[#475569]" : "text-slate-300"}>
            /
          </span>

          {prevPage && (
            <>
              <Link
                href={href}
                className={`font-medium ${
                  theme ? "text-[#94A3B8]" : "text-slate-400"
                }`}
              >
                {prevPage}
              </Link>

              <span className={theme ? "text-[#475569]" : "text-slate-300"}>
                /
              </span>
            </>
          )}

          <span className="text-[#7C3AED] font-medium">{activePage}</span>
        </div>
      </div>
    </div>
  );
}