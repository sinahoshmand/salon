"use client";
import Footer from "@/src/components/main/ui/Footer";
 
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <main className="bg-[var(--bg)]  min-h-screen ">
      {children}
      <div className="h-1 w-full bg-[var(--border)]"></div>
      <Footer />
    </main>
  );
}
