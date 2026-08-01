import { IconType } from "react-icons";
import { BiShieldAlt } from "react-icons/bi";
import { FaMoneyBill, FaUserCircle } from "react-icons/fa";
import { FaGifts, FaStar } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

interface Bnefit {
    id:number
    title : string,
    icon : IconType,
    small : string
}

const benefits : Bnefit[] = [
   {
     id : 1 ,
     title : 'Instant Online Booking',
     small : 'Book In Secounds',
     icon : SlCalender,
   }, 
   {
    id : 2 ,
    title : 'Verified Salons',
    small : '100% veridfied',
    icon : BiShieldAlt,
  }, 
  {
    id : 3 ,
    title : 'Professional Stylists',
    small : 'expert & certified',
    icon : FaUserCircle,
  }, 
  {
    id : 4 ,
    title : 'Secure Payment',
    small : 'safe & Encrypted',
    icon : FaMoneyBill,
  },
  {
    id : 5 ,
    title : 'Customer Reviews',
    small : '4.9 avrage',
    icon : FaStar,
  },
  {
    id : 6 ,
    title : 'Loyalty Rewards',
    small : 'Earn & SaveMore',
    icon : FaGifts,
  },
]

export default benefits