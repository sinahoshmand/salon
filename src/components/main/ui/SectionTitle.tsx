"use client"
import { Link } from "@/src/i18n/navigation";
import { BsArrowRight, BsStars } from "react-icons/bs";
 
type Props = {
    title : string,
    link_name? : string,
    href? : string,
    center? : boolean
}

export default function SectionTitle({title , link_name , href="#" , center=false} : Props){
    return(
        <div className={`flex  justify-between  ${center ? 'justify-center' : ''}  flex-row`}>
            <div className="flex gap-3 items-center">
                <BsStars color="var(--champagne-gold)" size={27}/>
                  <h2 className="flex font-bold gap-2 items-center 
                  text-[var(--secondary-text)] text-[21px]">{title}</h2>
                 
            </div>
            {link_name && <Link href={href} className="flex   gap-2 
            items-center text-[var(--primary)] text-[14px]">
               {link_name}
               <BsArrowRight   color="text-[var(--primary)]" size={15}/>
            </Link>}
        </div>
    )
}