import Image from "next/image";
import { BsInstagram, BsTiktok, BsWhatsapp, BsYoutube } from "react-icons/bs";

type Item = {
  name : string,
  id : number|string,
  image : string,
  job_title : string,
  social_media : {
    tiktok:string,
    whatsapp: string,
    instagram: string
  }
}

export default function StylistCard({item} : {item : Item}){
    return(
        <div className="bg-[var(--surface)] border flex flex-col group scale-100 hover:scale-104 
        transition-all duration-300 items-center px-3 py-5 
            border-[var(--border)] rounded-[12px] shadow-sm">
           <Image unoptimized src={item.image} width={100} height={100} 
              className="w-[80px] object-cover h-[80px] rounded-full" alt="stylist"/>
              <h3 className="text-[var(--text)] mt-3 text-[15px] group-hover:text-[var(--primary)] font-bold">{item.name}</h3>
              <p className="text-[var(--secondary-text)] mt-1 
              group-hover:text-[var(--rose-gold)] text-[11px] font-bold">{item.job_title}</p>
              <div className="flex flex-row gap-1 mt-3 ">
            <a
              href={item.social_media.instagram}
              className="border-2 border-[var(--border)] group/social p-1.5 rounded-full 
              hover:bg-[var(--primary-hover)] transition-all duration-300"
            >
              <BsInstagram
                size={13}
                className="text-[var(--rose-gold)]  group-hover/social:text-[var(--bg)]"
              />
            </a>
            <a
              href={item.social_media.whatsapp}
              className="border-2 border-[var(--border)]  group/social p-1.5 rounded-full 
              hover:bg-[var(--primary-hover)] transition-all duration-300"
            >
              <BsWhatsapp
                size={13}
                className="text-[var(--rose-gold)] group-hover/social:text-[var(--bg)]"
              />
            </a>
            <a
              href={item.social_media.tiktok}
              className="border-2 border-[var(--border)]  group/social p-1.5 rounded-full 
              hover:bg-[var(--primary-hover)] transition-all duration-300"
            >
              <BsTiktok
                size={13}
                className="text-[var(--rose-gold)] group-hover/social:text-[var(--bg)]"
              />
            </a>
           
          </div>
        </div>
    )
}