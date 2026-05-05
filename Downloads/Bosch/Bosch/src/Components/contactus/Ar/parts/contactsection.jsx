import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import bgImage from "../../../../assets/contacthero.png";

export default function ContactSection() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "الأمريكية جروب - صيانة بوش المعتمدة",
    "image": "https://bosch-egypts.com/wp-content/uploads/2023/american-group-logo.png",
    "url": "https://bosch-egypts.com/من-نحن",
    "telephone": "01211114528",
    "description": "الأمريكية جروب هي المركز الرائد والمتخصص في صيانة أجهزة بوش الألمانية بمصر، نوفر قطع غيار أصلية وضمان معتمد.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "المركز الرئيسي - مصر",
      "addressLocality": "القاهرة",
      "addressCountry": "EG"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 flex flex-col justify-center items-center gap-12 px-4">

          {/* About Card */}
          <div className="bg-white text-right px-10 py-8 rounded-md shadow-lg max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">
              الأمريكية جروب: الريادة في حلول صيانة بوش المتكاملة
            </h2>
            <p className="text-gray-600 text-sm leading-[2em] mb-4">
              تأسست الأمريكية جروب لتكون الكيان الأبرز والوكيل الخدمي الأكثر موثوقية في مصر، حيث تخصصنا في تقديم منظومة صيانة عالمية تليق بعملاء بوش. نحن لا نقدم مجرد إصلاح، بل نقدم "تجربة اعتماد" كاملة تبدأ من اتصالك بالخط الساخن بوش وتنتهي بعودة جهازك لحالة الزيرو. بفضل خبراتنا التي امتدت لسنوات، استطاعت الأمريكية جروب أن تستقطب أفضل الكوادر الهندسية وتوفر قطع الغيار الأصلية لتصبح المقصد الأول لكل من يبحث عن صيانة بوش مصر المعتمدة فنياً وتقنياً.
            </p>

            <h3 className="text-xl font-bold mb-3">
              لماذا تعتبر الأمريكية جروب الخيار الأول لعملاء بوش؟
            </h3>
            <p className="text-gray-600 text-sm leading-[2em] mb-4">
              في الأمريكية جروب، نؤمن بأن صيانة الأجهزة الألمانية تتطلب دقة متناهية، ولذلك استثمرنا في أحدث معدات التشخيص الرقمي التي نستخدمها في مراكزنا. التزامنا بمعايير الجودة جعلنا نكتسب ثقة آلاف العملاء الذين يعتبروننا "التوكيد الحقيقي" للجودة والأمان. اتصل دلوقتي على رقمنا الموحد{" "}
              <a href="tel:01211114528" className="text-red-600 font-bold">
                01211114528
              </a>
              ، كما يمكنك مراسلتنا فوراً عبر الواتساب وهيوصلك الدعم الفني فوراً.
            </p>

            <h3 className="text-xl font-bold mb-3">
              رؤية الأمريكية جروب في صيانة الأجهزة
            </h3>
            <p className="text-gray-600 text-sm leading-[2em]">
              نحن في الأمريكية جروب نضع "إطالة عمر الجهاز" كهدف أساسي لنا، ولذلك نوفر ضمانات حقيقية تصل إلى عام كامل على كافة قطع الغيار الأصلية. نحن نعتبر أنفسنا الشريك الاستراتيجي لراحة منزلك، حيث نغطي كافة المحافظات من خلال مراكزنا المتطورة في الشيخ زايد، والإسكندرية، والساحل الشمالي. الأمريكية جروب هي الاسم الذي يمنحك الطمأنينة بأن جهازك في أيدٍ أمينة معتمدة بالخبرة والكفاءة.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-white text-center px-10 py-8 rounded-md shadow-lg max-w-xl w-full">
            <h2 className="text-2xl font-bold mb-3">تواصل معنا</h2>
            <p className="text-gray-500 mb-6 text-sm">
              تابعنا على السوشيال ميديا وبقينا عندك في أي استفسار
            </p>

            <div className="flex justify-center gap-6 text-3xl">
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
          </div>

        </div>
      </section>
    </>
  );
}