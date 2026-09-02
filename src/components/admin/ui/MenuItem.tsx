"use client";
 
import { useState } from "react";
import { IconType } from "react-icons";
import { BiDownArrowCircle, BiUpArrowCircle } from "react-icons/bi";
import Dropdown from "./DropDown";
 
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/src/i18n/navigation";

interface Child {
  id: number;
  name: string;
  href: string;
}

interface Menu {
  id: number;
  name: string;
  href: string;
  icon: IconType;
  has_sub: boolean;
  child: Child[];
  hrefs?  : string[]
}

type Props = {
  item: Menu;
  is_dropdown: boolean;
  setOpen : React.Dispatch<React.SetStateAction<number|null>>,
  open : number|null
};

export default function MenuItem({ item, is_dropdown = false , setOpen , open }: Props) {
  const t = useTranslations("adminMenu")
  const Icon = item.icon;
  const [reseve, setReseve] = useState<number | null>(null);
  const pathname: string = usePathname();

  const openDrowpdown = (id: number) => {
    setReseve((prev) => (prev === id ? null : id));
  };
  


  const collapsed = useSelector((state: RootState) => state.sidebar.collapsed);

  return (
    <section 
    className="relative"
    onMouseEnter={() => setOpen(item.id)}
    
    >
      {is_dropdown === true ? (
        <div 
       
        >
          <button
            onClick={() => {openDrowpdown(item.id)}}
            className={`flex w-full hover:bg-[#5066A0] transition-all duration-100
          ${reseve === item.id ? "bg-[#5066A0]/90" : ""}  
          ${collapsed ? "justify-center" : ""} rounded-[10px] 
           ${open === item.id && collapsed ? "bg-[#8B5CF6]/90" : ""}
          py-2.5 px-2  justify-between gap-3 items-center`}
          >
            <div className={`flex gap-3 items-center  `}>
              <Icon color="#ffff" size={24} />
              {!collapsed && (
                <span className="text-[#ffff] text-[14px]">{t(item.name)}</span>
              )}
            </div>
            {!collapsed && (
              <>
                {reseve === item.id ? (
                  <BiDownArrowCircle color="#ffff" size={18} />
                ) : (
                  <BiUpArrowCircle color="#ffff" size={18} />
                )}
              </>
            )}
          </button>
          {!collapsed &&<Dropdown
            childs={item.child}
            open={reseve === item.id ? true : false}
          />}
        </div>
      ) : (
        <Link
          href={item.href}
          className={`flex w-full hover:bg-[#5066A0] transition-all duration-100
           rounded-[10px] ${collapsed ? "justify-center" : ""}  
           ${open === item.id && collapsed ? "bg-[#5066A0]/90" : ""}
           ${item.hrefs?.some((href) => href === pathname)
          ? "bg-[#5066A0]/90" : ""} py-2.5 px-2 
            justify-between gap-3 items-center`}
        >
          <div className={`flex gap-3 items-center`}>
            <Icon color="#ffff" size={22} />
            {!collapsed && (
              <span className="text-[#ffff] text-[14px]">{t(item.name)}</span>
            )}
          </div>
        </Link>
      )}
    </section>
  );
}
