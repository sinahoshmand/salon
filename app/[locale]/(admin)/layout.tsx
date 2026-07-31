import { ReactNode } from "react";
import "./admin.css";
import SideBar from "@/src/components/admin/ui/SideBar";
import Header from "@/src/components/admin/ui/Header";
import Footer from "@/src/components/admin/ui/Footer";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
 

type LayoutProps = {
  children: ReactNode;
};



// export async function generateMetadata() {
//   const setting = await getSetting();
//   return {
//     icons: {
//       icon: setting?.data?.logo,
//       shortcut: setting?.data?.logo,
//       apple: setting?.data?.logo,
//     },
//     robots: {
//       index: false,
//       follow: false,
//       nocache: true,
//       googleBot: {
//         index: false,
//         follow: false,
//         noimageindex: true,
//       },
//     },
//   };
// }

export default async function Layout({ children }: LayoutProps) {
  const session = await getServerSession(authOptions);

//   if (!session) redirect("/login");

  return (
    <main className=" relative  bg-[#F3F3F9]">
      <div className="flex h-screen relative">
        <SideBar />
        <div className="flex-1 min-w-0 h-screen flex flex-col overflow-hidden">
          <Header />
          <div className="flex-1 overflow-y-auto custom-scroll ">
            {children}
          </div>
          <div className="mt-6">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
