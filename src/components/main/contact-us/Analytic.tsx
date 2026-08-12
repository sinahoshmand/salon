"use client";
import { BsBuilding } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { SlStar } from "react-icons/sl";
import { TiTime } from "react-icons/ti";
export default function Analytic() {
  const stats = [
    {
      value: "20k+",
      title: "Happy Customers",
      icon: <FaUsers size={25} />,
    },
    {
      value: "500",
      title: "Salons",
      icon: <BsBuilding size={25} />,
    },
    {
      value: "50k+",
      title: "Appointments",
      icon: <TiTime size={25} />,
    },
    {
      value: "4.9",
      title: "Average Rating",
      icon: <SlStar size={25} />,
    },
  ];

  return (
    <div className="container-c mt-8 mb-8">
      <div
        className="px-15 py-10 grid grid-cols-4 gap-7 rounded-[16px]"
        style={{
          backgroundImage: "url('/images/bg-flower.png')",
          backgroundOrigin: "border-box",
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="bg-[var(--surface)] p-5 rounded-full shadow-sm">
              <span className="text-[var(--primary)]">{item.icon}</span>
            </div>

            <p className="text-[30px] mt-3 text-[var(--text)] font-bold leading-none">
              {item.value}
            </p>

            <p className="text-[15px] mt-2 text-[var(--secondary-text)] ">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
