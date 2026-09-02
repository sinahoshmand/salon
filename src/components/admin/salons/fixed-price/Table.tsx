"use client";
import { useState } from "react";
import PageHeader from "@/src/components/admin/ui/PageHeader";
import Pagination from "@/src/components/admin/ui/Pagination";
import { useApi } from "@/src/service/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Option from "./Option";
import { useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
 
import Loading from "../../ui/Loading";
import ErrorLoading from "../../ui/ErrorLoadin";
import TableHead from "../../ui/TableHead";
import WorkingHoursModal from "./TimePicker";
import WorkingHoursModalEdit from "./TimePickerEdit";
import DataTable, { TableColumn } from "react-data-table-component";
 

interface Head {
  id: number;
  name: string;
}

interface Data {
  id: number;
  time: string;
  status: string;
  salon : string
}

export default function Table({salon_id} : {salon_id : string}) {
  const [open , setOpen] = useState<boolean>(false)
  const [openEdit , setOpenEdit] = useState<boolean>(false)
  const [time_id , setTimeId] = useState<number|null>(null)
  const t = useTranslations("admin-main-salon-pending");
  const [search, setSearch] = useState<string | null>("");
  const [page, setPage] = useState<number | null>(1);
  const api = useApi();
  const { data: session, status } = useSession();
  const locale = useLocale();

  const { data, isLoading, error } = useQuery({
    queryKey: ["times", page, search, locale , salon_id],
    queryFn: async () => {
      const response = await api.get(
        `/admin/salon-fixed-times?id=${salon_id}&page=${page}&search=${search}&lang=${locale}`,
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
      name: "Time",
      selector: (row) => row.time,
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
        <Option id={row.id}  setOpen={setOpenEdit} setTimeId={setTimeId}/>
      ),
    },
  ]
 

  return (
    <section>
        
      <WorkingHoursModal setOpen={setOpen} open={open} salon_id={salon_id}/>
      <WorkingHoursModalEdit times={data?.data} time_id={time_id} setOpen={setOpenEdit} open={openEdit}/>
      <PageHeader
        title={"تعریف ساعات رزرو"}
        meta={"تعریف ساعات رزرو"}
        back_href={`/admin/salons/detail/${salon_id}`}
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
      {data && <Pagination meta={data?.meta} page={page} setPage={setPage} />}
    </section>
  );
}
