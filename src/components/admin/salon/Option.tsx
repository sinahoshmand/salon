"use client";
 
import { useApi } from "@/src/service/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { error } from "next/dist/build/output/log";
import Link from "next/link";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
 

type Props  = {
    id : number
}
 

export default function Option({id} : Props) {

    // const api = useApi();
    // const queryClient = useQueryClient();


    // const deleteCategory = useMutation({
    //     mutationFn : async (id : number) => await api.delete(`/panel/category/${id}`),
    //     onSuccess : (success => {
    //         queryClient.invalidateQueries({
    //             queryKey: ["categories"],
    //         });
    //     }),
    //     onError : (error => {})
    // })



    // const destroy = (id : number) => {
    //     Swal.fire({
    //         title: "آیا مطمئن هستید؟",
    //         text: "این عملیات قابل بازگشت نیست.",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#7C3AED",
    //         cancelButtonColor: "#EF4444",
    //         confirmButtonText: "بله، حذف شود",
    //         cancelButtonText: "انصراف",
    //       }).then((result) => {
    //         if (!result.isConfirmed) return;
          
    //         deleteCategory.mutate(id);
    //       });
    // }



  return (
    <div className="flex   gap-2">
      <Link
        href={`/admin/category/edit/${id}`}
        title="ویرایش"
        className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center hover:bg-amber-100 transition-all"
      >
        <FiEdit2 size={18} />
      </Link>

      <button
       
        title="حذف"
        className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-all"
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
}
