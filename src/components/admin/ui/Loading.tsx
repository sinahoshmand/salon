"use client";

import { ClipLoader } from "react-spinners";
import Card from "./Card";

export default function Loading() {
  return (
    <Card>
      <div className="w-full">

        {/* Loading Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="h-6 w-32 rounded-lg bg-slate-200 animate-pulse" />
            <div className="h-4 w-48 rounded-lg bg-slate-100 animate-pulse mt-2" />
          </div>

          <ClipLoader
            size={24}
            speedMultiplier={0.8}
          />
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-xl border border-slate-200">

          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 px-5 py-4 bg-slate-50 border-b border-slate-200">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-4 rounded-md bg-slate-200 animate-pulse"
              />
            ))}
          </div>

          {/* Rows */}
          {Array.from({ length: 7 }).map((_, row) => (
            <div
              key={row}
              className="grid grid-cols-5 gap-4 items-center px-5 py-5 border-b border-slate-100 last:border-0"
            >
              {Array.from({ length: 5 }).map((_, col) => (
                <div
                  key={col}
                  className={`h-4 rounded-md bg-slate-100 animate-pulse ${
                    col === 0 ? "w-3/4" : "w-1/2"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>

      </div>
    </Card>
  );
}