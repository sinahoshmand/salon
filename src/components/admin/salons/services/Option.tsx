"use client";
import { toast } from "@/src/helper/toast";
import { Link } from "@/src/i18n/navigation";
import { useApi } from "@/src/service/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { error } from "next/dist/build/output/log";

import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import Swal from "sweetalert2";

type Props = {
  id: number;
  salon_id: string;
};

export default function Option({ id, salon_id }: Props) {
  const api = useApi();
  const queryClient = useQueryClient();

  const deleteCategory = useMutation({
    mutationFn: async (id: number) =>
      await api.delete(`/admin/salon-services/${id}`),
    onSuccess: (success) => {
      queryClient.invalidateQueries({
        queryKey: ["services"],
      });
      if (success.status === 200) {
        toast.fire({
          title: success.data.message,
          icon: "success",
        });
      }
    },
    onError: (error) => {},
  });

  const destroy = (id: number) => {
    Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "این عملیات قابل بازگشت نیست.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7C3AED",
      cancelButtonColor: "#EF4444",
      confirmButtonText: "بله، حذف شود",
      cancelButtonText: "انصراف",
    }).then((result) => {
      if (!result.isConfirmed) return;

      deleteCategory.mutate(id);
    });
  };

  return (
    <div className="flex   gap-2">
      <Link
        href={`/admin/salons/services/${salon_id}/reserve/${id}`}
        
        className="w-10 h-10 rounded-xl bg-blue-200 text-blue-700 flex items-center justify-center hover:bg-blue-100 transition-all"
      >
        <SlCalender size={18} />
      </Link>

      <Link
        href={`/admin/salons/services/${salon_id}/edit/${id}`}
     
        className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center hover:bg-amber-100 transition-all"
      >
        <FiEdit2 size={18} />
      </Link>

      <button
        onClick={() => {
          destroy(id);
        }}
      
        className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-all"
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
}
