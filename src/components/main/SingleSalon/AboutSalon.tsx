"use client";

import { BsStars } from "react-icons/bs";

export default function AboutSalon() {
  return (
    <section
     
      className="mt-13 container-c about-banner2  border shadow-sm border-[var(--border)] rounded-[13px]"
    >
      <div className="grid gap-6.5 grid-cols-12 px-8 py-8 relative">
        <div className="col-span-5">
          <p className="text-[12px] font-bold text-[var(--primary)] items-start flex gap-1.5">
          <BsStars color="var(--primary)" size={11}/>
             ABOUT OUR SALON
          <BsStars color="var(--primary)" size={11}/>
          </p>
          <h2 className="text-[var(--text)] font-bold text-[27px] mt-3">
            About Luxe Beauty Studio
          </h2>
          <div className="h-1 w-[70px] mt-3 bg-[var(--primary)]"></div>
          <p className="  max-w-max mt-3 text-[var(--text)] text-[14px] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
            purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed
            euismod nisi porta lorem mollis Morbi tristique senectus et netus
            Mattis pellentesque id nibh tortor id aliquet lectus proin Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum Ullamcorper
            velit sed ullamcorper morbi tincidunt ornare massa eget Dictum
            varius duis at consectetur lorem Nisi vitae suscipit tellus mauris a
            diam maecenas sed enim
          </p>
        </div>
        <div className="col-span-7">
  <div className="relative flex items-center overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--card)] shadow-lg group">

    <video
      className="w-full h-[420px] object-cover"
      controls
      poster="/images/salon.jpg"
    >
      <source src="/videos/salon.mp4" type="video/mp4" />
    </video>

    {/* Top Badge */}
    <div className="absolute top-5 left-5">
      <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[13px] font-medium shadow">
        ✨ Luxury Beauty Experience
      </span>
    </div>

    {/* Bottom Gradient */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
 

  </div>
</div>
      </div>
    </section>
  );
}
