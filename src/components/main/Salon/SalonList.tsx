"use client";

import Data from "@/src/types/single-salon.type";
import Item from "./Item";
import LatestFilter from "./LatestFilter";
import { useQuery } from "@tanstack/react-query";
import SalonLoading from "../ui/SalonLoading";
import axios from "axios";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import Pagination from "../ui/Pagination";

export default function SalonList({ data }: { data: Data[] }) {
  const locale = useLocale();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const location = searchParams.get("location") ?? "";
  const page = searchParams.get("page") ?? "";
  const services =  searchParams.get("services")?.split(",").filter(Boolean) ?? [];
  const range =  searchParams.get("range")?.split(",").filter(Boolean) ?? [];
  const sort = searchParams.get("sort");
  const popular = searchParams.get("popular");

  const {
    data: salons,
    isPending,
    isLoading,
  } = useQuery({
    queryKey: ["salons", locale, search , location , services , sort , popular ,page , range],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/main/salon-archive`, {
          params : {
            lang : locale,
            search : search,
            location : location,
            page : page,
            sort : sort,
            popular : popular,
            services:
            services.length > 0
              ? services.join(",")
              : undefined,
            range :   range.length > 0
            ? range.join(",")
            : undefined,  
            
          }
        }
      );
      return res?.data;
    },
    initialData:
    !search && !location && services.length === 0 && range.length === 0 && !popular && !sort && !page
      ? data
      : undefined,
    staleTime: 60 * 1000,
  });

  if (isLoading) return <SalonLoading />;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <p className="text-[14px] text-[var(--secondary-text)]">
          Showing {salons.length} of 14 salons
        </p>
         <LatestFilter />
      </div>
      {salons?.data?.length === 0 ? (
          <div className="mt-6 flex flex-col items-center justify-center rounded-[12px] border border-[var(--border)] bg-[var(--surface)] px-6 py-14 text-center shadow-sm">
    
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--rose-gold)]/15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[var(--primary)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.7}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m2.1-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </div>
      
          <h3 className="text-[18px] font-semibold text-[var(--text)]">
            No Salons Found
          </h3>
      
          <p className="mt-2 max-w-[400px] text-[14px] leading-6 text-[var(--secondary-text)]">
            We couldn&apos;t find any salons matching your search.
            Try adjusting your search or filters.
          </p>
        </div>
      ) : (
        <>
          {salons?.data?.map((item: Data) => (
            <Item key={item.id} item={item} />
          ))}
          {salons?.meta.last_page !== 1 && 
            <Pagination meta={salons?.meta}/>
          }
        </>
      )}
    </div>
  );
}
