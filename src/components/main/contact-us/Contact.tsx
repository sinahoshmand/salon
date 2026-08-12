"use client";

import { BiMessage } from "react-icons/bi";
import { MdMap } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import Form from "./Form";

const icon = new L.Icon({
  iconUrl: "/images/marker5.png",
  iconRetinaUrl: "/images/marker5.png",
  shadowUrl: "/images/marker-shadow.png",
  iconSize: [38, 52],
  iconAnchor: [19, 52],
  popupAnchor: [0, -45],
});

export default function Contact() {
  return (
    <section className="container-c mt-8">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-7">
          <div className="bg-[var(--surface)] p-5 rounded-[10px] shadow-md">
            <p className="flex flex-row items-center gap-2 text-[16px] font-bold text-[var(--text)]">
              <BiMessage size={30} color="var(--primary)" />
              Send Us a Message
            </p>
             <Form/>
          
          </div>
        </div>
        <div className="col-span-5">
          <div className="bg-[var(--surface)] p-5 rounded-[10px] shadow-md">
            <p className="flex flex-row items-center gap-2 text-[16px] font-bold text-[var(--text)]">
              <LiaMapMarkerAltSolid size={35} color="var(--primary)" />
              Our Location
            </p>
            <div className="overflow-hidden mt-5 z-0 rounded-[8px] border border-[var(--border)] shadow-lg">
              <MapContainer
                center={[40.7128, -74.006]}  
                zoom={14}
                scrollWheelZoom={false}
                className="h-[485px] w-full"
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
    </section>
  );
}
