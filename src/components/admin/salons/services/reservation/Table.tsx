"use client";
import { useState } from "react";
import PageHeader from "@/src/components/admin/ui/PageHeader";
import Pagination from "@/src/components/admin/ui/Pagination";
import { useApi } from "@/src/service/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Option from "./Option";
import { useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";

import Loading from "../../../ui/Loading";
import ErrorLoading from "../../../ui/ErrorLoadin";
import TableHead from "../../../ui/TableHead";
import date from "@/src/helper/date";
import Jalali from "@/src/helper/jalali";
import WorkingHoursModal from "./TimePicker";
import DataTable, { TableColumn } from "react-data-table-component";
import { useSearchParams } from "next/navigation";

type Time = {
  id: string;
  time: string;
  status: string;
};

interface Head {
  id: number;
  name: string;
}

interface Data {
  id: number;
  time: string;
  date: string;
  status: string;
  salon: string;
  times: Time[];
}

export default function Table({
  service_id,
  salon_id,
}: {
  service_id: string;
  salon_id: string;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [time_id, setTimeId] = useState<number | null>(null);
  const t = useTranslations("admin-main-salon-pending");
  const searchParams = useSearchParams(); 
 
  const api = useApi();
  const { data: session, status } = useSession();
  const locale = useLocale();


    // FilterParams
    const search =  searchParams.get('search') ?? "";
    const page = searchParams.get("page");


  const { data, isLoading, error } = useQuery({
    queryKey: ["times", page, search, locale, service_id],
    queryFn: async () => {
      const response = await api.get(
        `/admin/reservation/dates/${service_id}`,
        {
          params : {
            search : search,
            lang : locale,
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
      name: "times",
      cell: (row) => (
        <div className="flex flex-wrap gap-2 py-2">
          {row?.times?.map((item) => (
            <span
              key={item.id}
              className={`
        inline-flex items-center gap-1.5
        min-w-[68px]
        justify-center
        rounded-lg
        px-3 py-2
        text-[13px] font-medium
        border
        transition-colors
        ${
          item.status === "active"
            ? "border-green-100 bg-green-50 text-green-600"
            : "border-red-100 bg-red-50 text-red-500"
        }
      `}
            >
              <span
                className={`
          h-1.5 w-1.5 rounded-full
          ${item.status === "active" ? "bg-green-500" : "bg-red-500"}
        `}
              />

              {item.time}
            </span>
          ))}
        </div>
      ),
      
    },

    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    
    },

    {
      name: "Status",
      cell: (row) => (
        <span
          className={
            row.status === "active" ? "text-green-600" : "text-red-600"
          }
        >
          {row.status === "active" ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <Option id={row.id} setOpen={setOpenEdit} setTimeId={setTimeId} />
      ),
    },
  ];

  return (
    <section>
      <WorkingHoursModal
        setOpen={setOpen}
        open={open}
        service_id={service_id}
        salon_id={salon_id}
      />
      {/* <WorkingHoursModalEdit times={data?.data} time_id={time_id} setOpen={setOpenEdit} open={openEdit}/> */}
      <PageHeader
        title={"لیست تاریخ های رزرو"}
        meta={"لیست تاریخ های رزرو"}
        back_href={`/admin/salons/services/${salon_id}`}
        setOpen={setOpen}
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
