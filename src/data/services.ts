interface Service {
  id: number;
  title: string;
  image: string;
  price: number;
  time: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Haircut & Styling",
    image: "/images/service.jpg",
    price: 50,
    time: "45 min",
  },
  {
    id: 2,
    title: "Hair Coloring",
    image: "/images/service2.jpg",
    price: 120,
    time: "2 h 30 min",
  },
  {
    id: 3,
    title: "Keratin Treatment",
    image: "/images/service.jpg",
    price: 210,
    time: "3 h",
  },
  {
    id: 4,
    title: "Hair Spa",
    image: "/images/service3.jpg",
    price: 59,
    time: "1 h",
  },
  {
    id: 5,
    title: "Facial Treatment",
    image: "/images/service.jpg",
    price: 88,
    time: "1 h 15 min",
  },
  {
    id: 6,
    title: "Eyebrow Shaping",
    image: "/images/service2.jpg",
    price: 99,
    time: "20 min",
  },
  {
    id: 7,
    title: "Massage",
    image: "/images/service4.jpg",
    price: 99,
    time: "20 min",
  },
  
];

export default services;
