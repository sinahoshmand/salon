"use client";

import { useApi } from "@/src/service/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Alert from "@/src/components/admin/ui/Alert";
import { useSession } from "next-auth/react";
import { Link } from "@/src/i18n/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "@/src/helper/toast";
import Loading from "../../ui/Loading";
import ErrorLoading from "../../ui/ErrorLoadin";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { CurrencyInput } from "react-currency-input-field";
import Select from "react-select";
 

type Data = {
  name: string;
  category_id: string | null;
  duration: number | null;
  price_usd: number | null;
  status: number;
  image: File | null;
};

type Category = {
  label : string,
  value : string
}

type CatData = {
  name : string,
  id : string
}

interface Error {
  name: string;
  category_id: string;
  duration: string;
  price_usd: string;
  status: string;
  image: string;
}

interface ErrRes {
  response: {
    status: number;
    data: {
      errors: Error;
    };
  };
}

type Props = {
  id : string,
  salon_id:string
}

export default function EditForm({ id , salon_id }: Props) {
  const [errors, setErrors] = useState<Error | null>(null);
  const { status: s } = useSession();
  const api = useApi();
  const t = useTranslations('admin-main-menus');
  const { register, handleSubmit , setValue , control, reset } = useForm<Data>({
    defaultValues: {
      name: "",
      category_id: null,
      duration: null,
      image: null,
      price_usd: null,
      status: 1,
    },
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["service", id],
    queryFn: async () => {
      const res = await api.get(`/admin/salon-services/${id}`);
      return res.data.data;
    },
    enabled: s === "authenticated",
  });

  const { data : categoryData , isPending : categoryPending } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await api.get(
        `/admin/categories`,
      );
      return response.data.data;
    },
    enabled: s === "authenticated",
  });

  const categories: Category[] =
  categoryData?.map((cat: CatData) => ({
    label: cat.name,
    value: String(cat.id),
  })) ?? [];

  const update = useMutation({
    mutationFn: (data: Data) =>
      api.post(`/admin/salon-services/${id}?_method=PUT`, data , {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: (success) => {
      if (success.status === 200) {
         toast.fire({
            title : "Data Upadated Successfuly",
            icon : "success"
         })
         setValue("image", null);
       
      }
      setErrors(null);
    },
    onError: (error: ErrRes) => {
      const status = error?.response?.status;
     
      if (status === 500) {
      }
      setErrors(error.response?.data.errors);
    },
  });
  useEffect(() => {
    if (!data) return;
    reset({
      name: data.name,
      category_id: data.category_id,
      duration: data.duration,
      image: null,
      price_usd: data.price,
      status: data?.status === "active" ? 1 : 0,
    });
  }, [data, reset]);

  const onSubmit = (data: Data) => {
    const formData: any = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        return;
      }
      if (value instanceof FileList) {
        if (value[0]) {
          formData.append(key, value[0]);
        }
      } else {
        formData.append(key, String(value));
      }
    });


    update.mutate(formData);
  };

  if (isLoading) return <Loading/>;
  if (error) return <ErrorLoading/>;
  if(!data) return notFound()

  return (
    <section>
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-slate-800"> {t("create")}</h2>
    </div>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* نام */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">
            نام سرویس
          </label>

          <input
            {...register("name")}
            type="text"
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
        focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
          />
          {errors && errors.name && <Alert mesg={errors?.name} />}
        </div>

        <div className="flex flex-col gap-2  ">
          <label className="text-sm font-medium text-slate-700">دسته</label>

      <Controller
        name="category_id"
        control={control}
        render={({ field }) => (
          <Select
             className="react-select-container"
            classNamePrefix="react-select"
            {...field}
            value={
              categories.find((cat) => Number(cat.value) === Number(field.value)) ??
              null
            }
            onChange={(country) => {
              field.onChange(country?.value ?? null);
            }}
            isDisabled={categoryPending}
            isLoading={categoryPending}
            isClearable
         
            isSearchable
            options={categories}
          />
        )}
      />

          {errors && errors.category_id && (
            <Alert mesg={errors?.category_id} />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">
            مدت زمان
          </label>

          <input
            {...register("duration")}
            type="number"
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
        focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
          />
          {errors && errors.duration && <Alert mesg={errors?.duration} />}
        </div>

        <div className="flex flex-col gap-2  ">
          <label className="text-sm font-medium text-slate-700">قیمت</label>

          <Controller
            name="price_usd"
            control={control}
            render={({ field }) => (
              <CurrencyInput
              value={field.value ?? ""}
              onValueChange={(value) => {
                field.onChange(value ? Number(value) : null);
              }}
              decimalsLimit={2}
              groupSeparator=","
              decimalSeparator="."
              prefix="$ "
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
                focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
            />
            )}
          />

          {errors && errors.price_usd && <Alert mesg={errors?.price_usd} />}
        </div>
      </div>

      <div className="flex flex-col w-full gap-2 mt-8">
        <label className="text-sm font-medium text-slate-700">وضعیت</label>

        <select
          {...register("status")}
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
        focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
        >
          <option value={1}>فعال</option>
          <option value={0}>غیرفعال</option>
        </select>
        {errors && errors.status && <Alert mesg={String(errors?.status)} />}
      </div>

      <div className="grid grid-cols-2 gap-3 mt-8">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">عکس</label>

          <input
            {...register("image")}
            type="file"
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
        focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
          />
          {errors && errors.image && <Alert mesg={errors?.image} />}
        </div>
      </div>

      <div className="flex justify-end gap-3 border-t border-slate-200 pt-6">
        <Link
          href={`/admin/salons/services/${salon_id}`}
          className="rounded-xl border border-slate-300 px-6 py-3 text-slate-600 hover:bg-slate-100 transition"
        >
          انصراف
        </Link>

        <button
          type="submit"
          disabled={update.isPending}
          className="flex items-center justify-center gap-2 bg-[#7C3AED] text-white px-6 py-3 rounded-lg"
        >
          {update.isPending && (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}

          {update.isPending ? "در حال ثبت..." : "ثبت"}
        </button>
      </div>
    </form>
  </section>
  );
}
