import React from "react";
import heroBg from '../../../../assets/homebg.png'
import serviceimg from '../../../../assets/serviceimg.png'
import { Helmet } from 'react-helmet-async';

export default function HerosectionEn() {
  return (
    <>
      <Helmet>
        <title>Fast Bosch Egypt Repairs | Original Parts & Home Service 01211114528</title>
        <meta
          name="description"
          content="Looking for authorized Bosch Egypt maintenance? We provide expert repairs for all Bosch appliances using 100% original spare parts and certified technicians. Call 01211114528 now.."
        />
      </Helmet>

      <section
        className="relative h-screen bg-cover flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">
Welcome to the Authorized Bosch Egypt Maintenance Center          </h1>

          <p className="mb-8">
            Book your Bosch maintenance now with certified technicians.
          </p>

          <div className="flex gap-4 justify-center">
            <a href="tel:01211114528" className="bg-red-600 px-6 py-3 rounded">
              Request Service
            </a>

            <a href="https://wa.me/201211114528" className="border px-6 py-3 rounded">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100" dir="ltr">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          <img src={serviceimg} className="rounded shadow" />

          <div>
            <h2 className="text-2xl font-bold mb-4">
Why Choose Us for Bosch Egypt Maintenance?            </h2>

            <p className="text-gray-600 mb-6">
When you choose our center for Bosch Egypt maintenance, you are relying on a specialized entity with extensive experience in repairing Bosch appliances within Egypt. We don’t just offer a traditional repair service; we provide an integrated maintenance system that starts with an accurate diagnosis of the fault and ends with a written guarantee that ensures your peace of mind.
We are distinguished by a team of certified technicians trained on the latest German technology, whether you need Bosch refrigerator repair, washing machine maintenance, or built-in appliances service. We are committed to using 100% original spare parts to maintain the efficiency of the device and extend its operational life, with a response speed that ensures the nearest technician reaches your home as quickly as possible.
For authorized Bosch maintenance, call now at 01211114528.
            </p>

            <div className="flex gap-4">
              <a href="tel:01211114528" className="bg-red-600 text-white px-6 py-3 rounded">
                Request Service
              </a>

              <a href="https://wa.me/201211114528" className="border px-6 py-3 rounded">
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}