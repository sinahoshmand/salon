import benefits from "@/src/data/benefits";
 

export default function Benefit() {
  return (
    <section className="container-c grid grid-cols-2 sm:grid-cols-6 gap-4 -mt-10">
      {benefits.map((benefit) => {
        const Icon = benefit.icon;
        return (
          <div
            key={benefit.id}
            className={` opacity-95
          flex flex-col transition-all duration-300 justify-center items-center
          px-5 py-5  
          shadow-[0_15px_80px_rgba(255,255,255,.15),0_25px_80px_rgba(0,0,0,.12)]
         hover:border-2   relative   overflow-hidden   border border-white/30
         hover:border-[var(--primary)] rounded-[15px]  bg-[var(--bg)]/90  backdrop-blur-[30px]`}
          >
            <div className="p-5 bg-[var(--primary)]/10   max-w-max rounded-full">
              <Icon color="var(--primary)" size={27} />
            </div>
            <p className="text-[15px] text-[var(--text)] font-semibold mb-1 mt-2 text-center">
              {benefit.title}
            </p>
            <p className="text-[13px] text-[var(--secondary-text)] font-semibold mb-1 mt-2 text-center">
              {benefit.small}
            </p>
          </div>
        );
      })}
    </section>
  );
}
