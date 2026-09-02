export default function SalonLoading() {
    return (
      <>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col mt-6 animate-pulse"
          >
            <div
              className="
                bg-[var(--surface)]
                border border-[var(--border)]
                rounded-[10px]
                px-2 py-4
              "
            >
              <div className="grid grid-cols-12 gap-3">
  
                {/* Image */}
                <div className="col-span-4">
                  <div
                    className="
                      w-full
                      h-[210px]
                      rounded-[10px]
                      bg-[var(--border)]
                    "
                  />
                </div>
  
                {/* Content */}
                <div className="col-span-5">
                  <div className="flex flex-col">
  
                    {/* Title */}
                    <div className="h-7 w-3/4 rounded-md bg-[var(--border)]" />
  
                    {/* Location */}
                    <div className="h-4 w-1/2 rounded-md bg-[var(--border)] mt-3" />
  
                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-4">
                      <div className="h-4 w-8 rounded bg-[var(--border)]" />
                      <div className="h-4 w-20 rounded bg-[var(--border)]" />
                      <div className="h-4 w-24 rounded bg-[var(--border)]" />
                    </div>
  
                    {/* Address */}
                    <div className="h-4 w-4/5 rounded-md bg-[var(--border)] mt-4" />
  
                    {/* Categories */}
                    <div className="flex gap-2 mt-4">
                      <div className="h-7 w-20 rounded-[8px] bg-[var(--border)]" />
                      <div className="h-7 w-24 rounded-[8px] bg-[var(--border)]" />
                      <div className="h-7 w-16 rounded-[8px] bg-[var(--border)]" />
                    </div>
  
                    {/* Features */}
                    <div className="flex gap-5 mt-5">
                      <div className="h-4 w-20 rounded bg-[var(--border)]" />
                      <div className="h-4 w-24 rounded bg-[var(--border)]" />
                    </div>
  
                  </div>
                </div>
  
                {/* Price / Button */}
                <div className="col-span-3 flex flex-col items-end mt-5 mr-5">
                  <div className="h-4 w-24 rounded bg-[var(--border)] mt-3" />
  
                  <div className="h-8 w-20 rounded-md bg-[var(--border)] mt-2" />
  
                  <div
                    className="
                      w-full
                      h-12
                      rounded-[10px]
                      bg-[var(--border)]
                      mt-5
                    "
                  />
                </div>
  
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }