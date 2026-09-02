"use client";
import Footer from "@/src/components/main/ui/Footer";
import { ReactNode, Suspense } from "react";
import Menu from "./Menu";
import AiChat from "../ai/Ai";

interface MenuData {
  id: string,
   name : string,
   href : string,
   children : []
}

type Props = {
  children: ReactNode,
  menus : MenuData[]
};

export default function MainLayout({ children , menus }: Props) {
  return (
    <main className="bg-[var(--bg)]  min-h-screen overflow-hidden">
       <Suspense>
         <Menu data={menus}/>
       </Suspense>
      {children}
      <div className="h-[1px] w-full bg-[var(--border)]"></div>
      <Footer />
      <AiChat/>
    </main>
  );
}
