 
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import MainProvider from "@/src/providers/MainProvider";
import NextTopLoader from 'nextjs-toploader';
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const myFont = localFont({
  src: "../src/fonts/woff/iranyekanwebmediumfanum.woff",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


export async function generateMetadata() {
  return {
    icons: {
      icon: '/images/logo3.png',
      shortcut: '/images/logo3.png',
      apple:'/images/logo3.png',
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      dir="ltr"
      lang="en"
      className={`${playfair.className} h-full antialiased`}
    >
      <body>
        <NextTopLoader color="#C97B8B" height={4} showSpinner={false} /> 
         <MainProvider>
            {children}
         </MainProvider>
      </body>
    </html>
  );
}
