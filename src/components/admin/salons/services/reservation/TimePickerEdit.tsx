"use client";

import { Fragment, useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

import { Clock3, X } from "lucide-react";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useApi } from "@/src/service/api";
import { toast } from "@/src/helper/toast";
import Alert from "../../../ui/Alert";

type Data = {
  reservationTime: any;
};
type Error = {
  reservationTime: string;
};

interface Time {
  id: number;
  time: string;
  status: string;
  salon: string;
}

type Props = {
  open: boolean;
  time_id: number | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  times: Time[];
};

export default function WorkingHoursModalEdit({
  open,
  setOpen,
  time_id,
  times,
}: Props) {
  const [reservationTime, setReservationTime] = useState<any>(null);
  const [errors, setErrors] = useState<Error | null>(null);
  const api = useApi();
  const queryClient = useQueryClient();

  const save = useMutation({
    mutationFn: (data: Data) =>
      api.post(`/admin/salon-fixed-times/${time_id}?_method=PUT`, data , {
         headers : {
          "Content-Type": "multipart/form-data",
         }
      }),
    onSuccess: (success) => {
      queryClient.invalidateQueries({
        queryKey: ["times"],
      });
      setErrors(null);
      if (success.status === 200 || success.status === 201) {
        toast.fire({
          title: "Data Update Successfuly",
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
    save.mutate({ reservationTime });
  };

  useEffect(() => {
    if (!times) return;
  
    const time = times.find((item) => item.id === time_id);
  
    if (time?.time) {
      const [hours, minutes] = time.time.split(":").map(Number);
  
      const date = new Date();
      date.setHours(hours, minutes, 0, 0);
  
      setReservationTime(date.getTime());
    } else {
      setReservationTime(null);
    }
  }, [times, time_id]);

  return (
    <>
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

          {/* Modal */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95 translate-y-3"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 translate-y-3"
              >
                <DialogPanel
                  className="
                    w-full
                    max-w-md
                    overflow-visible
                    rounded-3xl
                    bg-white
                    shadow-2xl
                  "
                >
                  {/* Header */}
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-t-3xl
                      bg-gradient-to-br
                      from-violet-600
                      via-violet-600
                      to-fuchsia-600
                      px-6 py-6
                    "
                  >
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />

                    <div className="absolute -bottom-16 left-20 h-32 w-32 rounded-full bg-white/5" />

                    <div className="relative flex items-start justify-between">
                      <div>
                        <DialogTitle className="text-xl font-bold text-white">
                           ویرایش
                        </DialogTitle>

                        <p className="mt-1 text-sm text-violet-100">
                          ساعت موردنظر برای رزرو را انتخاب کنید
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="
                          rounded-full
                          p-2
                          text-white/80
                          transition
                          hover:bg-white/15
                          hover:text-white
                        "
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 mb-10">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        ساعت رزرو
                      </label>

                      <div
                        className="
                          group
                          flex items-center gap-3
                          rounded-2xl
                          mb-2
                          border border-slate-200
                          bg-slate-50
                          px-4 py-3
                          transition-all
                          focus-within:border-violet-400
                          focus-within:bg-white
                          focus-within:ring-4
                          focus-within:ring-violet-500/10
                        "
                      >
                        {/* Icon */}
                        <div
                          className="
                            flex h-11 w-11 shrink-0
                            items-center justify-center
                            rounded-xl
                            bg-violet-100
                            text-violet-600
                          "
                        >
                          <Clock3 size={20} />
                        </div>

                        {/* Time Picker */}
                        <div className="min-w-0 flex-1 mb-2">
                         <DatePicker
                            value={reservationTime}
                            onChange={(value) => {
                              setReservationTime(value);
                            }}
                            disableDayPicker
                            format="HH:mm"
                            plugins={[
                              <TimePicker key="reservation-time" hideSeconds />,
                            ]}
                            inputClass="working-time-input"
                          />
                        </div>
                      </div>
                      {errors && errors.reservationTime && <Alert mesg={errors?.reservationTime} />}
                    </div>
                  </div>

                  {/* Footer */}
                  <div
                    className="
                      flex items-center justify-end gap-3
                      border-t border-slate-100
                      px-6 py-5
                    "
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="
                        rounded-xl
                        border border-slate-200
                        px-5 py-2.5
                        text-sm font-medium
                        text-slate-600
                        transition
                        hover:bg-slate-50
                      "
                    >
                      انصراف
                    </button>

                    <button
                      type="button"
                      onClick={handleSave}
                      disabled={save.isPending}
                      className="
                        rounded-xl
                        bg-violet-600
                        px-6 py-2.5
                        text-sm font-semibold
                        text-white
                        shadow-sm
                        transition-all
                        hover:bg-violet-700
                        hover:shadow-lg
                        hover:shadow-violet-200
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                      "
                    >
                      {save.isPending ? "در حال ثبت..." : "ثبت"}
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
