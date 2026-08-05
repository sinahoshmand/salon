"use client";
import Footer from "@/src/components/main/ui/Footer";
 
import { ReactNode, Suspense } from "react";
import Menu from "./Menu";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <main className="bg-[var(--bg)]  min-h-screen overflow-hidden">
       <Suspense>
          <Menu/>
       </Suspense>
      {children}
      <div className="h-[1px] w-full bg-[var(--border)]"></div>
      <Footer />
    </main>
  );
}
