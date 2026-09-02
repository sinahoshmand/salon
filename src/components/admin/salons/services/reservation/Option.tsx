"use client";
import { toast } from "@/src/helper/toast";
import { Link } from "@/src/i18n/navigation";
import { useApi } from "@/src/service/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { error } from "next/dist/build/output/log";
import { useEffect } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { MdDetails } from "react-icons/md";
import Swal from "sweetalert2";
 
interface Data {
  id: number;
  time: string;
  status: string;
  salon : string
}

type Props  = {
    id : number,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setTimeId : React.Dispatch<React.SetStateAction<number|null>>;
}
 

export default function Option({id , setOpen , setTimeId} : Props) {

    const api = useApi();
    const queryClient = useQueryClient();
    const deleteCategory = useMutation({
        mutationFn : async (id : number) => await api.delete(`/admin/reservation/delete-dates/${id}`),
        onSuccess : (success => {
            queryClient.invalidateQueries({
                queryKey: ["times"],
            });
            if(success.status === 200){
                toast.fire({
                  title : success.data.message,
                  icon : "success"
                })
            }
        }),
        onError : (error => {})
    })



    const destroy = (id : number) => {
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
    }



  return (
    <div className="flex   gap-2">
      <button
        onClick={() => {
          setOpen(true)
          setTimeId(id);
        }}
        className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center hover:bg-amber-100 transition-all"
      >
        <FiEdit2 size={18} />
      </button>

      <button
        onClick={() => {
          destroy(id)
        }}
     
        className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-all"
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
}
