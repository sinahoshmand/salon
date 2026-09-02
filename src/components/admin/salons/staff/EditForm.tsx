"use client";
import { useApi } from "@/src/service/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Alert from "@/src/components/admin/ui/Alert";
import { Link } from "@/src/i18n/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "@/src/helper/toast";
import { useTranslations } from "next-intl";
import { CurrencyInput } from "react-currency-input-field";
import Select from "react-select";
import { useSession } from "next-auth/react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Loading from "../../ui/Loading";
import ErrorLoading from "../../ui/ErrorLoadin";

type Data = {
  id: number;
  name: string;
  image: File | null;
  salon_id: string;
  job_title: string;
  status: number;
  instagram: string;
  whatsapp: string;
  tiktok: string;
};

interface Error {
  id: number;
  name: string;
  image: string;
  job_title: string;
  status: string;
  salon: string;
  instagram: string;
  whatsapp: string;
  tiktok: string;
}

interface ErrRes {
  response: {
    status: number;
    data: {
      errors: Error;
    };
  };
}

export default function EditForm({ id , salon_id }: { id: string , salon_id:string }) {
  const [errors, setErrors] = useState<Error | null>(null);
  const t = useTranslations("admin-main-services");
  const router = useRouter();
  const api = useApi();
  const { data: session, status } = useSession();
  const { register, control, handleSubmit, reset } = useForm<Data>({
    defaultValues: {
      name: "",
      image: null,
      job_title: "",
      status: 1,
      
    },
  });


  const { data, isLoading, error } = useQuery({
    queryKey: ["staff", id],
    queryFn: async () => {
      const res = await api.get(`/admin/salon-staff/${id}`);
      return res.data.data;
    },
    enabled: status === "authenticated",
  });

  const update = useMutation({
    mutationFn: (data: Data) =>
      api.post(`/admin/salon-staff/${id}?_method=PUT`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: (success) => {
      setErrors(null);
      if (success.status === 200 || success.status === 201) {
        toast.fire({
          title: "Data Updated Successfuly",
          icon: "success",
        });
        reset();
      }
    },
    onError: (error: ErrRes) => {
      const status = error?.response?.status;
      if (status === 500) {
      }
      setErrors(error.response?.data.errors);
    },
  });

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

  useEffect(() => {
    if (!data) return;
    reset({
      name: data?.name,
      job_title: data?.job,
      status: data?.status === "active" ? 1 : 0,
      instagram: data?.social_media.instagram,
      whatsapp: data?.social_media.whatsapp,
      tiktok:data?.social_media.tiktok,
    });
  }, [data, reset]);


  if (isLoading) return <Loading/>;
  if (error) return <ErrorLoading/>;
  if(!data) return notFound()

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800"> ویرایش کارکنان</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">نام</label>

            <input
              {...register("name")}
              type="text"
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
          focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
            />
            {errors && errors.name && <Alert mesg={errors?.name} />}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">
              عنوان شغل
            </label>

            <input
              {...register("job_title")}
              type="text"
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
          focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
            />
            {errors && errors.job_title && <Alert mesg={errors?.job_title} />}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Instagram */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10 text-pink-500">
                <FaInstagram size={16} />
              </span>
              اینستاگرام
            </label>

            <input
              {...register("instagram")}
              type="text"
              placeholder="https://instagram.com/username"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm
    text-slate-700 placeholder:text-slate-400 outline-none transition-all
    focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10"
            />

            {errors?.instagram && <Alert mesg={errors.instagram} />}
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                <FaWhatsapp size={17} />
              </span>
              واتساپ
            </label>

            <input
              {...register("whatsapp")}
              type="text"
              placeholder="https://wa.me/989121234567"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm
    text-slate-700 placeholder:text-slate-400 outline-none transition-all
    focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
            />

            {errors?.whatsapp && <Alert mesg={errors.whatsapp} />}
          </div>

          {/* TikTok */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-500/10 text-slate-700">
                <FaTiktok size={16} />
              </span>
              تیک‌تاک
            </label>

            <input
              {...register("tiktok")}
              type="text"
              placeholder="https://tiktok.com/@username"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm
    text-slate-700 placeholder:text-slate-400 outline-none transition-all
    focus:border-slate-700 focus:ring-4 focus:ring-slate-700/10"
            />

            {errors?.tiktok && <Alert mesg={errors.tiktok} />}
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
            href={"/admin/salons/staff/" + salon_id}
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
