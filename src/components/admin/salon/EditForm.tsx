"use client";

import { useApi } from "@/src/service/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { ReactEventHandler, useEffect, useState } from "react";
import Alert from "@/src/components/admin/ui/Alert";
import Link from "next/link";
import { AxiosError } from "axios";
 
import { useSession } from "next-auth/react";

type Data = {
  name: string;
  status: number | boolean;
  slug_input: string;
};

interface Error {
   name : string,
   slug_input : string,
   status : boolean
}

type Props = {
  id : number,
}

interface ErrRes {
  response : {
    status : number,
     data : {
       errors : Error
     }
  }
}

export default function EditForm({id} : Props) {
  const [name, setName] = useState<string>('');
  const [slug_input, setSlug] = useState<string>("");
  const [status, setStatus] = useState<boolean>(true);
  const [errors, setErrors] = useState<Error|null>(null);
  const { status: s } = useSession();

  const api = useApi();
   
 

  const {data , isLoading , error} = useQuery({
    queryKey : ['category' , id] ,
    queryFn : async () => {
      const res = await api.get(`/panel/category/${id}`);
      return res.data.data;
    },
    enabled: s === "authenticated",
  })

  const updateCategory = useMutation({
     mutationFn : (data: Data) => api.post(`/panel/category/${id}?_method=PUT`,data),
     onSuccess: () => {
      setErrors(null);
      
    },
     onError:(error:ErrRes) => {
      const status = error?.response?.status
      if(status === 500){
        
    }
      setErrors(error.response?.data.errors);
     }
  })


  useEffect(() => {
    if (!data) return;
  
    setName(data.name);
    setSlug(data.slug_input);
    setStatus(data.status);
  }, [data]);

  const update = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateCategory.mutate({ name, slug_input, status });
  }
  

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا در دریافت اطلاعات</p>;
  
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">ایجاد دسته‌بندی</h2>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* نام */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">
              نام دسته‌بندی
            </label>

            <input
              onChange={(e) => {setName(e.target.value)}}
              type="text"
              value={name}
              placeholder="مثلاً برنامه نویسی"
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
          focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
            />
          {errors && errors.name && 
            <Alert mesg={errors?.name}/>
          }
          </div>
         

          {/* اسلاگ */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">اسلاگ</label>

            <input
              value={slug_input}
              onChange={(e) => {setSlug(e.target.value)}}
              type="text"
              placeholder="programming"
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
          focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
            />
             {errors && errors.slug_input && 
            <Alert mesg={errors?.slug_input}/>
          }
          </div>
          

        
         
 
        </div>

        <div className="flex flex-col w-full gap-2">
            <label className="text-sm font-medium text-slate-700">وضعیت</label>

            <select
             onChange={(e) => {setStatus(Boolean(e.target.value))}}
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
          focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
            >
              <option>فعال</option>
              <option>غیرفعال</option>
            </select>
            {errors && errors.status && 
            <Alert mesg={String(errors?.status)}/>
          }
          </div>
      
        <div className="flex justify-end gap-3 border-t border-slate-200 pt-6">
          <Link
            href={'/admin/category'}
            className="rounded-xl border border-slate-300 px-6 py-3 text-slate-600 hover:bg-slate-100 transition"
          >
            انصراف
          </Link>

          <button
            onClick={(e) => {update(e)}}
            type="submit"
            disabled={updateCategory.isPending}
            className="flex items-center justify-center gap-2 bg-[#7C3AED] text-white px-6 py-3 rounded-lg"
          >
            {updateCategory.isPending && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}

            {updateCategory.isPending ? "در حال ثبت..." : "ثبت"}
          </button>
        </div>
      </form>
    </section>
  );
}
