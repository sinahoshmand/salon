"use client"
export default function LatestFilter(){
    return(
        <div className="flex items-center flex-row gap-3">
          <span className="text-[14px] text-[var(--secondary-text)]">
            Sort By:
          </span>
          <div className="relative w-[300px]">
            <select
              className="
      w-full
      appearance-none
      rounded-xl
      border border-[var(--border)]
      bg-[var(--surface)]
      px-4
      py-3
      pr-10
      text-[15px]
      text-[var(--text)]
      outline-none
      transition-all
      duration-200
      hover:border-[var(--primary)]/50
      focus:border-[var(--primary)]
      focus:ring-4
      focus:ring-[var(--primary)]/10
      cursor-pointer
    "
            >
              <option value="latest">Latest</option>
              <option value="popular">Popular</option>
            </select>

            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--secondary-text)]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
    )
}