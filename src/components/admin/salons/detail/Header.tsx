"use client";
import Data from "@/src/types/single-salon.type";
import Card from "../../ui/Card";
import Image from "next/image";
import { FaEye, FaMapMarkerAlt } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import "@smastrom/react-rating/style.css";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import { Rating, RoundedStar } from "@smastrom/react-rating";
export default function Header({ data }: { data: Data }) {
  const t = useTranslations("admin-main-salon-pending");

  return (
    <Card >

    {/* ================= HEADER ================= */}
    <div className="relative overflow-hidden overflow-hidden border-0  ">
  
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-l from-violet-50 via-white to-white" />
  
      <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-violet-200/20 blur-3xl" />
      <div className="absolute right-1/3 -top-20 h-40 w-40 rounded-full bg-purple-200/20 blur-3xl" />
  
      <div className="relative flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
  
        {/* Salon */}
        <div className="flex min-w-0 items-center gap-5">
  
          {/* Image */}
          <div className="relative shrink-0">
  
            <div className="h-[92px] w-[92px] overflow-hidden rounded-[24px] ring-4 ring-white shadow-lg">
              <Image
                unoptimized
                src={data.image}
                width={300}
                height={300}
                alt={data.name}
                className="h-full w-full object-cover"
              />
            </div>
  
            {/* Online status */}
            <span
              className={`absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full border-4 border-white ${
                data.status === "active"
                  ? "bg-emerald-500"
                  : "bg-red-500"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>
  
          </div>
  
          {/* Info */}
          <div className="min-w-0">
  
            <div className="flex flex-wrap items-center gap-2">
  
              <h2 className="truncate text-xl font-bold tracking-tight text-slate-900">
                {data.name}
              </h2>
  
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                  data.status === "active"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {data.status === "active" ? "فعال" : "غیرفعال"}
              </span>
  
            </div>
  
            <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
  
              <span className="flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-violet-500" size={12} />
                {data.state}, {data.city}
              </span>
  
              <span className="flex items-center gap-1.5">
                <PiPhoneCall className="text-violet-500" size={14} />
                <span dir="ltr">
                  {data.phone}
                </span>
              </span>
  
            </div>
  
          </div>
  
        </div>
  
  
        {/* Action */}
        <Link
          target="_blank"
          href={`/salon/${data.slug}`}
          className="
            group inline-flex shrink-0 items-center justify-center gap-2
            rounded-xl
            border border-slate-200
            bg-white
            px-4 py-2.5
            text-xs font-semibold text-slate-700
            shadow-sm
            transition-all duration-200
            hover:-translate-y-0.5
            hover:border-violet-200
            hover:bg-violet-50
            hover:text-violet-600
            hover:shadow-md
          "
        >
          <FaEye
            size={14}
            className="transition-transform group-hover:scale-110"
          />
  
          {t("watch")}
        </Link>
  
      </div>
    </div>
  
  
    {/* ================= STATS ================= */}
    <div className="border-t border-slate-100">
  
      <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 rtl:divide-x-reverse md:grid-cols-4 md:divide-y-0">
  
        {/* Rating */}
        <div className="relative p-5">
  
          <div className="flex items-center justify-between">
  
            <span className="text-[11px] font-medium text-slate-400">
              {t("stats.overall-rating")}
            </span>
  
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50">
              <span className="text-sm text-amber-500">
                ★
              </span>
            </div>
  
          </div>
  
          <div className="mt-3 flex items-end gap-2">
  
            <span className="text-2xl font-black tracking-tight text-slate-900">
              {data.rating}
            </span>
  
            <span className="mb-1 text-[10px] text-slate-400">
              / 5
            </span>
  
          </div>
  
          {/* Rating */}
          <div className="mt-3 ">
          <Rating
              style={{ maxWidth: 80 }}
              value={data.rating}
              readOnly
              itemStyles={{
                itemShapes: RoundedStar,
                activeFillColor: "#FACC15",
                activeStrokeColor: "#EAB308",
                inactiveFillColor: "#E5E7EB",
                inactiveStrokeColor: "#D1D5DB",
              }}
            />
          </div>
  
        </div>
  
  
        {/* Bookings */}
        <div className="relative p-5">
  
          <div className="flex items-center justify-between">
  
            <span className="text-[11px] font-medium text-slate-400">
              {t("stats.total-bookings")}
            </span>
  
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
              <span className="text-sm">◷</span>
            </div>
  
          </div>
  
          <div className="mt-3 flex items-end gap-2">
  
            <span className="text-2xl font-black tracking-tight text-slate-900">
              1,248
            </span>
  
            <span className="mb-1 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600">
              +12%
            </span>
  
          </div>
  
          <div className="mt-3 flex items-center gap-2">
  
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[72%] rounded-full bg-blue-500" />
            </div>
  
            <span className="text-[9px] text-slate-400">
              این ماه
            </span>
  
          </div>
  
        </div>
  
  
        {/* Revenue */}
        <div className="relative p-5">
  
          <div className="flex items-center justify-between">
  
            <span className="text-[11px] font-medium text-slate-400">
              {t("stats.monthly-revenue")}
            </span>
  
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-500">
              ↗
            </div>
  
          </div>
  
          <div className="mt-3 flex items-end gap-1">
  
            <span className="truncate text-xl font-black tracking-tight text-slate-900">
              ۴۸,۵۰۰,۰۰۰
            </span>
  
            <span className="mb-1 shrink-0 text-[9px] text-slate-400">
              {t("stats.currency")}
            </span>
  
          </div>
  
          <div className="mt-3 flex items-center gap-1.5">
  
            <span className="text-[10px] font-bold text-emerald-500">
              +18.4%
            </span>
  
            <span className="text-[9px] text-slate-400">
              نسبت به ماه قبل
            </span>
  
          </div>
  
        </div>
  
  
        {/* Services */}
        <div className="relative p-5">
  
          <div className="flex items-center justify-between">
  
            <span className="text-[11px] font-medium text-slate-400">
              {t("stats.active-services")}
            </span>
  
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-500">
              ✦
            </div>
  
          </div>
  
          <div className="mt-3 flex items-end gap-2">
  
            <span className="text-2xl font-black tracking-tight text-slate-900">
              {data.service_count}
            </span>
  
            <span className="mb-1 text-[9px] text-slate-400">
              {t("stats.service")}
            </span>
  
          </div>
  
          <div className="mt-3 flex items-center gap-2">
  
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-violet-500 transition-all duration-500"
                style={{
                  width: `${Math.min(
                    (data.service_count / 50) * 100,
                    100
                  )}%`,
                }}
              />
            </div>
  
            <span className="text-[9px] font-medium text-emerald-500">
              فعال
            </span>
  
          </div>
  
        </div>
  
      </div>
  
    </div>
  
  </Card>
  );
}
