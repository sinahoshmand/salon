import UserDashboardGuard from "@/src/guard/userDashboardGuard";
import { setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

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
    <UserDashboardGuard>
      <main className="bg-[var(--bg)]  min-h-screen">{children}</main>
    </UserDashboardGuard>
  );
}
