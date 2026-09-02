"use client";

interface Link {
  url: string,
  link: string,
  label: string,
  active: boolean,
  page : number|null
}

interface Meta {
  current_page: number,
  from: number,
  last_page: number,
  path: string,
  per_page: number,
  to: number,
  total: number,
  links: Link[] 
}

type Props = {
  meta: Meta,
  setPage: React.Dispatch<React.SetStateAction<number | null>>,
  page: number | null,
};

export default function Pagination({ meta, page, setPage }: Props) {
  return (
    <>
   {meta.last_page !== 1 && <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
      <p className="text-sm text-slate-500">
        نمایش {meta.to} تا {meta.total} از {meta.per_page}{" "}
      </p>

      <div className="flex items-center gap-1">
        <button
          disabled={meta.current_page === 1}
          onClick={() => setPage(meta.current_page - 1)}
          className={`px-4  text-[12px] py-2 rounded-xl border border-slate-200 
             ${meta.current_page === 1 ? " bg-slate-300 text-slate-500 cursor-not-allowed" : "hover:bg-slate-50"}
             transition-all`}
        >
          قبلی
        </button>

        {meta?.links.map((link, index) => (
          <div key={index}>
            {link.label !== "&laquo; Previous" &&
              link.label !== "Next &raquo;" && (
               <>
                 {link.label === "..." ? (

                  <span>
                     ...
                  </span>


                 ):(

                  <button
                  disabled={link.page === page}
                  key={index}
                  onClick={() => setPage(Number(link.page))}
                  className={`w-8.5 h-8.5 flex items-center justify-center text-[12px] rounded-xl transition-all
                      ${
                        link.page === page
                          ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                          : "bg-[#405189] text-white hover:bg-[#405189]/50"
                      }
                    `}
                >
                  {link.label}
                </button>

                 )}
               </>
              )}
          </div>
        ))}

        <button
          disabled={meta.last_page === page}
          onClick={() => setPage(meta.current_page + 1)}
          className={`px-4 py-2 rounded-xl text-[12px] border border-slate-200 
             ${meta.last_page === page ? " bg-slate-300 text-slate-500 cursor-not-allowed" : "hover:bg-slate-50"}
             transition-all`}
        >
          بعدی
        </button>
      </div>
    </div>}
    </>
  );
}
