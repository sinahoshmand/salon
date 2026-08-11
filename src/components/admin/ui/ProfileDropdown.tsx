"use client"
import { useRouter } from "@/src/i18n/navigation";
import { useApi } from "@/src/service/api";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";


type Props = {
    name : string,
    image?:string,
    role?:string
}

export default function ProfileDropdown({name , image , role="مدیرسیستم"}:Props){
    const locale = useLocale();
    const router = useRouter();
    const[open , setOpen] = useState<boolean>(false)
    const api = useApi();
    const logoutSystem = useMutation({
       mutationFn : () => 
        api.post(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/auth/logout` , null)
        ,onSuccess : async (success) => {
           await signOut({
              // callbackUrl : '/login'
              redirect : false
           })  
           
           router.push('/login')
        },
        onError : (error) => {
          console.log(error)
        }
    })
    const exit = () => {
       logoutSystem.mutate()
    }
     

    return(
        <div 
         onMouseEnter={() => setOpen(true)}
         onMouseLeave={() => setOpen(false)}
        >
            <button className="flex gap-3 bg-[#F3F3F9] py-4 px-2 items-center"
             
            >
              <Image
                className="rounded-full  w-[30px] h-[30px]"
                src={'/images/profile.jpg'}
                width={80}
                height={80}
                alt={name}
              />
              <p className="text-[12px]">{name}</p>
            </button>
            <div className={`absolute ${locale === "en" ? 'right-3' : 'left-3'} ${open ? 'visible' : 'hidden'} top-15 w-72 rounded-xl border
                 border-slate-200 bg-white shadow-2xl overflow-hidden z-50`}>
              <div className="p-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                <Image
                className="rounded-full w-[30px] h-[30px]"
                src={'/images/profile.jpg'} 
                width={80}
                height={80}
                alt={name}
              />

                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-800">
                      {name}
                    </span>
                    <span className="text-xs text-slate-500">{role}</span>
                  </div>
                </div>
              </div>

              <div className="p-2">
                <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-100 transition-all">
                  👤
                  <span className="text-sm text-slate-700">پروفایل من</span>
                </button>

                <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-100 transition-all">
                  ⚙️
                  <span className="text-sm text-slate-700">تنظیمات حساب</span>
                </button>

                <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-100 transition-all">
                  🔒
                  <span className="text-sm text-slate-700">تغییر رمز عبور</span>
                </button>
              </div>

              <div className="border-t border-slate-100 p-2">
                <button 
                onClick={() => {
                   exit()
                }}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-red-500 hover:bg-red-50 transition-all">
                  🚪
                  <span className="text-sm font-medium">خروج از حساب</span>
                </button>
              </div>
            </div>
        </div>
    )
}