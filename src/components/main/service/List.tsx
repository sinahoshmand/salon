import { FaClock, FaShield } from "react-icons/fa6";
import Card from "./Card";
import { BiMoney } from "react-icons/bi";
import { TiThumbsUp } from "react-icons/ti";

export default function List() {
  return (
    <section className="container-c">
      <div className="flex flex-col items-center mt-6">
        <h2 className="text-[28px] text-[var(--text)]  font-bold  ">Browse by Category</h2>
        <p className="text-[15px] text-[var(--secondary-text)] leading-6 mt-1">
              Choose a category to view all availble services
              </p>
             <div className="w-[60px] h-[3px] bg-[var(--primary)] mt-3"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-8 gap-8">
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
      </div>
      <div className="mt-8 mb-6 w-full bg-[var(--rose-gold)]/30 py-8 px-6 rounded-[10px]">
           <div className="flex flex-col w-full items-center ">
                <h3 className="font-bold text-[var(--text)] text-[19px]">Why Choose Our Services ?</h3>
                
           </div>
           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6  mt-8">
                    <div className="flex flex-col items-center px-4">
                         <div className="h-[65px] w-[65px] p-2 flex items-center 
                         justify-center rounded-full bg-[var(--rose-gold)]/50">
                             <FaShield color="var(--primary)" size={30}/>
                         </div>
                         <strong className="text-[17px] text-[var(--text)] mt-2">Professional Experts</strong>
                         <p className="text-[13px] text-center text-[var(--secondary-text)] mt-1">Our certified professionals 
                            ensure the best care and results</p>
                    </div>
                    <div className="flex flex-col  items-center px-4">
                         <div className="h-[65px] w-[65px] p-2 flex items-center 
                         justify-center rounded-full bg-[var(--rose-gold)]/50">
                             <BiMoney color="var(--primary)" size={30}/>
                         </div>
                         <strong className="text-[17px] text-[var(--text)] mt-2">Professional Experts</strong>
                         <p className="text-[13px] text-center text-[var(--secondary-text)] mt-1">Our certified professionals 
                            ensure the best care and results</p>
                    </div>
                    <div className="flex flex-col items-center  px-4 ">
                         <div className="h-[65px] w-[65px] p-2 flex items-center 
                         justify-center rounded-full bg-[var(--rose-gold)]/50 ">
                             <FaClock color="var(--primary)" size={30}/>
                         </div>
                         <strong className="text-[17px] text-[var(--text)] mt-2">Save Your Time</strong>
                         <p className="text-[13px] text-center text-[var(--secondary-text)] mt-1">
                           Easy online booking and flexible scheduling at your convenience
                          </p>
                    </div>
                    <div className="flex flex-col items-center px-4 ">
                         <div className="h-[65px] w-[65px] p-2 flex items-center 
                         justify-center rounded-full bg-[var(--rose-gold)]/50">
                             <TiThumbsUp color="var(--primary)" size={30}/>
                         </div>
                         <strong className="text-[17px] text-[var(--text)] mt-2">Satisfaction Guaranteed</strong>
                         <p className="text-[13px] text-center text-[var(--secondary-text)] mt-1">
                           Yout Satisfaction is our priority We always deliver the best
                          </p>
                    </div>

                </div>
    
      </div>
    </section>
  );
}
