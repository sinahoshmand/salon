"use client";

import Link from "next/link";
import menus from "@/src/data/menu" 
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import CollapsedMenu from "./CollapsedMenu";
import { useState } from "react";
import Image from "next/image";
 

export default function SideBar() {

  const collapsed = useSelector((state : RootState) => state.sidebar.collapsed)

  const [openCollapse , setOpenCollapse] = useState<number|null>(null)
    
  return (
    <div onMouseLeave={() => setOpenCollapse(null)} 
     className={`h-screen transition-all duration-300 ${collapsed ? 'w-[80px]' : 'w-[250px]'}`}>  
    <div className="bg-[#7C3AED] h-full max-h-full">
      <div className="w-full flex justify-center items-center">
        <Link href={"/admin/dashboard"}>
           <Image src={'/images/logo.png'} width={100} height={70} alt="sinahoushmand"/>
        </Link>
      </div>
      <ul className="  flex flex-col px-4 gap-3 relative">
           {menus.map((menu) => (
              <div key={menu.id} className="relative" >
                <MenuItem  item={menu} is_dropdown={menu.has_sub} setOpen={setOpenCollapse} open={openCollapse}/>
                {collapsed &&<CollapsedMenu   menu={menu} setOpen={setOpenCollapse} open={openCollapse}/>}
              </div>
           ))}
      </ul>
    </div>
    </div>
  );
}
