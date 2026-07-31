"use client";
import { useState } from "react";
import PageHeader from "@/src/components/admin/ui/PageHeader";
import Pagination from "@/src/components/admin/ui/Pagination";
import TableHead from "../ui/TableHead";
import { useApi } from "@/src/service/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Option from "./Option";
import { useSession } from "next-auth/react";

interface Head {
  id: number;
  name: string;
}

interface Data {
  id: number;
  name: string;
  slug: string;
  status: number | boolean;
}

const heads: Head[] = [
  { id: Math.floor(Math.random() * 900) + 100, name: "#" },
  { id: Math.floor(Math.random() * 900) + 100, name: "نام" },
  { id: Math.floor(Math.random() * 900) + 100, name: "اسلاگ" },
  { id: Math.floor(Math.random() * 900) + 100, name: "وضعیت" },
  { id: Math.floor(Math.random() * 900) + 100, name: "عملیات" },
];

export default function Table() {
  const [search, setSearch] = useState<string | null>("");
  const [page, setPage] = useState<number | null>(1);
  const api = useApi();
  const { data: session, status } = useSession();

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["categories", page, search],
  //   queryFn: async () => {
  //     const response = await api.get(
  //       `/panel/category?page=${page}&&search=${search}`,
  //     );
  //     return response.data;
  //   },
  //   placeholderData: keepPreviousData,
  //   enabled: status === "authenticated",
  // });

  // if (isLoading) return <p>در حال بارگذاری...</p>;
  // if (error) return <p>خطا در دریافت اطلاعات</p>;

  return (
    <section>
      <PageHeader
        title={"دسته بندی ها"}
        meta={"اضافه و حذف و ویرایش دسته بندی ها"}
        setSearch={setSearch}
        href="/admin/category/create"
      />
      <div className="overflow-x-auto rounded-2xl border border-slate-100">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              {heads.map((item) => (
                <TableHead key={item.id} item={item} />
              ))}
            </tr>
          </thead>

          <tbody>
            {[].map((category: Data, index: number) => (
              <tr
                key={category.id}
                className="border-b border-slate-100 hover:bg-slate-50 transition-all"
              >
                <td className="py-4 px-5 text-slate-600">{index + 1}</td>
                <td className="py-4 px-5 text-slate-600">دیتا</td>

                <td className="py-4 px-5 text-slate-600">دیتا</td>

                <td className="py-4 px-5">
                  {category.status === 1 ? (
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                      فعال
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-green-100 text-red-700 text-xs font-medium">
                      غیر فعال
                    </span>
                  )}
                </td>

                <td className="py-4 px-5">
                  <Option id={category.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {data && <Pagination meta={data?.meta} page={page} setPage={setPage} />} */}
    </section>
  );
}
