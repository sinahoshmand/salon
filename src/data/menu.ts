import { IconType } from "react-icons";
import { BiBriefcaseAlt } from "react-icons/bi";
import {  FaBriefcase, FaHome } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
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
    name : "خانه" ,
    icon :  FaHome,
    child : [],
    has_sub : false,
    href : '/admin'
 },

 {
   id:3,
   name : "سالن ها" ,
   icon :  FaBriefcase,
   child : [],
   has_sub : false,
   href : '/admin/salon'
},
 

 

 {
    id:6,
    name : "تنظیمات" ,
    icon :  GiCog,
    child : [
      {id : 1 , name : 'تنظیمات متن ها' , href : '/admin/setting/main-texts-setting'},
      {id : 2 , name : 'صفحه درباره من' , href : '/admin/setting/about-us'},
      {id : 3 , name : 'صفحه تماس با من' , href : '/admin/setting/contact'},
      {id : 4 , name : 'سایر تنظیمات' , href : '/admin/setting/other'},
    ],
    has_sub : true,
    href : '#'
 },


];


export default menus;