import { Link } from "@/src/i18n/navigation";
import "./style.css";
import { setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import Image from "next/image";
import TopNav from "@/src/components/auth/login/TopNav";

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
    <main className="min-h-screen">
        <TopNav/>
        {children}
    </main>
  );
}
