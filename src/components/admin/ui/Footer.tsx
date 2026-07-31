export default function Footer() {
  return (
    <div className="w-full bg-[#FFFFFF] py-5 px-5 left-0">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-sm text-slate-500">
          © 2026 تمامی حقوق برای
          <span className="mx-1 font-semibold text-[#7C3AED]">Sina Panel</span>
          محفوظ است.
        </p>

        <div className="flex items-center gap-4 text-sm">
          <button className="text-slate-500 hover:text-[#7C3AED] transition-colors">
            مستندات
          </button>

          <button className="text-slate-500 hover:text-[#7C3AED] transition-colors">
            پشتیبانی
          </button>

          <button className="text-slate-500 hover:text-[#7C3AED] transition-colors">
            نسخه 1.0.0
          </button>
        </div>
      </div>
    </div>
  );
}
