import { IconType } from "react-icons";
import { BiBriefcaseAlt, BiCategory, BiUser } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { CgHeadset, CgMenu } from "react-icons/cg";
import { FaBriefcase, FaHome, FaUserAlt, FaUserShield } from "react-icons/fa";
import { FaNewspaper, FaStore } from "react-icons/fa6";
import { FcManager } from "react-icons/fc";
import { GiCog } from "react-icons/gi";
import { GrUserAdmin } from "react-icons/gr";
import { MdPayment, MdStore } from "react-icons/md";
import { PiNewspaper, PiPhoneCall } from "react-icons/pi";
import { SlShield, SlSupport } from "react-icons/sl";

interface Child {
  id: number;
  name: string;
  href: string;
}

interface Menu {
  id: number;
  name: string;
  href: string;
  icon: IconType;
  has_sub: boolean;
  child: Child[];
  hrefs?: string[];
}

const menus: Menu[] = [
  {
    id: 1,
    name: "home",
    icon: FaHome,
    child: [],
    has_sub: false,
    href: "/admin",
    hrefs: ["/admin"],
  },
  {
    id: 100,
    name: "menus",
    icon: CgMenu,
    child: [],
    has_sub: false,
    href: "/admin/menus",
    hrefs: ["/admin/menus" , "/admin/menus/create" , "/admin/menus/edit"],
  },

  {
    id: 2,
    name: "cats",
    icon: BiCategory,
    child: [],
    has_sub: false,
    href: "/admin/services",
    hrefs: [
      "/admin/services",
      "/admin/services/create",
      "/admin/services/edit",
    ],
  },

  {
    id: 11,
    name: "salons",
    icon: MdStore,
    child: [],
    has_sub: false,
    href: "/admin/salons",
    hrefs: [
      "/admin/salons",
      "/admin/salons/create",
      "/admin/salons/edit",
    ],
  },


  

  {
    id: 5,
    name: "salonOwners",
    icon: GrUserAdmin,
    child: [
    ],
    has_sub: false,
    href: "#",
  },


  {
    id: 6,
    name: "users",
    icon: BiUser,
    child: [
     
    ],
    has_sub: false,
    href: "#",
  },

  {
    id: 4,
    name: "admins",
    icon: FaUserShield,
    child: [
      { id: 1, name: "admins", href: "/admin/admin" },
      { id: 2, name: "roles", href: "/admin/roles" },
    ],
    has_sub: true,
    href: "#",
    hrefs: ["/admin/admin"],
  },



  {
    id: 103,
    name: "blogs",
    icon: PiNewspaper,
    child: [
      { id: 1, name: "blog-category", href: "#" },
      { id: 2, name: "blogs", href: "#" },
    ],
    has_sub: true,
    href: "#",
  },

  {
    id: 10,
    name: "payments",
    icon: MdPayment,
    child: [
      { id: 1, name: "vip-payments", href: "#" },
      { id: 2, name: "reserve-payments", href: "#" },
    ],
    has_sub: true,
    href: "#",
  },

  {
    id: 7,
    name: "Support",
    icon: CgHeadset,
    child: [
      { id: 1, name: "tickets", href: "#" },
      { id: 2, name: "contact-us", href: "#" },
      { id: 3, name: "ai-chat-bot", href: "#" },
    ],
    has_sub: true,
    href: "#",
  },

  {
    id: 8,
    name: "settings",
    icon: GiCog,
    child: [],
    has_sub: false,
    href: "#",
  },
];

export default menus;
