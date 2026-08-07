import { Link } from "@/src/i18n/navigation";
import { CgChevronRight } from "react-icons/cg";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function BreadCrumb({ items }: Props) {
  return (
    <nav className="flex items-center gap-2 text-[15px]">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={item.label} className="flex items-center gap-2">
            {isLast ? (
              <span className="font-bold text-[14px] text-[var(--primary)]">
                {item.label}
              </span>
            ) : (
              <>
                <Link
                  href={item.href ?? "#"}
                  className="font-bold  text-[14px] text-[var(--text)]/80 hover:text-[var(--primary)] transition-colors"
                >
                  {item.label}
                </Link>

                <CgChevronRight
                  size={15}
                  className="text-[var(--primary)]"
                />
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
}