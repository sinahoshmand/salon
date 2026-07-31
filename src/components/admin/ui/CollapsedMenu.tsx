"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { BsArrowDown } from "react-icons/bs";
import { IoArrowDownCircle } from "react-icons/io5";

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
}

type Props = {
  menu: Menu;
  open: number | null,
  setOpen : React.Dispatch<React.SetStateAction<number|null>>
};

export default function CollapsedMenu({ menu, open , setOpen }: Props) {
  return (
    <div
      onMouseLeave={() => setOpen(null)}
      className={`absolute w-[180px] ${open === menu.id ? "visible" : "hidden"} px-5 
         py-3 mb-4 right-15 
         top-0 z-50 bg-[#7C3AED]`}
    >
      <ul className="flex flex-col gap-4">
        <div className="flex w-full items-center   justify-between">
          <Link className="text-[14px] text-[#ffff]" href={menu.href}>
            {menu.name}
          </Link>
          {menu.has_sub && <IoArrowDownCircle size={12} color="#ffff" />}
        </div>
        {menu.has_sub && (
          <div className="flex w-full flex-col px-3 gap-4">
            {menu.child.map((item) => (
              <Link
                className="text-[12px] text-[#ffff]/80 hover:text-[#ffff]"
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
}
