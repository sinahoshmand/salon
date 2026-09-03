"use client";
import { useState } from "react";
import PageHeader from "@/src/components/admin/ui/PageHeader";
import Pagination from "@/src/components/admin/ui/Pagination";
import TableHead from "../../ui/TableHead";
import { useApi } from "@/src/service/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Option from "./Option";
import { useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import Loading from "../../ui/Loading";
import ErrorLoading from "../../ui/ErrorLoadin";
import Image from "next/image";
import { formatDollar } from "@/src/helper/price";
import DataTable, { TableColumn } from "react-data-table-component";
import { duration } from "@/src/helper/duration";
import { useSearchParams } from "next/navigation";

interface Head {
  id: number;
  name: string;
}

interface Data {
  id:number;
  category : string,
  image : string,
  name: string;
  price: number;
  duration: number;
  status: string;
}

export default function Table({ id }: { id: string }) {
  const t = useTranslations("admin-main-menus");
  const searchParams = useSearchParams();
 
  const api = useApi();
  const { data: session, status } = useSession();
  const locale = useLocale();

    // FilterParams
    const search =  searchParams.get('search') ?? "";
    const page =  searchParams.get('page') ?? "";

  const { data, isLoading, error } = useQuery({
    queryKey: ["services", page, search, locale, id],
    queryFn: async () => {
      const response = await api.get(
        `/admin/salon-services`,
        {
          params : {
            lang : locale,
            search : search,
            page : page,
            id : id
          }
        }
      );
      return response.data;
    },
    placeholderData: keepPreviousData,
    enabled: status === "authenticated",
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorLoading />;

  const columns: TableColumn<Data>[] = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "80px",
    },
       
    {
      name: "Image",
      cell: (row) => (
        <Image unoptimized alt={row.name} src={row.image} width={60} height={60} 
           className="h-[40px] w-[40px] rounded-[15px]"/>
      ),
   
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "R-price",
      selector: (row) => formatDollar(row.price),
      sortable: true,
    },
    {
      name: "Duration",
      selector: (row) => duration(row.duration),
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <span
          className={
            row.status === "active"
              ? "text-green-600"
              : "text-red-600"
          }
        >
          {row.status === "active" ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <Option id={row.id} salon_id={id}/>
      ),
    },
  ]

  return (
    <section>
      <PageHeader
        title={"مدیریت سرویس سالن"}
        href={`/admin/salons/services/${id}/create`}
        back_href={`/admin/salons/detail/${id}`}
      />
      <div className="overflow-x-auto rounded-2xl border border-slate-100">
      <DataTable
        className="admin-data-table"
        columns={columns}
        data={data?.data}
        highlightOnHover
        pointerOnHover
        responsive
      />
      </div>
      {data && <Pagination meta={data?.meta}   />}
    </section>
  );
}
