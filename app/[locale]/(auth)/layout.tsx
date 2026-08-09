import { Link } from "@/src/i18n/navigation";
import "./style.css";
import { setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import Image from "next/image";

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
    <main className="bg-[var(--bg)]  min-h-screen">
      
      <div className="flex flex-row">
        <div className="min-h-screen w-[800px] rounded-r-[50px] relative bg-register">
        
          <Link
            href="/"
            className="z-40 flex items-center justify-center "
          >
            <Image
              unoptimized
              src="/images/logo3.png"
              width={190}
              height={50}
              alt="logo"
              className="w-full h-[130px] object-contain mt-2"
            />
          </Link>
          <div className="absolute inset-0 z-30 bg-[var(--bg)]/30 pointer-events-none"></div>
        </div>
        <div className="flex flex-col items-center w-full">{children}</div>
      </div>
    </main>
  );
}
