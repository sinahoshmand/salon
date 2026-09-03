"use client";
import { useState } from "react";
import PageHeader from "@/src/components/admin/ui/PageHeader";
import Pagination from "@/src/components/admin/ui/Pagination";
 
import { useApi } from "@/src/service/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Option from "./Option";
import { useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Loading from "../ui/Loading";
import ErrorLoading from "../ui/ErrorLoadin";
import TableHead from "../ui/TableHead";
import DataTable, { TableColumn } from "react-data-table-component";
import { useSearchParams } from "next/navigation";
 
 

interface Head {
  id: number;
  name: string;
}

interface Data {
  id: number;
  name: string;
  image:string,
  owner: string;
  phone : string,
  date : string,
  status:string;
  state :string,
  city:string
}



export default function Table() {
  const t = useTranslations('admin-main-salon-pending');
  const searchParams = useSearchParams();
   
  const api = useApi();
  const { data: session, status } = useSession();
  const locale = useLocale();

   // FilterParams
   const search =  searchParams.get('search') ?? "";
   const page = searchParams.get("page");

  const { data, isLoading, error } = useQuery({
    queryKey: ["salons", page, search , locale],
    queryFn: async () => {
      const response = await api.get(
        `/admin/salons`, {
          params : {
            lang : locale,
            page : page,
            search : search
          }
        }
      );
      return response.data;
    },
    placeholderData: keepPreviousData,
    enabled: status === "authenticated",
  });

  if (isLoading) return <Loading/>;
  if (error) return <ErrorLoading/>;

  const columns: TableColumn<Data>[] = [
    {
      name: "ID",
      selector:   (row, index) => (index ?? 0) + 1,
      sortable: true,
      width: "80px",
    },
    {
      name: "Image",
      cell: (row) => (
        <Image unoptimized alt={row.name} src={row.image} width={60} height={60} 
           className="h-[50px] w-[50px] rounded-[15px]"/>
      ),
      width: "80px",
    },
    {
      name: "Salon",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => row.date,
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
        <Option id={row.id}/>
      ),
    },
  ];

  return (
    <section>
      <PageHeader
        title={t('title')}
        meta={t('meta')}
        href="/admin/salons/create"
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
