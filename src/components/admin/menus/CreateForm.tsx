"use client";
import { useApi } from "@/src/service/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Alert from "@/src/components/admin/ui/Alert";
import { Link } from "@/src/i18n/navigation";
import { useForm } from "react-hook-form";
import { toast } from "@/src/helper/toast";
import { useTranslations } from "next-intl";

type Data = {
  name: string;
  href: string;
  status: number;
  order: null | number;
};

interface Error {
  name: string;
  href: string;
  status: string;
  order: string;
}

interface ErrRes {
  response: {
    status: number;
    data: {
      errors: Error;
    };
  };
}

export default function CreateForm() {
  const [errors, setErrors] = useState<Error | null>(null);
  const t = useTranslations("admin-main-menus");
  const router = useRouter();
  const api = useApi();

  const { register, handleSubmit, reset } = useForm<Data>({
    defaultValues: {
      name: "",
      href: "",
      order: null,
      status: 1,
    },
  });

  const createCategory = useMutation({
    mutationFn: (data: Data) => api.post("/admin/menus", data),
    onSuccess: (success) => {
      setErrors(null);
      if (success.status === 200 || success.status === 201) {
        toast.fire({
          title: "Data Created Successfuly",
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
    createCategory.mutate(data);
  };

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-[18px] font-bold text-slate-800">{t("create")}</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* نام */}
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

          <div className="flex flex-col gap-2  ">
            <label className="text-sm font-medium text-slate-700">لینک</label>

            <input
              {...register("href")}
              type="text"
              placeholder="https://site.com/contact-us"
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
          focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
            />
            {errors && errors.href && <Alert mesg={errors?.href} />}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="flex flex-col gap-2  ">
            <label className="text-sm font-medium text-slate-700">
              شماره ترتیب
            </label>

            <input
              {...register("order")}
              type="number"
              
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all
          focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10"
            />
            {errors && errors.order && <Alert mesg={errors?.order} />}
          </div>
          <div className="flex flex-col w-full gap-2  ">
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
        </div>

        <div className="flex justify-end gap-3 border-t border-slate-200 pt-6">
          <Link
            href={"/admin/menus"}
            className="rounded-xl border border-slate-300 px-6 py-3 text-slate-600 hover:bg-slate-100 transition"
          >
            انصراف
          </Link>

          <button
            type="submit"
            disabled={createCategory.isPending}
            className="flex items-center justify-center gap-2 bg-[#7C3AED] text-white px-6 py-3 rounded-lg"
          >
            {createCategory.isPending && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}

            {createCategory.isPending ? "در حال ثبت..." : "ثبت"}
          </button>
        </div>
      </form>
    </section>
  );
}
