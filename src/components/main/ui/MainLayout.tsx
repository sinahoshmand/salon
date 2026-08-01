"use client";
import Footer from "@/src/components/main/ui/Footer";
import Header from "@/src/components/main/ui/Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <main className="bg-[var(--bg)]  min-h-screen">
      <Header />
      {children}
      <div className="h-1 w-full bg-[var(--border)]"></div>
      <Footer />
    </main>
  );
}
