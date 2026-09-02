import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";

interface Item {
  id:string|number,
  rating : number,
  review : string,
  date : string,
  user : string,
  image : string
}

type Props = {
  item : Item
}


export default function ReviewCard({item} : Props){
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
              {item.user}
            </p>
            <p className="text-[var(--secondary-text)] text-[13px]">
               {item.date}
            </p>
          </div>
        </div>
        <Rating
          className="mt-4"
          style={{ maxWidth: 120 }}
          value={item.rating}
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
           {item.review}
        </p>
      </div>
    )
}