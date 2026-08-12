import { BiCalendarEdit, BiChat, BiMoney, BiVoicemail } from "react-icons/bi";
import { BsPhone, BsPhoneVibrate, BsStar } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Benefit(){
    return(
      <section className="container-c">
        <div className="grid grid-cols-2 sm:grid-cols-4 shadow-sm rounded-[10px] 
        gap-7 border border-[var(--border)] -mt-4  py-5 px-4  bg-[var(--surface)]">
          {/* items */}
          <div className="flex flex-row gap-4 justify-center items-center border-r border-[var(--border)]">
            <div className="w-[70px] h-[70px] flex justify-center items-center bg-[var(--rose-gold)]/30 rounded-full p-4">
              <BsPhoneVibrate color="var(--primary)" size={30} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[var(--text)] font-bold mb-1.5 text-[16px]">
                 Call Us
              </h3>
              <p className="text-[var(--secondary-text)] font-bold mb-1.5 text-[13px]">
                 Fast phone support any time
              </p>
            </div>
          </div>
          {/* items */}
          <div className="flex flex-row gap-4 justify-center  items-center border-r border-[var(--border)]">
            <div className="w-[70px] h-[70px] flex justify-center items-center bg-[var(--rose-gold)]/30 rounded-full p-4">
              <BiChat color="var(--primary)" size={30} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[var(--text)] font-bold mb-1.5 text-[16px]">
                LiveChat
              </h3>
              <p className="text-[var(--secondary-text)] font-bold mb-1.5 text-[13px]">
                Avrage reply in 2 minutes
              </p>
            </div>
          </div>
          {/* items */}
          <div className="flex flex-row gap-4 justify-center  items-center border-r border-[var(--border)]">
            <div className="w-[70px] h-[70px] flex justify-center items-center bg-[var(--rose-gold)]/30 rounded-full p-4">
              <MdEmail color="var(--primary)" size={30} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[var(--text)] font-bold mb-1.5 text-[16px]">
                Email Us
              </h3>
              <p className="text-[var(--secondary-text)] font-bold mb-1.5 text-[13px]">
                Response within 24 hours
              </p>
            </div>
          </div>
          {/* items */}
          <div className="flex flex-row gap-4 justify-center  items-center">
            <div className="w-[70px] h-[70px] flex justify-center items-center bg-[var(--rose-gold)]/30 rounded-full p-4">
              <BiMoney color="var(--primary)" size={25} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[var(--text)] font-bold mb-1.5 text-[16px]">
                Best Price
              </h3>
              <p className="text-[var(--secondary-text)] font-bold mb-1.5 text-[13px]">
                get exclusive deals
              </p>
            </div>
          </div>
        </div>
        </section>
    )
}