import React from "react";
import img2 from '../../../../assets/Kevinator.png'
import serviceimg from '../../../../assets/serviceimg.png'
import TechnicalSectionEn from "./TechnicalSectionEn";


export default function DetilssectionEn() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${img2})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-4 text-white">

          <h1 className="mb-6 text-3xl md:text-5xl font-bold leading-tight">
            Fast & Reliable Service for All Appliances
          </h1>

          <p className="mb-8 text-lg md:text-xl text-gray-200 leading-relaxed">
            Request maintenance now without hesitation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="tel:01211114528"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-bold transition shadow-lg"
            >
              Request Service Now
            </a>

            <a
              href="https://wa.me/201211114528"
              className="border border-red-700 px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              WhatsApp
            </a>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="relative -mt-16 flex justify-center px-4">
        <div className="bg-white shadow-xl rounded-xl px-6 py-6 w-full max-w-xl">
          <div className="flex flex-col md:flex-row justify-between items-center text-center gap-6 md:gap-0">

            {/* Item 1 */}
            <div className="flex-1">
              <p className="text-2xl font-bold">50+</p>
              <p className="text-gray-600 text-sm">Expert Technicians</p>
            </div>

            <div className="hidden md:block w-px h-10 bg-gray-800" />

            {/* Item 2 */}
            <div className="flex-1">
              <p className="text-2xl font-bold">300+</p>
              <p className="text-gray-600 text-sm">Repaired Devices</p>
            </div>

            <div className="hidden md:block w-px h-10 bg-gray-800" />

            {/* Item 3 */}
            <div className="flex-1">
              <p className="text-2xl font-bold">100+</p>
              <p className="text-gray-600 text-sm">Satisfied Customers</p>
            </div>

            <div className="hidden md:block w-px h-10 bg-gray-800" />

            {/* Item 4 */}
            <div className="flex-1">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-gray-600 text-sm">Years of Experience</p>
            </div>

          </div>
        </div>
      </div>


        <TechnicalSectionEn/>
    </>
  );
}