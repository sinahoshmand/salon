"use client"

interface Head {
    name : string
    id : number
}

type Props = {
    item : Head
}

export default function TableHead({item} : Props) {
  return (
    
      <th className="text-right py-4 px-5 text-sm font-semibold text-slate-700">
         {item.name}
      </th>
   
  );
}
