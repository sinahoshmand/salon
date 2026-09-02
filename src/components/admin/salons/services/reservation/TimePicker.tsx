"use client";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker";
import { CalendarDays, Clock, X } from "lucide-react";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useApi } from "@/src/service/api";
import { toast } from "@/src/helper/toast";
import Alert from "../../../ui/Alert";
import { useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import toEnglishDigits from "@/src/helper/convert";

type Data = {
  selectedDates: any;
  service_id: string;
};
type Error = {
  time: string;
};

type Time = {
  time: string;
  id: string;
};

type Props = {
  open: boolean;
  service_id: string;
  salon_id: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function WorkingHoursModal({
  open,
  setOpen,
  service_id,
  salon_id,
}: Props) {
  const [selectedDates, setSelectedDates] = useState<Record<string, string[]>>(
    {},
  );
  const [errors, setErrors] = useState<Error | null>(null);
  const locale = useLocale();
  const api = useApi();
  const queryClient = useQueryClient();
  const [value, setValues] = useState<DateObject[]>([]);
  const { data: session, status: auth } = useSession();
  const save = useMutation({
    mutationFn: (data: Data) =>
      api.post(
        `/admin/reservation/save-dates/${service_id}?locale=${locale}`,
        data
        
      ),
    onSuccess: (success) => {
      queryClient.invalidateQueries({
        queryKey: ["times"],
      });
      setErrors(null);
      if (success.status === 200 || success.status === 201) {
        toast.fire({
          title: "Data Created Successfuly",
          icon: "success",
        });
      }
    },
    onError: (error: any) => {
      const status = error?.response?.status;
      setErrors(error.response?.data.errors);
    },
  });

  const handleSave = () => {
    save.mutate({ selectedDates, service_id });
  };

  const { data: times, isPending } = useQuery({
    queryKey: ["times", salon_id],
    queryFn: async () => {
      const res = await api.get(`/admin/salon-fixed-times?id=${salon_id}`);
      return res.data.data;
    },
    enabled: auth === "authenticated",
  });

 

  const handleDatesChange = (dates: any[]) => {
    const newDates: Record<string, string[]> = {};
    dates.forEach((date) => {
      let dateKey = date.format("YYYY/MM/DD");

      if (locale === "fa") {
        dateKey = toEnglishDigits(dateKey);
        newDates[dateKey] = selectedDates[dateKey] ?? [];
      }else{
        newDates[dateKey] = selectedDates[dateKey] ?? [];
      }
    });
    setSelectedDates(newDates);
    setValues(dates);
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[9999]"
        onClose={() => setOpen(false)}
      >
        {/* Overlay */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm" />
        </TransitionChild>

        {/* Modal Wrapper */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-3 sm:p-5">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-3"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-3"
            >
              <DialogPanel className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
                {/* Header */}
                <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-violet-600 via-violet-600 to-fuchsia-600 px-5 py-5 sm:px-7 sm:py-6">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10" />
                  <div className="absolute -bottom-20 left-24 h-40 w-40 rounded-full bg-white/5" />

                  <div className="relative flex items-center justify-between gap-4">
                    <div>
                      <DialogTitle className="text-xl font-bold text-white sm:text-2xl">
                        انتخاب تاریخ
                      </DialogTitle>

                      <p className="mt-1.5 text-xs text-violet-100 sm:text-sm">
                        تاریخ‌های موردنظر برای رزرو را انتخاب کنید
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="shrink-0 rounded-full p-2.5 text-white/80 transition hover:bg-white/15 hover:text-white"
                    >
                      <X size={21} />
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="flex min-h-0 flex-1 flex-col overflow-hidden p-4 sm:p-6 lg:p-7">
                  {/* Body Header */}
                  <div className="mb-4 flex shrink-0 items-center justify-between gap-3">
                    {value?.length > 0 && (
                      <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-violet-50 px-2.5 py-1.5 text-[11px] font-semibold text-violet-600 sm:gap-2 sm:px-3 sm:text-xs">
                        <CalendarDays size={14} />
                        <span>{value.length} تاریخ انتخاب شده</span>
                      </div>
                    )}
                  </div>

                  {/* Main Content */}
                  <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 overflow-hidden lg:grid-cols-2 lg:gap-5">
                    {/* Calendar */}
                    <div className="flex min-h-[340px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                      {locale === "fa" ? (
                        <Calendar
                          multiple
                          value={value}
                          onChange={handleDatesChange}
                          locale={persian_fa}
                          calendar={persian}
                        />
                      ) : (
                        <Calendar
                          multiple
                          value={value}
                          onChange={handleDatesChange}
                        />
                      )}
                    </div>

                    {/* Selected Dates */}
                    <div className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                      {/* Selected Header */}
                      <div className="mb-4 flex shrink-0 items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-2">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                            <CalendarDays size={17} />
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-slate-700">
                              تاریخ‌های انتخابی
                            </p>

                            <p className="text-[11px] text-slate-400">
                              لیست تاریخ‌ها و ساعات
                            </p>
                          </div>
                        </div>

                        {value?.length > 0 && (
                          <span className="flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 px-2 text-xs font-bold text-white">
                            {value.length}
                          </span>
                        )}
                      </div>

                      {/* Dates List */}
                      {value?.length > 0 ? (
                        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pr-1">
                          {value.map((date, index) => (
                            <section
                              key={index}
                              className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
                            >
                              {/* Date Header */}
                              <div className="group flex items-center justify-between gap-3">
                                <div className="flex min-w-0 items-center gap-3">
                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-xs font-bold text-white">
                                    {index + 1}
                                  </div>

                                  <div className="min-w-0">
                                    <p className="text-[11px] text-slate-400">
                                      تاریخ {index + 1}
                                    </p>

                                    <p className="mt-0.5 truncate text-sm font-semibold text-slate-700">
                                      {date.format("YYYY/MM/DD")}
                                    </p>
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => {
                                    let dateKey = date.format("YYYY/MM/DD");

                                    if (locale === "fa") {
                                      dateKey = toEnglishDigits(dateKey);
                                    }

                                    setValues(
                                      value.filter((_, i) => i !== index),
                                    );

                                    setSelectedDates((prev) => {
                                      const updated = { ...prev };
                                      delete updated[dateKey];
                                      return updated;
                                    });
                                  }}
                                  className="shrink-0 rounded-lg p-2 text-slate-300 transition-all hover:bg-red-50 hover:text-red-500"
                                >
                                  <X size={15} />
                                </button>
                              </div>

                              {/* Times */}
                              <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50/70 p-2.5 sm:p-3">
                                <div className="mb-2.5 flex items-center justify-between">
                                  <div className="flex items-center gap-1.5">
                                    <Clock
                                      size={14}
                                      className="text-violet-500"
                                    />

                                    <span className="text-[11px] font-semibold text-slate-500">
                                      ساعات رزرو
                                    </span>
                                  </div>

                                  <span className="text-[10px] text-slate-400">
                                    انتخاب کنید
                                  </span>
                                </div>

                                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                                  {times?.map((item: Time) => (
                                    <label
                                      key={item.id}
                                      className="group relative flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 py-2.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md has-[:checked]:border-violet-500 has-[:checked]:bg-violet-50 has-[:checked]:shadow-violet-100"
                                    >
                                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-200 group-has-[:checked]:bg-violet-600 group-has-[:checked]:text-white">
                                        <Clock size={14} strokeWidth={2.2} />
                                      </div>

                                      <div className="min-w-0 flex-1">
                                        <span className="block truncate text-xs font-bold text-slate-700 transition-colors group-has-[:checked]:text-violet-700">
                                          {item.time}
                                        </span>

                                        <span className="mt-0.5 block text-[9px] font-medium text-slate-400">
                                          ساعت رزرو
                                        </span>
                                      </div>

                                      <input
                                        type="checkbox"
                                        value={item.time}
                                        checked={
                                          selectedDates[
                                            locale === "fa"
                                              ? toEnglishDigits(date.format("YYYY/MM/DD"))
                                              : date.format("YYYY/MM/DD")
                                          ]?.includes(item.time) ?? false
                                        }
                                        onChange={(e) => {
                                          let dateKey = date.format("YYYY/MM/DD");
                                        
                                          if (locale === "fa") {
                                            dateKey = toEnglishDigits(dateKey);
                                          }
                                        
                                          setSelectedDates((prev) => {
                                            const currentTimes = prev[dateKey] ?? [];
                                        
                                            const newTimes = e.target.checked
                                              ? [...currentTimes, item.time]
                                              : currentTimes.filter((time) => time !== item.time);
                                        
                                            return {
                                              ...prev,
                                              [dateKey]: newTimes,
                                            };
                                          });
                                        }}
                                        className="h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 text-violet-600 accent-violet-600 focus:ring-2 focus:ring-violet-500/20"
                                      />
                                    </label>
                                  ))}
                                </div>
                              </div>
                            </section>
                          ))}
                        </div>
                      ) : (
                        <div className="flex min-h-0 flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white px-5 text-center">
                          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-400">
                            <CalendarDays size={24} />
                          </div>

                          <p className="text-sm font-semibold text-slate-600">
                            هنوز تاریخی انتخاب نشده
                          </p>

                          <p className="mt-1 text-xs leading-5 text-slate-400">
                            از تقویم یک یا چند تاریخ
                            <br />
                            را انتخاب کنید
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Error */}
                  {errors?.time && (
                    <div className="mt-4 shrink-0">
                      <Alert mesg={errors.time} />
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex shrink-0 items-center justify-between gap-4 border-t border-slate-100 px-5 py-4 sm:px-7 sm:py-5">
                  <div className="flex w-full items-center justify-end gap-2.5 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 sm:px-5"
                    >
                      انصراف
                    </button>

                    <button
                      type="button"
                      onClick={handleSave}
                      disabled={save.isPending || !value?.length}
                      className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-200 disabled:cursor-not-allowed disabled:opacity-50 sm:px-7"
                    >
                      {save.isPending ? "در حال ثبت..." : "ثبت تاریخ‌ها"}
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
