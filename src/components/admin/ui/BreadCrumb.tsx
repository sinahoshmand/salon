import Link from "next/link";

type Props = {
  title : string,
  activePage : string,
  prevPage? : string|null,
  href? :string
}

export default function BreadCrumb({title , activePage , prevPage=null , href="#"} : Props) {
  return (
    <div className="w-full  bg-[#FFFFFF]   px-5 py-4 border-b-2 border-b-[#F3F3F9]">
      <div className="flex items-center justify-between">
        
          <h1 className="text-[18px] font-bold text-slate-800">{title}</h1>

          <div className="flex items-center gap-2 mt-1 text-sm">
            <Link href={'/admin/dashboard'} className="text-slate-400">پنل مدیریت</Link>

            <span className="text-slate-300">/</span>

            {prevPage && 
             <>
              <Link href={href} className="text-slate-400 font-medium">{prevPage}</Link>
              <span className="text-slate-300">/</span>
             </>
            }
          

            <span className="text-[#7C3AED] font-medium">{activePage}</span>
          </div>
        
      </div>
    </div>
  );
}
