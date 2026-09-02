import AboutSalon from "@/src/components/main/SingleSalon/AboutSalon";
import Gallery from "@/src/components/main/SingleSalon/Gallery";
import Header from "@/src/components/main/SingleSalon/Header";
import Info from "@/src/components/main/SingleSalon/Info";
import Reviews from "@/src/components/main/SingleSalon/Reviews";
import Service from "@/src/components/main/SingleSalon/Service";
import Stylist from "@/src/components/main/SingleSalon/Stylist";
import BreadCrumb from "@/src/components/main/ui/BreadCrumb";
import getSalons from "@/src/lib/api/salons";
import getSalon from "@/src/lib/api/single-salon/salon";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

interface Salon {
  slug : string
}

export async function generateStaticParams() {
  const salons = await getSalons()
  return salons?.data?.map((salon : Salon) => ({
    slug : salon.slug,
  }))
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const salon = await getSalon({slug});
 
  return {
    title: salon?.data.name,
    description: salon?.data.small_desc,
    openGraph: {
      title: salon?.data.name,
      description: salon?.data.small_desc,
      images: [salon?.data.image],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  
  //Api
  const salon = await getSalon({slug})

  if(!salon){
    notFound()
  }
  return (
    <div className="container-c  mt-30 mb-10">
      <BreadCrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Salons", href: "/salons" },
          { label: salon?.data?.name },
        ]}
      />
      <Header data={salon?.data}/>
      <Service data={salon?.data}/>
      <AboutSalon data={salon?.data}/>
      <Stylist data={salon?.data}/>
      <Gallery/>
      <Reviews data={salon?.data}/>
      <Info/>
    </div>
  );
}
