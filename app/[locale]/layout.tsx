import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const myFont = localFont({
  src: "../../src/fonts/woff/iranyekanwebmediumfanum.woff",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html dir={locale === "en" ? 'ltr' : 'rtl'} lang={locale === "en" ? 'en' : 'fa'}>
      <body className={`${locale === "en" ? inter.className : myFont.className}
       h-full antialiased custom-scroll`}>
        <NextTopLoader color="#C97B8B" height={4} showSpinner={false} />
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
