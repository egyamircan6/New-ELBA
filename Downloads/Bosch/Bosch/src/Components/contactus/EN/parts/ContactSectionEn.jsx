import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import bgImage from "../../../../assets/contacthero.png";

export default function ContactSectionEn() {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex justify-center px-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-8 md:p-10">

          {/* Header */}
          <h2 className="text-3xl font-bold text-center mb-2">
            American Group
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Leadership in Integrated Bosch Maintenance Solutions
          </p>

          {/* Social */}
          <div className="flex justify-center gap-6 text-3xl mb-8">
            <a
              href="https://wa.me/201211114528"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:scale-110 transition"
            >
              <FaFacebook />
            </a>
          </div>

          {/* Content */}
          <div className="space-y-5 text-sm md:text-base text-gray-700 leading-relaxed">

            <p>
              <span className="font-semibold">American Group</span> was established
              to be one of the most reliable service providers in Egypt for Bosch
              maintenance, offering a certified experience from diagnosis to full
              restoration of your appliance.
            </p>

            <h3 className="font-bold text-black">Why Choose Us?</h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                Precision maintenance following German engineering standards.
              </li>
              <li>
                100% original spare parts with up to 12 months warranty.
              </li>
              <li>
                Advanced diagnostic tools for fast and accurate fault detection.
              </li>
              <li>
                Expert engineers for washing machines, fridges, ovens & more.
              </li>
            </ul>

            <h3 className="font-bold text-black">Customer Trust</h3>

            <p>
              Thousands of customers across Egypt trust American Group as their
              first choice for Bosch maintenance due to transparency, speed, and
              quality service.
            </p>

            <h3 className="font-bold text-black">Contact Us</h3>

            <p>
              Call us now:{" "}
              <a href="tel:01211114528" className="text-red-600 font-semibold">
                01211114528
              </a>{" "}
              or contact us via{" "}
              <a
                href="https://wa.me/201211114528"
                className="text-green-600 font-semibold"
              >
                WhatsApp
              </a>{" "}
              for instant support.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}