 
import {  IconType } from "react-icons";
import { BiSearch } from "react-icons/bi";

type Data = {
    icon : IconType,
    number : string|number,
    title : string,
    desc : string
}

type Props = {
  data : Data
}

export default function Item({data} : Props) {

    const Icon = data.icon;

  return (
    <div className="flex-col flex items-center">
     
      <div
        className="flex items-center w-[100px] shadow-md border border-[var(--border)] h-[100px] 
          justify-center bg-[var(--surface)] p-4 rounded-full"
      >
        <Icon color="var(--primary)" size={40} />
      </div>
      <div
        className="flex items-center w-[30px] h-[30px] mt-10
        justify-center bg-[var(--primary)] p-4 rounded-full"
      >
        <span className="text-[var(--bg)] text-[12px]">{data.number}</span>
      </div>
      <h3 className="text-[var(--text)] font-bold text-center text-[17px] mt-4">
         {data.title}
      </h3>
      <p className="text-[var(--secondary-text)] text-[13px] mt-1.5 text-center">
      {data.desc}
      </p>
    </div>
  );
}
