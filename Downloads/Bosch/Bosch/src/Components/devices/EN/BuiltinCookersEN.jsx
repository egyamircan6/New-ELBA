import React from "react";
import heroImg from "../../../assets/devices.png";
import heroImg2 from "../../../assets/devices2.png";
import frame1 from "../../../assets/Frame 8224 (1).png";
import frame2 from "../../../assets/Frame 8224 (2).png";
import frame3 from "../../../assets/Frame 8224.png";
import img from "../../../assets/5 1.png";
import img2 from "../../../assets/device3.png";
import BuiltinCookersfaqEN from "../../faq/EN/BuiltinCookersfaqEN";

export default function BuiltinCookersEN() {
  return (
    <div dir="ltr" className="bg-white space-y-24">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[450px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-white max-w-3xl px-4">

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Bosch Washing Machine Maintenance in Egypt - 100% Certified Service
          </h1>

          <p className="text-gray-200 mb-8 text-base md:text-lg">
            We provide top-quality washing machine repair services using modern tools and original spare parts with warranty
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="tel:01211114528"
              className="bg-red-600 hover:bg-red-700 px-10 py-3 rounded-lg font-bold transition shadow-lg"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/201211114528"
              className="border border-red-700 px-10 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              WhatsApp
            </a>

          </div>

        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="py-20 px-4">

        <h1 className="text-2xl md:text-3xl text-center font-bold mb-10 text-gray-900">
          Bosch Washing Machine <span className="text-red-600">Service</span>
        </h1>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">
            <img
              src={img}
              alt="washing machine"
              className="w-full max-w-md rounded-xl shadow-2xl hover:scale-105 transition duration-300"
            />
          </div>

          <div>

            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Bosch Washing Machine Repair Services
            </h2>

            <p className="text-gray-500 leading-[2.2em] mb-8 text-sm md:text-base">
              We provide professional Bosch washing machine maintenance services in Egypt through a team of highly trained technicians. 
              Using advanced diagnostic tools, we ensure accurate fault detection and fast repair. 
              We also use 100% original spare parts to guarantee the best performance and long-lasting results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="tel:01211114528"
                className="bg-red-600 hover:bg-red-700 px-10 py-3 rounded-lg font-bold transition shadow-lg"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/201211114528"
                className="border border-red-700 px-10 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ================= TIPS ================= */}
      <section
        className="relative py-24 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 bg-white/95 rounded-2xl shadow-2xl max-w-3xl mx-auto px-8 py-10 text-center">

          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Tips to Maintain Your Washing Machine 💡
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li className="flex items-center justify-center gap-2">
              <span className="text-green-500">✔</span>
              Do not overload the washing machine
            </li>

            <li className="flex items-center justify-center gap-2">
              <span className="text-green-500">✔</span>
              Use appropriate detergent
            </li>

            <li className="flex items-center justify-center gap-2">
              <span className="text-green-500">✔</span>
              Clean the filter regularly to avoid issues
            </li>

          </ul>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-4">

        <h2 className="text-center text-3xl font-bold mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="flex flex-col items-center p-5 border shadow-lg bg-white rounded-xl hover:scale-105 transition">
            <img src={frame1} className="w-24 h-24" />
            <h3 className="font-bold mt-4">Repairs</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              Fixing all issues quickly and efficiently
            </p>
          </div>

          <div className="flex flex-col items-center p-5 border shadow-lg bg-white rounded-xl hover:scale-105 transition">
            <img src={frame2} className="w-24 h-24" />
            <h3 className="font-bold mt-4">Regular Maintenance</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              Periodic check-ups to maintain performance
            </p>
          </div>

          <div className="flex flex-col items-center p-5 border shadow-lg bg-white rounded-xl hover:scale-105 transition">
            <img src={frame3} className="w-24 h-24" />
            <h3 className="font-bold mt-4">Technical Support</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              24/7 technical support available
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="relative py-24 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-8 py-12 text-center text-white">

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Bosch Washing Machine Repair?
          </h3>

          <p className="text-gray-200 mb-8">
            Contact us now and get the best certified maintenance service
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="tel:01211114528"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-bold"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/201211114528"
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              WhatsApp
            </a>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <BuiltinCookersfaqEN />

    </div>
  );
}