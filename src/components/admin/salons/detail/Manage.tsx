"use client"
import { BsScissors } from "react-icons/bs";
import Card from "../../ui/Card";
import { FaUsers } from "react-icons/fa6";
import { FaCalendar, FaClock, FaComment, FaImage, FaInfo, FaQuestion } from "react-icons/fa";
import { Link } from "@/src/i18n/navigation";
import Data from "@/src/types/single-salon.type";
 

export default function Manage({data} : {data : Data}){
    return(
     <Card  >

     {/* Header */}
     <div className="flex items-center justify-between ">
   
       <div>
         <h2 className="text-lg font-bold tracking-tight text-slate-900">
           مدیریت بخش‌های سالن
         </h2>
   
         <p className="mt-1 text-xs text-slate-400">
           بخش‌های مختلف سالن را از این قسمت مدیریت کنید
         </p>
       </div>
   
       <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
         <span className="text-lg">⚙</span>
       </div>
   
     </div>
   
   
     {/* Management Items */}
     <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
   
       {/* Services */}
       <Link
         href={`/admin/salons/services/${data.id}`}
         className="
           group relative overflow-hidden
           rounded-2xl border border-slate-100
           bg-slate-50/40 p-5
           transition-all duration-300
           hover:-translate-y-1
           hover:border-violet-100
           hover:bg-white
           hover:shadow-[0_10px_30px_rgba(124,58,237,0.08)]
         "
       >
   
         {/* Background glow */}
         <div className="
           absolute -right-10 -top-10
           h-24 w-24 rounded-full
           bg-violet-200/30 blur-2xl
           transition-all duration-300
           group-hover:bg-violet-300/40
         " />
   
         <div className="relative">
   
           <div className="flex items-start justify-between">
   
             <div className="
               flex h-12 w-12 items-center justify-center
               rounded-xl
               bg-violet-50
               text-violet-600
               ring-1 ring-violet-100
               transition-all duration-300
               group-hover:scale-105
               group-hover:bg-violet-600
               group-hover:text-white
             ">
               <BsScissors size={22} />
             </div>
   
             <span className="
               flex h-8 w-8 items-center justify-center
               rounded-lg bg-white
               text-slate-300
               shadow-sm
               transition-all duration-300
               group-hover:translate-x-[-2px]
               group-hover:text-violet-500
             ">
               ←
             </span>
   
           </div>
   
   
           <div className="mt-5">
   
             <h3 className="text-sm font-bold text-slate-900">
               خدمات
             </h3>
   
             <p className="
               mt-2
               min-h-[40px]
               text-[11px]
               leading-5
               text-slate-400
             ">
               مدیریت خدمات، دسته‌بندی‌ها، قیمت‌ها و مدت زمان ارائه
             </p>
   
           </div>
   
   
           <div className="
             mt-5 flex items-center justify-between
             border-t border-slate-100 pt-4
           ">
   
             <span className="text-[10px] font-medium text-slate-400">
               مدیریت خدمات
             </span>
   
             <span className="
               text-[11px] font-semibold
               text-violet-600
               transition-transform duration-300
               group-hover:translate-x-[-3px]
             ">
               مشاهده ←
             </span>
   
           </div>
   
         </div>
       </Link>
   
   
       {/* Staff */}
       <Link href={`/admin/salons/staff/${data.id}`}
         type="button"
         className="
           group relative overflow-hidden
           rounded-2xl border border-slate-100
           bg-slate-50/40 p-5 text-right
           transition-all duration-300
           hover:-translate-y-1
           hover:border-blue-100
           hover:bg-white
           hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)]
         "
       >
   
         <div className="
           absolute -right-10 -top-10
           h-24 w-24 rounded-full
           bg-blue-200/30 blur-2xl
           transition-all duration-300
           group-hover:bg-blue-300/40
         " />
   
         <div className="relative">
   
           <div className="flex items-start justify-between">
   
             <div className="
               flex h-12 w-12 items-center justify-center
               rounded-xl
               bg-blue-50
               text-blue-600
               ring-1 ring-blue-100
               transition-all duration-300
               group-hover:scale-105
               group-hover:bg-blue-600
               group-hover:text-white
             ">
               <FaUsers size={21} />
             </div>
   
             <span className="
               flex h-8 w-8 items-center justify-center
               rounded-lg bg-white
               text-slate-300 shadow-sm
               transition-all duration-300
               group-hover:text-blue-500
             ">
               ←
             </span>
   
           </div>
   
   
           <div className="mt-5">
   
             <h3 className="text-sm font-bold text-slate-900">
               کارکنان
             </h3>
   
             <p className="
               mt-2
               min-h-[40px]
               text-[11px]
               leading-5
               text-slate-400
             ">
               مدیریت کارکنان، متخصص‌ها، نقش‌ها و اطلاعات آن‌ها
             </p>
   
           </div>
   
   
           <div className="
             mt-5 flex items-center justify-between
             border-t border-slate-100 pt-4
           ">
   
             <span className="text-[10px] font-medium text-slate-400">
               مدیریت تیم
             </span>
   
             <span className="
               text-[11px] font-semibold
               text-blue-600
               transition-transform duration-300
               group-hover:translate-x-[-3px]
             ">
               مشاهده ←
             </span>
   
           </div>
   
         </div>
       </Link>
   
   
       {/* Working Hours */}
       <Link href={`/admin/salons/fixed-times/${data.id}`}
         type="button"
         className="
           group relative overflow-hidden
           rounded-2xl border border-slate-100
           bg-slate-50/40 p-5 text-right
           transition-all duration-300
           hover:-translate-y-1
           hover:border-emerald-100
           hover:bg-white
           hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)]
         "
       >
   
         <div className="
           absolute -right-10 -top-10
           h-24 w-24 rounded-full
           bg-emerald-200/30 blur-2xl
           transition-all duration-300
           group-hover:bg-emerald-300/40
         " />
   
         <div className="relative">
   
           <div className="flex items-start justify-between">
   
             <div className="
               flex h-12 w-12 items-center justify-center
               rounded-xl
               bg-emerald-50
               text-emerald-600
               ring-1 ring-emerald-100
               transition-all duration-300
               group-hover:scale-105
               group-hover:bg-emerald-600
               group-hover:text-white
             ">
               <FaClock size={20} />
             </div>
   
             <span className="
               flex h-8 w-8 items-center justify-center
               rounded-lg bg-white
               text-slate-300 shadow-sm
               transition-all duration-300
               group-hover:text-emerald-500
             ">
               ←
             </span>
   
           </div>
   
   
           <div className="mt-5">
   
             <h3 className="text-sm font-bold text-slate-900">
                تعریف تایم های رزرو
             </h3>
   
             <p className="
               mt-2
               min-h-[40px]
               text-[11px]
               leading-5
               text-slate-400
             ">
                تعریف ساعت های قابل رزرو سال
             </p>
   
           </div>
   
   
           <div className="
             mt-5 flex items-center justify-between
             border-t border-slate-100 pt-4
           ">
   
             <span className="text-[10px] font-medium text-slate-400">
               زمان‌بندی سالن
             </span>
   
             <span className="
               text-[11px] font-semibold
               text-emerald-600
               transition-transform duration-300
               group-hover:translate-x-[-3px]
             ">
               مشاهده ←
             </span>
   
           </div>
   
         </div>
       </Link>


          {/* Gallery Sec */}
          <Link href={`#`}
         type="button"
         className="
           group relative overflow-hidden
           rounded-2xl border border-slate-100
           bg-slate-50/40 p-5 text-right
           transition-all duration-300
           hover:-translate-y-1
           hover:border-rose-100
           hover:bg-white
           hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)]
         "
       >
   
         <div className="
           absolute -right-10 -top-10
           h-24 w-24 rounded-full
           bg-rose-300/30 blur-2xl
           transition-all duration-300
           group-hover:bg-rose-300/40
         " />
   
         <div className="relative">
   
           <div className="flex items-start justify-between">
   
             <div className="
               flex h-12 w-12 items-center justify-center
               rounded-xl
               bg-rose-50
               text-rose-600
               ring-1 ring-rose-100
               transition-all duration-300
               group-hover:scale-105
               group-hover:bg-rose-600
               group-hover:text-white
             ">
               <FaImage size={20} />
             </div>
   
             <span className="
               flex h-8 w-8 items-center justify-center
               rounded-lg bg-white
               text-slate-300 shadow-sm
               transition-all duration-300
               group-hover:text-rose-500
             ">
               ←
             </span>
   
           </div>
   
   
           <div className="mt-5">
   
             <h3 className="text-sm font-bold text-slate-900">
                تعریف گالری 
             </h3>
   
             <p className="
               mt-2
               min-h-[40px]
               text-[11px]
               leading-5
               text-slate-400
             ">
                   تعریف گالری
             </p>
   
           </div>
   
   
           <div className="
             mt-5 flex items-center justify-between
             border-t border-slate-100 pt-4
           ">
   
             <span className="text-[10px] font-medium text-slate-400">
                گالری سالن
             </span>
   
             <span className="
               text-[11px] font-semibold
               text-rose-600
               transition-transform duration-300
               group-hover:translate-x-[-3px]
             ">
               مشاهده ←
             </span>
   
           </div>
   
         </div>
       </Link>


    {/* Comments Sec */}
      <Link href={`#`}
         type="button"
         className="
           group relative overflow-hidden
           rounded-2xl border border-slate-100
           bg-slate-50/40 p-5 text-right
           transition-all duration-300
           hover:-translate-y-1
           hover:border-gray-100
           hover:bg-white
           hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)]
         "
       >
   
         <div className="
           absolute -right-10 -top-10
           h-24 w-24 rounded-full
           bg-gray-300/30 blur-2xl
           transition-all duration-300
           group-hover:bg-gray-300/40
         " />
   
         <div className="relative">
   
           <div className="flex items-start justify-between">
   
             <div className="
               flex h-12 w-12 items-center justify-center
               rounded-xl
               bg-gray-50
               text-gray-600
               ring-1 ring-gray-100
               transition-all duration-300
               group-hover:scale-105
               group-hover:bg-gray-600
               group-hover:text-white
             ">
               <FaComment size={20} />
             </div>
   
             <span className="
               flex h-8 w-8 items-center justify-center
               rounded-lg bg-white
               text-slate-300 shadow-sm
               transition-all duration-300
               group-hover:text-gray-500
             ">
               ←
             </span>
   
           </div>
   
   
           <div className="mt-5">
   
             <h3 className="text-sm font-bold text-slate-900">
                مدیریت نظرات
             </h3>
   
             <p className="
               mt-2
               min-h-[40px]
               text-[11px]
               leading-5
               text-slate-400
             ">
                  نظرات
             </p>
   
           </div>
   
   
           <div className="
             mt-5 flex items-center justify-between
             border-t border-slate-100 pt-4
           ">
   
             <span className="text-[10px] font-medium text-slate-400">
                نظرات درج شده سالن
             </span>
   
             <span className="
               text-[11px] font-semibold
               text-gray-600
               transition-transform duration-300
               group-hover:translate-x-[-3px]
             ">
               مشاهده ←
             </span>
   
           </div>
   
         </div>
       </Link>


        {/* Faq Sec */}
      <Link href={`#`}
         type="button"
         className="
           group relative overflow-hidden
           rounded-2xl border border-slate-100
           bg-slate-50/40 p-5 text-right
           transition-all duration-300
           hover:-translate-y-1
           hover:border-orange-100
           hover:bg-white
           hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)]
         "
       >
   
         <div className="
           absolute -right-10 -top-10
           h-24 w-24 rounded-full
           bg-orange-300/30 blur-2xl
           transition-all duration-300
           group-hover:bg-orange-300/40
         " />
   
         <div className="relative">
   
           <div className="flex items-start justify-between">
   
             <div className="
               flex h-12 w-12 items-center justify-center
               rounded-xl
               bg-orange-50
               text-orange-600
               ring-1 ring-gray-100
               transition-all duration-300
               group-hover:scale-105
               group-hover:bg-orange-600
               group-hover:text-white
             ">
               <FaQuestion size={20} />
             </div>
   
             <span className="
               flex h-8 w-8 items-center justify-center
               rounded-lg bg-white
               text-slate-300 shadow-sm
               transition-all duration-300
               group-hover:text-orange-500
             ">
               ←
             </span>
   
           </div>
   
   
           <div className="mt-5">
   
             <h3 className="text-sm font-bold text-slate-900">
                مدیریت پرسش و پاسخ
             </h3>
   
             <p className="
               mt-2
               min-h-[40px]
               text-[11px]
               leading-5
               text-slate-400
             ">
                  پرسش و پاسخ
             </p>
   
           </div>
   
   
           <div className="
             mt-5 flex items-center justify-between
             border-t border-slate-100 pt-4
           ">
   
             <span className="text-[10px] font-medium text-slate-400">
             پرسش و پاسخ سالن
             </span>
   
             <span className="
               text-[11px] font-semibold
               text-gray-600
               transition-transform duration-300
               group-hover:translate-x-[-3px]
             ">
               مشاهده ←
             </span>
   
           </div>
   
         </div>
       </Link>


          {/* Faq Sec */}
      <Link href={`#`}
         type="button"
         className="
           group relative overflow-hidden
           rounded-2xl border border-slate-100
           bg-slate-50/40 p-5 text-right
           transition-all duration-300
           hover:-translate-y-1
           hover:border-pink-100
           hover:bg-white
           hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)]
         "
       >
   
         <div className="
           absolute -right-10 -top-10
           h-24 w-24 rounded-full
           bg-pink-300/30 blur-2xl
           transition-all duration-300
           group-hover:bg-pink-300/40
         " />
   
         <div className="relative">
   
           <div className="flex items-start justify-between">
   
             <div className="
               flex h-12 w-12 items-center justify-center
               rounded-xl
               bg-pink-50
               text-pink-600
               ring-1 ring-gray-100
               transition-all duration-300
               group-hover:scale-105
               group-hover:bg-pink-600
               group-hover:text-white
             ">
               <FaInfo size={20} />
             </div>
   
             <span className="
               flex h-8 w-8 items-center justify-center
               rounded-lg bg-white
               text-slate-300 shadow-sm
               transition-all duration-300
               group-hover:text-pink-500
             ">
               ←
             </span>
   
           </div>
   
   
           <div className="mt-5">
   
             <h3 className="text-sm font-bold text-slate-900">
                 سایر اطلاعات
             </h3>
   
             <p className="
               mt-2
               min-h-[40px]
               text-[11px]
               leading-5
               text-slate-400
             ">
                سایر اطلاعات
             </p>
   
           </div>
   
   
           <div className="
             mt-5 flex items-center justify-between
             border-t border-slate-100 pt-4
           ">
   
             <span className="text-[10px] font-medium text-slate-400">
             سایر اطلاعات سالن
             </span>
   
             <span className="
               text-[11px] font-semibold
               text-gray-600
               transition-transform duration-300
               group-hover:translate-x-[-3px]
             ">
               مشاهده ←
             </span>
   
           </div>
   
         </div>
       </Link>
   
     </div>
   
   </Card>
    )
}