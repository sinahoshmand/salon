"use client"

import { formatDollar } from "@/src/helper/price";
import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import { FaClock } from "react-icons/fa";

interface Service {
    id: number;
    title: string;
    image: string;
    price: number;
    time: string;
  }


type Props = {
    item : Service
}

export default function ServiceCard({item} : Props){
    return(
        <Link href={'#'} className="bg-[var(--surface)] 
         flex flex-col rounded-[10px] transition-all 
         scale-100 hover:scale-103 duration-300  group  hover:border-[var(--primary)]
         border border-[var(--border)] shadow-md">
             <Image src={item.image} width={800} height={600} 
              className="rounded-t-[10px] w-full h-[120px] object-cover" alt=".."/>
             <div className="py-3 px-3 flex flex-col gap-1.5">
                <h2 className="text-[var(--text)] text-[14px] 
                 transition-all duration-300
                group-hover:text-[var(--primary)]  font-bold">{item.title}</h2>
                <p className="text-[var(--secondary-text)]/80 text-[12px] items-center flex gap-1">
                    <FaClock  className="text-[var(--primary)]/80" size={11}/>
                    {item.time}</p>
                <strong className="text-[var(--primary)] text-[15px] ">{formatDollar(item.price)}</strong>
             </div>
        </Link>
    )
}