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
import { image } from "@/src/helper/image";
import Loading from "../ui/Loading";
import ErrorLoading from "../ui/ErrorLoadin";
import DataTable, { TableColumn } from "react-data-table-component";



interface Data {
  id: number;
  name: string;
  icon:string,
  image:string,
  slug: string;
  status:string;
}



export default function Table() {
  const t = useTranslations('admin-main-services');
  const [search, setSearch] = useState<string | null>("");
  const [page, setPage] = useState<number | null>(1);
  const api = useApi();
  const { data: session, status } = useSession();
  const locale = useLocale();

  const { data, isLoading, error } = useQuery({
    queryKey: ["categories", page, search , locale],
    queryFn: async () => {
      const response = await api.get(
        `/admin/services?page=${page}&search=${search}&lang=${locale}`,
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
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    
    {
      name: "Slug",
      selector: (row) => row.slug,
      sortable: true,
    },
    {
      name: "Icon",
      cell: (row) => (
        <Image unoptimized alt={row.name} src={image(row.icon)} width={60} height={60} 
           className="h-[30px] w-[30px] rounded-[15px]"/>
      ),
     
    },
    {
      name: "Image",
      cell: (row) => (
        <Image unoptimized alt={row.name} src={image(row.image)} width={60} height={60} 
           className="h-[40px] w-[40px] rounded-[15px]"/>
      ),
   
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
        setSearch={setSearch}
        href="/admin/services/create"
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
      {data && <Pagination meta={data?.meta} page={page} setPage={setPage} />}
    </section>
  );
}
