import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
export default function ReviewCard(){
    return(
        <div className="bg-[var(--surface)] shadow-md px-6 py-6 rounded-[8px]">
        <div className="flex gap-3 items-center">
          <Image
            alt="profile"
            src={"/images/profile.jpg"}
            className="w-[60px] mt-2 object-cover rounded-full h-[60px]"
            width={80}
            height={80}
          />
          <div className="flex flex-col">
            <p className="text-[var(--text)] text-[16px]">
              Emily Johnson
            </p>
            <p className="text-[var(--secondary-text)] text-[13px]">
              2 days ago
            </p>
          </div>
        </div>
        <Rating
          className="mt-4"
          style={{ maxWidth: 120 }}
          value={5}
          readOnly
          itemStyles={{
            itemShapes: RoundedStar,
            activeFillColor: "#FACC15",
            activeStrokeColor: "#EAB308",
            inactiveFillColor: "#E5E7EB",
            inactiveStrokeColor: "#D1D5DB",
          }}
        />
        <p className={`text-[13px] mt-2  text-[var(--secondary-text)]`}>
          The all-in-one platform to capture, measure, and showcase
          customer love  testimonials, case studies, NPS, and brand
          monitoring in one place.
        </p>
      </div>
    )
}