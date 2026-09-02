"use client";
import { Link, usePathname, useRouter } from "@/src/i18n/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowCircleDown, FaGlobe, FaSearch } from "react-icons/fa";
import { useLocale } from "next-intl";
import { CgArrowDown } from "react-icons/cg";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

interface MenuData {
  id: string,
  name : string,
  href : string,
  children : []
}

type Prop = {
  data : MenuData[]
}


export default function Menu({data} : Prop) {
  const { data : session ,  status} = useSession();
  const[open ,  setOpen] = useState<Boolean>(false)
  const locale = useLocale();
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const changeLang = (newLocale: string) => {
    const query = Object.fromEntries(searchParams.entries());
  
    router.replace(
      {
        pathname,
        query,
      },
      {
        locale: newLocale,
      }
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <header
      className={`flex z-50 items-center 
        ${
          scrollY > 100
            ? "fixed inset-x-0 top-0 w-full bg-white/80 backdrop-blur-xl shadow-lg px-6"
            : " absolute container-c bg-transparent top-0 right-0  left-0"
        }
          justify-between py-5
           transition-all duration-300 ease-in-out`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="shrink-0 flex items-center justify-center h-[50px]"
      >
        <Image
          unoptimized
          src="/images/logo3.png"
          width={190}
          height={50}
          alt="logo"
          className="w-full h-[130px] object-contain mt-2"
        />
      </Link>

      {/* Menu */}
      <nav className="hidden lg:flex items-center">
        <ul className="flex items-center gap-10">
          {data?.map((menu) => {
            const active = pathname === menu.href;
            return (
              <li key={menu.id} className="relative">
                <Link
                  href={menu.href}
                  className={`
                    text-[15px]  font-bold transition-all duration-300
                    ${
                      active
                        ? "text-[var(--primary)]"
                        : "text-[var(--text)] hover:text-[var(--primary)]"
                    }
                  `}
                >
                  {menu.name}
                </Link>

                {active && (
                  <span
                    className="
                    absolute -bottom-3 left-1/2 -translate-x-1/2
                    w-10 h-[3px]
                    rounded-full
                    bg-[var(--primary)]
                  "
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-2">
      

        <div className="relative">
          {/* <button
            onClick={() => {
               setOpen((prev) => !prev)
            }}
            className="
            px-4 py-2.5
            rounded-lg
            bg-[var(--bg)]
            border
            border-[var(--border)]
            text-[var(--text)]
            text-[14px]
            font-medium
            transition gap-2
            flex items-center
            hover:opacity-90
          "
          >
            <FaGlobe color="var(--text)" size={15} />
            {locale === "en" ? "English" : "فارسی"}
            {open ? (<BiChevronDown color="var(--text)" size={18} />) : (<BiChevronUp color="var(--text)" size={18} />)}
          </button> */}
          {open &&
          <div className="absolute top-12 left-0 z-20 w-44 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-2 shadow-lg">
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => changeLang('en')}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200  hover:bg-[var(--primary)]/10 ${
                    locale === "en"
                      ? "bg-[var(--primary)] text-white"
                      : "text-[var(--text)]"
                  }`}
                >
                  <span>English</span>
                  <span className="text-xs opacity-70">🇺🇸</span>
                </button>
              </li>

              <li>
                <button
                 onClick={() => changeLang('fa')}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-[var(--primary)]/10 ${
                    locale === "fa"
                      ? "bg-[var(--primary)] text-white"
                      : "text-[var(--text)]"
                  }`}
                >
                  <span>فارسی</span>
                  <span className="text-xs opacity-70">🇮🇷</span>
                </button>
              </li>
            </ul>
          </div> }
        </div>

      {status === "authenticated" ? (
         <div>
            {session.role === "super_admin" && 
             <Link href={'/admin'}
        
             className="
               px-6 py-2.5
               rounded-lg
               bg-[var(--primary)]
               text-white
               font-medium
               transition
               hover:opacity-90
             "
           >
             Admin Dashboard
           </Link>
            }
              {session.role === "salon_owner" && 
             <Link href={'#'}
        
             className="
               px-6 py-2.5
               rounded-lg
               bg-[var(--primary)]
               text-white
               font-medium
               transition
               hover:opacity-90
             "
           >
               Salon Panel
           </Link>
            }
              {session.role === "costumer" && 
             <Link href={'/user/dashboard'}
        
             className="
               px-6 py-2.5
               rounded-lg
               bg-[var(--primary)]
               text-white
               font-medium
               transition
               hover:opacity-90
             "
           >
              Costumer Panel
           </Link>
            }
          </div>
      ) : (

      <>
      <Link
           href={'/login'}
          className="
            px-6 py-2.5
            rounded-lg
            border border-[var(--primary)]
            bg-[var(--bg)]
            text-[var(--primary)]
            font-medium
            transition
            hover:opacity-80
          "
        >
          Login
        </Link>

        <Link href={'/register'}
        
          className="
            px-6 py-2.5
            rounded-lg
            bg-[var(--primary)]
            text-white
            font-medium
            transition
            hover:opacity-90
          "
        >
          Register
        </Link>
      
      </>

      )}
        
      </div>
    </header>
  );
}
