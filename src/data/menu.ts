import { IconType } from "react-icons";
import { BiBriefcaseAlt } from "react-icons/bi";
import {  FaBriefcase, FaHome } from "react-icons/fa";
import { FaNewspaper, FaStore } from "react-icons/fa6";
import { GiCog } from "react-icons/gi";
import { PiPhoneCall } from "react-icons/pi";

 interface Child {
    id : number,
    name : string,
    href : string,
}

interface Menu {
    id : number,
    name : string,
    href : string,
    icon : IconType,
    has_sub : boolean
    child : Child[]
}


const menus : Menu[] = [
 {
    id:1,
    name : "home" ,
    icon :  FaHome,
    child : [],
    has_sub : false,
    href : '/admin'
 },

 {
   id:2,
   name : "salons" ,
   icon :  FaStore,
   child : [],
   has_sub : false,
   href : '/admin/salon'
},
 

 

 {
    id:6,
    name : "settings" ,
    icon :  GiCog,
    child : [
     
    ],
    has_sub : false,
    href : '#'
 },


];


export default menus;