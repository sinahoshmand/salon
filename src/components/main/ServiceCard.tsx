"use client";
import { image } from "@/src/helper/image";
import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import { FaFemale } from "react-icons/fa";




interface Item {
  id: string | number;
  image: string;
  icon: string;
  name: string;
  slug: string;
  
}

type Prop = {
  item: Item;
};

export default function ServiceCard({item} : Prop) {
  return (
    <div className="flex flex-col items-center">
      <Link
        href={`service/${item.slug}`}
        className="bg-[var(--primary)]/30 hover:border-[var(--primary)] flex scale-100 transition-all 
        duration-300 hover:scale-110 flex-col  shadow-sm
            items-center justify-center gap-2 py-5 px-4 border-2 w-[90px] h-[90px] border-[var(--border)] rounded-full"
      >
        <Image  unoptimized alt={item.name} width={45} height={45} 
        src={image(item.icon)} className="w-[45px] h-[45px]"/>
      </Link>

      <p className="mt-3  text-[15px]  text-[var(--text)]">{item.name}</p>
    </div>
  );
}
