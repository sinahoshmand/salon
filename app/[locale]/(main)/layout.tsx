import MainLayout from "@/src/components/main/ui/MainLayout";
import { setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import "./main.css";
import { getMenus } from "@/src/lib/api/menus";
import NextTopLoader from "nextjs-toploader";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  //api
  const menus = await getMenus(locale);

  return (
       <MainLayout menus={menus?.data}>
           <NextTopLoader color="#C97B8B" height={4} showSpinner={false} />
           {children}
       </MainLayout>
  ) 
}
