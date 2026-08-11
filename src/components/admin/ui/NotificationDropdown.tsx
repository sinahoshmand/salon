"use client"
import { useLocale } from "next-intl";
import { useState } from "react";
import { BiBell } from "react-icons/bi";

export default function NotificationDropdown() {

    const [open , setOpen] = useState<boolean>(false);
    const locale = useLocale();

  return (
    <div
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
    >
      <button className={`hover:bg-[#F3F3F9]  rounded-full p-2 ${open ? 'bg-[#F3F3F9]' : ''}`}>
        <BiBell size={20} />
      </button>
      <div 
     
      className={`absolute ${locale === "en" ? 'right-6' : 'left-6'} top-12 w-[380px] overflow-hidden rounded-2xl`+
        `borderborder-slate-200 ${open ? 'visible' : 'hidden'} bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] z-50`}>
      
        <div className="flex items-center justify-between border-b border-slate-100 p-4">
          <div>
            <h3 className="font-semibold text-slate-800">اعلان‌ها</h3>
            <p className="text-xs text-slate-500">۳ اعلان خوانده نشده</p>
          </div>

          <button className="text-xs font-medium text-[#7C3AED] hover:text-[#8B5CF6]">
            مشاهده همه
          </button>
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          <button className="w-full border-b border-slate-100 p-4 text-right transition-all hover:bg-slate-50">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                ✅
              </div>

              <div>
                <h4 className="text-sm font-medium text-slate-800">
                  سفارش جدید ثبت شد
                </h4>

                <p className="mt-1 text-xs text-slate-500">
                  سفارش شماره #1245 با موفقیت ثبت گردید.
                </p>

                <span className="mt-2 block text-[11px] text-slate-400">
                  ۲ دقیقه پیش
                </span>
              </div>
            </div>
          </button>

          <button className="w-full border-b border-slate-100 p-4 text-right transition-all hover:bg-slate-50">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                👤
              </div>

              <div>
                <h4 className="text-sm font-medium text-slate-800">
                  کاربر جدید ثبت نام کرد
                </h4>

                <p className="mt-1 text-xs text-slate-500">
                  علی رضایی عضو سایت شد.
                </p>

                <span className="mt-2 block text-[11px] text-slate-400">
                  ۱۵ دقیقه پیش
                </span>
              </div>
            </div>
          </button>

          <button className="w-full p-4 text-right transition-all hover:bg-slate-50">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                🔔
              </div>

              <div>
                <h4 className="text-sm font-medium text-slate-800">
                  بروزرسانی سیستم
                </h4>

                <p className="mt-1 text-xs text-slate-500">
                  نسخه جدید پنل با موفقیت نصب شد.
                </p>

                <span className="mt-2 block text-[11px] text-slate-400">
                  ۱ ساعت پیش
                </span>
              </div>
            </div>
          </button>
          
        </div>

        <div className="border-t border-slate-100 p-3">
          <button className="w-full rounded-xl bg-[#7C3AED] py-2.5 text-sm font-medium text-white transition-all hover:bg-[#8B5CF6]">
            مشاهده همه اعلان‌ها
          </button>
        </div>
      </div>
    </div>
  );
}
