"use client";

import { useApi } from "@/src/service/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Alert from "@/src/components/admin/ui/Alert";
import { useSession } from "next-auth/react";
import { Link } from "@/src/i18n/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "@/src/helper/toast";
import Loading from "../ui/Loading";
import ErrorLoading from "../ui/ErrorLoadin";
import dynamic from "next/dynamic";
import Select from "react-select";
import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import SelectCountryEdit from "./SelectCountryEdit";
const Editor = dynamic(() => import("../ui/Editor"), {
  ssr: false,
});

type Data = {
  name: string;
  video : File | null;
  description: string;
  address: string;
  small_desc: string;
  phone: string;
  status: number;
  salon_owner_id : number,
  image: File | null;
  city_id: string | null;
  country_id: string | null;
  state_id: string | null;
};


interface Error {
  name: string;
  video : string,
  description: string;
  small_desc: string;
  phone: string;
  status: string;
  country_id : string
  salon_owner_id : string,
  image: string;
  address: string;
  state_id : string,
  city_id : string
}

type Props = {
  id: number;
};

interface ErrRes {
  response: {
    status: number;
    data: {
      errors: Error;
    };
  };
}

export default function EditForm({ id }: Props) {
  const users = [{ label: "sina", value: 1 } , { label: "Ali", value: 2 }];
  const [errors, setErrors] = useState<Error | null>(null);
  const { status: s } = useSession();
  const api = useApi();
  const t = useTranslations("admin-main-salon-pending");
  const locale = useLocale();

  const { register, handleSubmit , watch , setValue, reset , control } = useForm<Data>({
    defaultValues: {
      name: "",
      address: "",
      image: null,
      video : null,
      description: "",
      small_desc: "",
      status: 1,
      state_id : null,
      city_id : null
    },
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["salon", id],
    queryFn: async () => {
      const res = await api.get(`/admin/salons/${id}`);
      return res.data.data;
    },
    enabled: s === "authenticated",
  });

  const update = useMutation({
    mutationFn: (data: Data) =>
      api.post(`/admin/salons/${id}?_method=PUT`, data , {
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
         setValue("video", null);
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
      name: data?.name,
      phone : data?.phone,
      address: data?.address,
      description: data?.description,
      small_desc: data?.small_desc,
      status: data?.status === "active" ? 1 : 0,
      country_id: String(data?.country_id),
      state_id: String(data?.state_id),
      city_id: String(data?.city_id),
    });
  }, [data, reset]);

  const updateData = (data: Data) => {
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
  if (!data) return notFound();
  return (
    <section>
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-slate-800">{t("edit")}</h2>
    </div>

    <form onSubmit={handleSubmit(updateData)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">
            نام سالن
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
          <label className="text-sm font-medium text-slate-700">
            شماره تلفن
          </label>

          <input
            type="text"
            {...register("phone")}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
        focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
          />
          {errors && errors.phone && <Alert mesg={errors?.phone} />}
        </div>

        <div className="flex flex-col gap-2  ">
          <label className="text-sm font-medium text-slate-700">
            صاحب سالن
          </label>
          <Controller
            name="salon_owner_id"
            control={control}
            render={({ field }) => (
            <Select
            styles={{
              control: (base, state) => ({
                ...base,
                backgroundColor: "#ffff",
                borderColor: state.isFocused ? "#8B5CF6" : "#0F1623",
                boxShadow: state.isFocused
                  ? "0 0 0 1px #8B5CF6"
                  : "none",
                borderRadius: "7px",
                minHeight: "44px",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "#8B5CF6",
                },
              }),
          
              menu: (base) => ({
                ...base,
                backgroundColor: "#0F1623",
                border: "1px solid #243041",
                borderRadius: "7px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }),
          
              menuList: (base) => ({
                ...base,
                padding: "6px",
              }),
          
              option: (base, state) => ({
                ...base,
                padding: "10px 12px",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: state.isSelected
                  ? "#7C3AED"
                  : state.isFocused
                  ? "#243041"
                  : "transparent",
                color: "#F8FAFC",
                transition: "all 0.15s ease",
              }),
          
              singleValue: (base) => ({
                ...base,
                color: "#11111",
              }),
          
              placeholder: (base) => ({
                ...base,
                color: "#11111",
              }),
          
              input: (base) => ({
                ...base,
                color: "#11111",
              }),
          
              dropdownIndicator: (base, state) => ({
                ...base,
                color: state.isFocused ? "#8B5CF6" : "#94A3B8",
                "&:hover": {
                  color: "#8B5CF6",
                },
              }),
          
              indicatorSeparator: (base) => ({
                ...base,
                backgroundColor: "#243041",
              }),
            }}
              className="basic-single"
              classNamePrefix="select"
             
              isDisabled={false}
              isLoading={false}
              isClearable={true}
              isRtl={locale == "fa" ? true : false}
              isSearchable={true}
              name="color"
              options={users}
            />
            )}
          />
          {errors && errors.salon_owner_id && <Alert mesg={errors?.salon_owner_id} />}
        </div>
      </div>

      <SelectCountryEdit editData={data} watch={watch} setValue={setValue} control={control} errors={errors}/>

      <div className="flex flex-col gap-2 mt-8">
        <label className="text-sm font-medium text-slate-700">آدرس</label>

        <textarea
          {...register("address")}
          cols={5}
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
        focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
        ></textarea>
        {errors && errors.name && <Alert mesg={errors?.name} />}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-15 mt-8">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">
            توضیح کوتاه
          </label>
          <Controller
            name="small_desc"
            control={control}
            render={({ field }) => (
              <Editor
                value={field.value}
                onChange={field.onChange}
                lang={locale}
              />
            )}
          />

          {errors && errors.small_desc && <Alert mesg={errors?.small_desc} />}
        </div>

        <div className="flex flex-col gap-2  ">
          <label className="text-sm font-medium text-slate-700">
            توضیحات درباره سالن
          </label>

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Editor
                value={field.value}
                onChange={field.onChange}
                lang={locale}
              />
            )}
          />
          {errors && errors.description && <Alert mesg={errors?.description} />}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-8">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">
            عکس سالن
          </label>

          <input
            {...register("image")}
            type="file"
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
        focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
          />
          {errors && errors.image && <Alert mesg={errors?.image} />}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">
             ویدیو از محیط سالن
          </label>

          <input
            {...register("video")}
            type="file"
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
        focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
          />
          {errors && errors.video && <Alert mesg={errors?.video} />}
        </div>
        
      </div>

      <div className="flex flex-col w-full gap-2 ">
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

      <div className="flex justify-end gap-3 border-t border-slate-200 pt-6">
        <Link
          href={"/admin/salons"}
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
