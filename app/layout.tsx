import "./globals.css";
import MainProvider from "@/src/providers/MainProvider";
 

 

export async function generateMetadata() {
  return {
    icons: {
      icon: "/images/logo3.png",
      shortcut: "/images/logo3.png",
      apple: "/images/logo3.png",
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
  return <MainProvider>{children}</MainProvider>;
}
