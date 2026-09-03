"use client";
import { useState } from "react";
import PageHeader from "@/src/components/admin/ui/PageHeader";
import Pagination from "@/src/components/admin/ui/Pagination";
import { useApi } from "@/src/service/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Option from "./Option";
import { useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import Loading from "../ui/Loading";
import ErrorLoading from "../ui/ErrorLoadin";
import DataTable, { TableColumn } from "react-data-table-component";
import { useSearchParams } from "next/navigation";



interface Data {
  id: number;
  name: string;
  href : string
  order: number;
  status:string;
}



export default function Table() {
  const t = useTranslations('admin-main-menus');
  const searchParams = useSearchParams();
   
  const api = useApi();
  const { data: session, status } = useSession();
  const locale = useLocale();


    // FilterParams
  const search =  searchParams.get('search') ?? "";
  const page =  searchParams.get('page') ?? "";

  
  const { data, isLoading, error } = useQuery({
    queryKey: ["menus", page, search , locale],
    queryFn: async () => {
      const response = await api.get(
        `/admin/menus`,
        {
          params : {
            locale : locale,
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
      selector: (row) => row.id,
      sortable: true,
      width: "80px",
    },
    {
      name: "name",
      selector: (row) => row.name,
      sortable: true,
    },
    
    {
      name: "url",
      selector: (row) => row.href,
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
        href="/admin/menus/create"
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
      {data && <Pagination meta={data?.meta}  />}
    </section>
  );
}
