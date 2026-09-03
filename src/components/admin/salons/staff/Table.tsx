"use client";
import { useState } from "react";
import PageHeader from "@/src/components/admin/ui/PageHeader";
import Pagination from "@/src/components/admin/ui/Pagination";
import { useApi } from "@/src/service/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
 
import { useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
 
import Loading from "../../ui/Loading";
import ErrorLoading from "../../ui/ErrorLoadin";
 
 
import DataTable, { TableColumn } from "react-data-table-component";
import Option from "./Option";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import page from "@/app/[locale]/(admin)/admin/salons/fixed-times/[id]/page";
 

interface Head {
  id: number;
  name: string;
}

interface Data {
  id: number;
  name: string;
  image : string
  job: string;
  status: string;
  salon : string,
  social_media : {
    instagram : string,
    whatsapp : string,
    tiktok : string
  }
}

export default function Table({salon_id} : {salon_id : string}) {
  
  const t = useTranslations("admin-main-salon-pending");
  const searchParams = useSearchParams();
  
  const api = useApi();
  const { data: session, status } = useSession();
  const locale = useLocale();

   // FilterParams
   const search =  searchParams.get('search') ?? "";
   const page =  searchParams.get('page') ?? "";


  const { data, isLoading, error } = useQuery({
    queryKey: ["staffs", page, search, locale , salon_id],
    queryFn: async () => {
      const response = await api.get(
        `/admin/salon-staff`,
        {
          params : {
            search : search,
            id : salon_id,
            page : page
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
      name: "JobTitle",
      selector: (row) => row.job,
      sortable: true,
    },
    

    {
      name: "Image",
      cell: (row) => (
        <div className="flex items-center justify-center gap-2">
        {row?.social_media.instagram && (
          <a
            href={row?.social_media.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10 text-pink-500 transition hover:bg-pink-500/20"
            title="Instagram"
          >
            <BsInstagram size={16} />
          </a>
        )}
      
        {row.social_media.whatsapp && (
          <a
            href={row.social_media.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-500 transition hover:bg-green-500/20"
            title="WhatsApp"
          >
            <FaWhatsapp size={16} />
          </a>
        )}
      
        {row.social_media.tiktok && (
          <a
            href={row.social_media.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-500/10 text-gray-600 transition hover:bg-gray-500/20 dark:text-gray-300"
            title="TikTok"
          >
            <FaTiktok size={16} />
          </a>
        )}
      </div>
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
        <Option id={row.id} salon_id={salon_id}/>
      ),
    },
  ]
 

  return (
    <section>
        
      
      <PageHeader
        title={"مدیریت کارکنان"}
        meta={"مدیریت کارکنان"}
        href={`/admin/salons/staff/${salon_id}/create`}
        back_href={`/admin/salons/detail/${salon_id}`}
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
