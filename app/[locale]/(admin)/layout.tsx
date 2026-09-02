import { ReactNode } from "react";
import "./admin.css";
import SideBar from "@/src/components/admin/ui/SideBar";
import Header from "@/src/components/admin/ui/Header";
import Footer from "@/src/components/admin/ui/Footer";
import { notFound, redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import NextTopLoader from "nextjs-toploader";
 

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
   if (!session) redirect("/login");
   if(session.role !== "super_admin") notFound()

  return (
    <main className=" relative  bg-[#F3F3F9]">
       <NextTopLoader color="#405189" height={4} showSpinner={false} /> 
      <div className="flex h-screen relative">
        <SideBar />
        <div className="flex-1 min-w-0 h-screen flex flex-col overflow-hidden">
          <Header />
          <div className="flex-1 overflow-y-auto custom-scroll pb-6">
            {children}
          </div>
            <Footer />
        </div>
      </div>
    </main>
  );
}
