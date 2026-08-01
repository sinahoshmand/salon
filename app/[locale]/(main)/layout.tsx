import MainLayout from "@/src/components/main/ui/MainLayout";
import { setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import "./main.css";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
       <MainLayout>
           {children}
       </MainLayout>
  ) 
}
