import Form from "@/src/components/auth/register/Form";
import { title } from "motion/react-client";
import { notFound } from "next/navigation";
import { FaUserPlus } from "react-icons/fa";

type Props = {
  params: Promise<{ slug: "salon-owner" | "customer" }>;
};


export async function generateMetadata({ params } : Props) {
    const { slug } = await params;
  
    return {
      title: slug === "salon-owner" ? "salon owner sign up" : "customer sign up",
    };
  }

export function generateStaticParams() {
  return [{ slug: "salon-owner" }, { slug: "customer" }];
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  if (slug !== "salon-owner" && slug !== "customer") {
    notFound();
  }

  return (
    <section className=" bg-[#F7F5F6] ">
      <div className="flex flex-flex w-full ">
        <div className="min-h-screen w-[850px] bg-login">
        
        </div>

        <div className="w-full flex flex-row justify-start  items-center">
          <div className="bg-[var(--surface)] w-[550px]    flex mt-10 mb-10 flex-col items-center rounded-[20px]   shadow-md p-8 mt-10">
            <div className="p-6 bg-[var(--primary)]/20 max-w-max rounded-full">
              <FaUserPlus color="var(--primary)" size={40} />
            </div>
            <h1 className="text-[var(--text)] font-bold text-[28px] mt-5">
               Create Your
              <span className="text-[var(--primary)]">{slug === "salon-owner" ? ' Salon Owner Account' : ' Customer Account'}</span>
            </h1>
            <p className="text-[var(--secondary-text)] mt-2 text-[14px]">
               Lets get you started on your journey
            </p>
            <Form slug={slug}/>
          </div>
        </div>
      </div>
    </section>
  )
}
