"use client"
import Link from "next/link";
import { FiPlus, FiSearch } from "react-icons/fi";

type Props = {
    title : string,
    meta? : string|null,
    href:string,
    setSearch : React.Dispatch<React.SetStateAction<string|null>>
}

export  default function PageHeader({title , meta , setSearch , href} : Props){
    return(
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

        <div>
            <h2 className="text-xl font-bold text-slate-800">
                {title}
            </h2>

            <p className="text-sm text-slate-500 mt-1">
                {meta}
            </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">

            <div className="relative">
                <FiSearch
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder={`جستجوی ${title}...`}
                    className="w-full sm:w-72 pr-10 pl-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-[#7C3AED] transition-all"
                />
            </div>

            <Link href={href} className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#7C3AED] text-white hover:bg-[#8B5CF6] transition-all">
                <FiPlus size={18} />
                <span>افزودن</span>
            </Link>

            

        </div>

    </div>

    )
}