import { motion } from "motion/react";
import { FaStar } from "react-icons/fa6";
type Props ={
  rate : number,
  persent : number
}
export default function RateItem({persent , rate} : Props){
    return(
        <div className="mb-3 flex gap-1.5 items-center mt-5">
        <span className="font-medium text-[var(--text)]">{rate}</span>
        <FaStar className="text-yellow-400" size={20} />
        <div className="h-3.5 w-full overflow-hidden rounded-full bg-[var(--border)]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${persent}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="h-full rounded-full bg-[var(--primary)]   to-[var(--primary)]"
          />
        </div>
        <span className="font-medium text-[var(--text)]">{persent}%</span>
      </div>
    )
}