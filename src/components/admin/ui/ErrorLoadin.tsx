"use client";

import Card from "./Card";
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";

type Props = {
  message?: string;
  onRetry?: () => void;
};

export default function ErrorLoading({
  message = "دریافت اطلاعات با مشکل مواجه شد",
  onRetry,
}: Props) {
  return (
    <Card>
      <div className="min-h-[320px] w-full flex flex-col items-center justify-center text-center px-6">

        {/* Icon */}
        <div className="
          w-16 h-16
          rounded-2xl
          flex items-center justify-center
          bg-red-50
          border border-red-100
          mb-5
        ">
          <FiAlertTriangle
            size={28}
            className="text-red-500"
          />
        </div>

        {/* Title */}
        <h3 className="text-[17px] font-bold text-[var(--text)]">
          خطایی رخ داد
        </h3>

        {/* Message */}
        <p className="
          mt-2
          max-w-[380px]
          text-[14px]
          leading-6
          text-[var(--secondary-text)]
        ">
          {message}
        </p>

        {/* Retry */}
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="
              mt-6
              flex items-center gap-2
              rounded-xl
              px-5 py-2.5
              bg-[var(--primary)]
              text-white
              text-[13px]
              font-medium
              transition-all
              hover:opacity-90
              hover:-translate-y-0.5
              active:translate-y-0
              shadow-sm
            "
          >
            <FiRefreshCw size={15} />
            تلاش مجدد
          </button>
        )}
      </div>
    </Card>
  );
}