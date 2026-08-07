"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiCalendarEvent, BiPhone } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { BsInstagram, BsTiktok, BsWhatsapp, BsYoutube } from "react-icons/bs";
const icon = new L.Icon({
  iconUrl: "/images/marker5.png",
  iconRetinaUrl: "/images/marker5.png",
  shadowUrl: "/images/marker-shadow.png",
  iconSize: [38, 52],
  iconAnchor: [19, 52],
  popupAnchor: [0, -45],
});
export default function Info() {
  return (
    <section className="container-c mt-13">
      <div className="grid grid-cols-2 gap-5">
        <div className="rounded-[10px] border border-[var(--border)] shadow-sm p-4">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-5">
              <h3 className="text-[var(--text)] font-bold text-[23px]">
                Our Location
              </h3>
              <div className="flex flex-col gap-2">
                <p className="flex flex-row gap-2 leading-5 items-center mt-3 text-[var(--secondary-text)] text-[13px]">
                  <FaMapMarkerAlt color="var(--primary)" size={16} />
                  Apartment 14B, 425 Lexington Avenue
                </p>
                <p className="flex flex-row gap-2 leading-5 items-center mt-1 text-[var(--secondary-text)] text-[13px]">
                  <BiPhone color="var(--primary)" size={16} />
                  (212)555-123
                </p>
                <p className="flex flex-row gap-2 leading-5 items-center mt-1 text-[var(--secondary-text)] text-[13px]">
                  <MdMail color="var(--primary)" size={16} />
                  info@luxebeautystudio.com
                </p>
                <p className="flex flex-row gap-2 leading-5 items-center mt-1 text-[var(--secondary-text)] text-[13px]">
                  <BsClock color="var(--primary)" size={16} />
                  Mon - Sun : 09:00 AM -09:00 PM
                </p>
                <div className="flex flex-row gap-3  mt-5">
                  <a
                    href="#"
                    className="border-2 border-[var(--border)] group p-2 rounded-full 
              hover:bg-[var(--primary-hover)] transition-all duration-300"
                  >
                    <BsInstagram
                      size={17}
                      className="text-[var(--rose-gold)] group-hover:text-[var(--bg)]"
                    />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-[var(--border)] group p-2 rounded-full 
              hover:bg-[var(--primary-hover)] transition-all duration-300"
                  >
                    <BsWhatsapp
                      size={17}
                      className="text-[var(--rose-gold)] group-hover:text-[var(--bg)]"
                    />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-[var(--border)] group p-2 rounded-full 
              hover:bg-[var(--primary-hover)] transition-all duration-300"
                  >
                    <BsTiktok
                      size={17}
                      className="text-[var(--rose-gold)] group-hover:text-[var(--bg)]"
                    />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-[var(--border)] group p-2 rounded-full 
              hover:bg-[var(--primary-hover)] transition-all duration-300"
                  >
                    <BsYoutube
                      size={17}
                      className="text-[var(--rose-gold)] group-hover:text-[var(--bg)]"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-7">
              <div className="overflow-hidden z-0 rounded-[8px] border border-[var(--border)] shadow-lg">
                <MapContainer
                  center={[40.7128, -74.006]} // Tehran
                  zoom={14}
                  scrollWheelZoom={false}
                  className="h-[250px] w-full"
                >
                  <TileLayer
                    attribution="© OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <Marker position={[40.7128, -74.006]} icon={icon}>
                    <Popup>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Beauty Salon</h3>

                        <p className="text-sm text-gray-500">
                          Premium Beauty Services
                        </p>

                        <button className="mt-2 rounded-lg bg-pink-500 px-3 py-2 text-white">
                          View Salon
                        </button>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col single-salon-about rounded-[10px] px-10 py-10">
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <div className="flex flex-col">
                <h3 className="text-[var(--text)] text-[20px] font-bold">Ready to pamper yourself ?</h3>
                <p className="  max-w-max mt-3 text-[var(--text)] text-[13px] leading-6">
                  Book yout appointemnt today and experience luxury beauty like never before
                </p>
                <div className="flex flex-row gap-3 mt-13">
            <button
              className="bg-[var(--primary)] text-[13px] items-center
                 text-[var(--bg)]   flex gap-2 rounded-[10px] px-5 py-3"
            >
              Book Appointment
              <BiCalendarEvent color="var(--bg)" size={14} />
            </button>
            <button
              className="bg-[var(--bg)] border border-[var(--primary)] text-[13px] items-center
                 text-[var(--primary)] flex gap-2 rounded-[10px] px-5 py-3"
            >
              Call Now
              <BiPhone color="var(--primary)" size={14} />
            </button>
          </div>
              </div>
            </div>
            <div className="col-span-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
