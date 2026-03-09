import React, { useMemo, useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServiceRequestPopup from "@/components/Form/ServiceRequestPopup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

/**
 * JSON-LD helper
 * (safe here because the JSON-LD content is static SEO content, not user-generated)
 */
const JsonLd = ({ data }: { data: unknown }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const Contact = () => {
  const { t, isRTL, language } = useLanguage();
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // === Numbers / Info ===
  const HOTLINE = "01211114528";
  const whatsappNumber = "201211114528"; // wa.me expects country code, no "+"
  const phoneNumberE164 = "+201211114528";
  const email = "info@elba-maintenance.com";

  // === SEO Content (as provided) ===
  const metaTitleAr = `رقم صيانة البا ${HOTLINE} | رقم خدمة عملاء وتوكيل Elba في مصر`;
  const metaDescriptionAr =
    `تواصل الآن مع رقم صيانة البا ${HOTLINE} لحجز صيانة منزلية سريعة لأجهزة Elba. ` +
    `رقم خدمة عملاء وتوكيل البا في مصر للدعم الفني وصيانة الأفران والبوتاجازات بقطع غيار أصلية.`;
  const h1Ar = "اتصل الآن برقم صيانة البا| دعم على مدار اليوم";

  const FAQ_ITEMS = useMemo(
    () => [
      {
        question: "1) ما هو رقم صيانة البا في مصر؟",
        answer: (
          <p>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              رقم صيانة البا في مصر
            </a>
            <strong> هو </strong>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              01211114528
            </a>
            <strong>. يمكنك الاتصال على </strong>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              01211114528
            </a>
            <strong> أو التواصل عبر واتساب </strong>
            <a
              href="https://wa.me/201211114528"
              className="font-bold text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              01211114528
            </a>
            <strong> لحجز زيارة فني صيانة، أو تسجيل بلاغ عطل لأجهزة </strong>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A3%D8%AC%D9%87%D8%B2%D8%A9-elba"
              className="font-bold text-primary hover:underline"
            >
              Elba
            </a>
            <strong> مثل </strong>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%81%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              الأفران
            </a>
            <strong> و </strong>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              البوتاجازات
            </a>
            <strong>.</strong>
          </p>
        ),
      },
      {
        question: "2) ما هو رقم صيانة elba المعتمد؟",
        answer: (
          <p>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              رقم صيانة elba المعتمد
            </a>
            <strong> للتواصل السريع وحجز الصيانة هو </strong>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              01211114528
            </a>
            <strong>. عند الاتصال على </strong>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              01211114528
            </a>
            <strong> يتم تسجيل البيانات وتحديد موعد مناسب للصيانة عبر فريق </strong>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1"
              className="font-bold text-primary hover:underline"
            >
              صيانة البا في مصر
            </a>
            <strong>.</strong>
          </p>
        ),
      },
      {
        question: "3) ما هو رقم صيانة البا الخط الساخن؟",
        answer: (
          <p>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              رقم صيانة البا الخط الساخن
            </a>
            <strong> هو </strong>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              01211114528
            </a>
            <strong>، وهو الرقم المباشر لتلقي طلبات الصيانة والاستفسارات الخاصة بأعطال </strong>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A3%D8%AC%D9%87%D8%B2%D8%A9-elba"
              className="font-bold text-primary hover:underline"
            >
              أجهزة البا
            </a>
            <strong> في مصر.</strong>
          </p>
        ),
      },
      {
        question: "4) ما هو رقم صيانة افران البا؟",
        answer: (
          <p>
            <strong>لصيانة </strong>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%81%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              أفران البا
            </a>
            <strong> وحجز فني متخصص، اتصل على </strong>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              01211114528
            </a>
            <strong> أو عبر واتساب </strong>
            <a
              href="https://wa.me/201211114528"
              className="font-bold text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              01211114528
            </a>
            <strong>. </strong>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%81%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              رقم صيانة افران البا
            </a>{" "}
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              01211114528
            </a>
            <strong> مناسب لبلاغات الأعطال وتشخيص المشكلة بسرعة.</strong>
          </p>
        ),
      },
      {
        question: "5) هل صيانة البا في مصر متاحة في المنزل؟",
        answer: (
          <p>
            <strong>نعم، يمكنك طلب صيانة منزلية عبر </strong>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              01211114528
            </a>
            <strong>، ويتم تحديد أقرب موعد لزيارة فني صيانة حسب منطقتك.</strong>
          </p>
        ),
      },
      {
        question: "6) متى أتواصل مع رقم صيانة البا؟",
        answer: (
          <div className="space-y-3">
            <p>
              <strong>تواصل مع </strong>
              <a
                href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
                className="font-bold text-primary hover:underline"
              >
                01211114528
              </a>
              <strong> إذا لاحظت:</strong>
            </p>

            <ul className="list-disc pr-5 space-y-2">
              <li>
                <strong>ضعف التسخين</strong>
              </li>
              <li>
                <strong>مشكلة في إشعال </strong>
                <a
                  href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%A7%D9%84%D8%A8%D8%A7"
                  className="font-bold text-primary hover:underline"
                >
                  البوتاجاز
                </a>
              </li>
              <li>
                <strong>رائحة غاز</strong>
              </li>
              <li>
                <strong>توقف </strong>
                <a
                  href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%81%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D8%A8%D8%A7"
                  className="font-bold text-primary hover:underline"
                >
                  الفرن
                </a>
                <strong> عن العمل</strong>
              </li>
            </ul>

            <p>
              <strong>الاتصال المبكر يساعد في تقليل تلف القطع وتكاليف الإصلاح.</strong>
            </p>
          </div>
        ),
      },
      {
        question: "7) هل رقم صيانة البا مخصص للحجز فقط أم للاستفسار أيضًا؟",
        answer: (
          <p>
            <strong>الرقم </strong>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              01211114528
            </a>
            <strong> مخصص للحجز والاستفسار معًا. تقدر تتواصل على </strong>
            <a
              href="https://wa.me/201211114528"
              className="font-bold text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              01211114528
            </a>
            <strong> لمعرفة خطوات التشغيل الصحيحة، أو حجز صيانة عند وجود عطل.</strong>
          </p>
        ),
      },
      {
        question: "ما هو رقم توكيل البا في مصر؟",
        answer: (
          <p>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              رقم توكيل البا المعتمد في مصر
            </a>
            <strong> هو </strong>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              01211114528
            </a>
            <strong>. يمكنك الاتصال على </strong>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              01211114528
            </a>
            <strong> لحجز صيانة أجهزة </strong>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A3%D8%AC%D9%87%D8%B2%D8%A9-elba"
              className="font-bold text-primary hover:underline"
            >
              Elba
            </a>
            <strong> المنزلية مثل </strong>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              الأفران والبوتاجازات
            </a>
            <strong>، أو لطلب زيارة فني متخصص من توكيل البا المعتمد.</strong>
          </p>
        ),
      },
      {
        question: "ما هو رقم صيانة البا في مصر؟",
        answer: (
          <p>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              رقم صيانة البا المباشر لحجز الصيانة المنزلية
            </a>
            <strong> هو </strong>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              01211114528
            </a>
            <strong>. يمكنك الاتصال على 01211114528 لتسجيل بلاغ أعطال </strong>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%81%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              أفران
            </a>
            <strong> و </strong>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              بوتاجازات Elba
            </a>
            <strong>, مع تحديد موعد زيارة فني متخصص بسرعة.</strong>
          </p>
        ),
      },
      {
        question: "ما هو رقم 01211114528؟",
        answer: (
          <div className="space-y-3">
            <ul className="list-disc pr-5 space-y-2">
              <li>
                <strong>هو رقم للحجز </strong>
                <a
                  href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1"
                  className="font-bold text-primary hover:underline"
                >
                  صيانة
                </a>{" "}
                <strong>أجهزة في القاهرة</strong>
              </li>
              <li>
                <strong>متابعة مباشرة لطلب الصيانة</strong>
              </li>
              <li>
                <strong>دعم فني متخصص</strong>
              </li>
              <li>
                <strong>تشخيص دقيق للأعطال</strong>
              </li>
            </ul>

            <p>
              <strong>الاتصال على </strong>
              <a
                href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
                className="font-bold text-primary hover:underline"
              >
                01211114528
              </a>
              <strong> يضمن لك سرعة الاستجابة وخدمة صيانة احترافية لأجهزة البا.</strong>
            </p>
          </div>
        ),
      },
      {
        question: "ما هو رقم خدمة عملاء البا؟",
        answer: (
          <p>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              رقم خدمة عملاء البا
            </a>
            <strong> المتاح للحجز والاستفسار هو </strong>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              01211114528
            </a>
            <strong>. يمكنك التواصل على 01211114528 لمعرفة مواعيد الصيانة، الاستفسار عن الأعطال الشائعة، أو طلب دعم فني لأجهزة </strong>
            <a
              href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A3%D8%AC%D9%87%D8%B2%D8%A9-elba"
              className="font-bold text-primary hover:underline"
            >
              Elba داخل مصر
            </a>
            <strong>.</strong>
          </p>
        ),
      },
      {
        question: "هل رقم توكيل البا هو نفسه رقم خدمة العملاء؟",
        answer: (
          <p>
            <strong>نعم، </strong>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              رقم توكيل البا
            </a>
            <strong> ورقم خدمة عملاء البا هو نفسه </strong>
            <a
              href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
              className="font-bold text-primary hover:underline"
            >
              01211114528
            </a>
            <strong>. هذا الرقم مخصص لاستقبال طلبات الصيانة والاستفسارات الفنية لجميع أجهزة Elba.</strong>
          </p>
        ),
      },
      {
        question: "متى يجب التواصل مع رقم صيانة البا في مصر؟",
        answer: (
          <div className="space-y-3">
            <p>
              <strong>يُفضل الاتصال على </strong>
              <a
                href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
                className="font-bold text-primary hover:underline"
              >
                01211114528
              </a>
              <strong> عند ملاحظة:</strong>
            </p>

            <ul className="list-disc pr-5 space-y-2">
              <li>
                <strong>ضعف كفاءة </strong>
                <a
                  href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%81%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D8%A8%D8%A7"
                  className="font-bold text-primary hover:underline"
                >
                  الفرن
                </a>
              </li>
              <li>
                <strong>مشكلة في إشعال </strong>
                <a
                  href="https://alba-eg.com/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A8%D9%88%D8%AA%D8%A7%D8%AC%D8%A7%D8%B2-%D8%A7%D9%84%D8%A8%D8%A7"
                  className="font-bold text-primary hover:underline"
                >
                  البوتاجاز
                </a>
              </li>
              <li>
                <strong>تسريب غاز</strong>
              </li>
              <li>
                <strong>توقف الجهاز عن العمل</strong>
              </li>
            </ul>

            <p>
              <strong>التواصل المبكر مع </strong>
              <a
                href="https://alba-eg.com/%D8%B1%D9%82%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7"
                className="font-bold text-primary hover:underline"
              >
                رقم صيانة البا في مصر 01211114528
              </a>
              <strong> يساعد في تقليل تكلفة الإصلاح والحفاظ على عمر الجهاز.</strong>
            </p>
          </div>
        ),
      },
    ],
    []
  );

  // JSON-LD exactly like your script (10 items)
  const faqJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "ما هو رقم صيانة البا في مصر؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "رقم صيانة البا في مصر هو 01211114528. يمكنك الاتصال على 01211114528 لحجز زيارة فني صيانة أو تسجيل بلاغ عطل لأجهزة Elba مثل الأفران والبوتاجازات.",
          },
        },
        {
          "@type": "Question",
          name: "ما هو رقم صيانة elba المعتمد؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "رقم صيانة elba المعتمد للتواصل السريع وحجز الصيانة هو 01211114528، ويتم من خلاله تسجيل البيانات وتحديد موعد مناسب للصيانة.",
          },
        },
        {
          "@type": "Question",
          name: "ما هو رقم صيانة البا الخط الساخن؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "رقم صيانة البا الخط الساخن هو 01211114528، وهو الرقم المباشر لتلقي طلبات الصيانة والاستفسارات الخاصة بأعطال أجهزة البا في مصر.",
          },
        },
        {
          "@type": "Question",
          name: "ما هو رقم صيانة افران البا؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "رقم صيانة افران البا هو 01211114528 لحجز فني متخصص وتشخيص أعطال أفران البا بسرعة.",
          },
        },
        {
          "@type": "Question",
          name: "هل صيانة البا متاحة في المنزل؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، يمكنك طلب صيانة منزلية عبر رقم صيانة البا 01211114528، ويتم تحديد أقرب موعد لزيارة فني صيانة حسب منطقتك.",
          },
        },
        {
          "@type": "Question",
          name: "متى أتواصل مع رقم صيانة البا؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "يُفضل التواصل مع رقم صيانة البا 01211114528 عند ملاحظة ضعف التسخين، مشكلة في الإشعال، رائحة غاز، أو توقف الجهاز عن العمل لتجنب تفاقم العطل.",
          },
        },
        {
          "@type": "Question",
          name: "هل رقم صيانة البا مخصص للحجز فقط أم للاستفسار أيضًا؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "الرقم 01211114528 مخصص للحجز والاستفسار معًا، سواء لطلب صيانة أو للحصول على دعم فني وإرشادات تشغيل أجهزة البا.",
          },
        },
        {
          "@type": "Question",
          name: "ما هو رقم توكيل البا في مصر؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "رقم توكيل البا المعتمد في مصر هو 01211114528 لحجز صيانة أجهزة Elba المنزلية وطلب زيارة فني متخصص.",
          },
        },
        {
          "@type": "Question",
          name: "ما هو رقم خدمة عملاء البا؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "رقم خدمة عملاء البا المتاح للحجز والاستفسار هو 01211114528 للتواصل بخصوص مواعيد الصيانة أو الأعطال أو طلب الدعم الفني.",
          },
        },
        {
          "@type": "Question",
          name: "هل رقم توكيل البا هو نفسه رقم خدمة العملاء؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، رقم توكيل البا ورقم خدمة عملاء البا هو نفسه 01211114528، وهو مخصص لاستقبال طلبات الصيانة والاستفسارات الفنية.",
          },
        },
      ],
    }),
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = isRTL
      ? `مرحباً، أريد التواصل معكم:\n\nالاسم: ${name}\nرقم الهاتف: ${phone}\nالرسالة: ${message}`
      : `Hello, I want to contact you:\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  const contactInfo = useMemo(
    () => [
      {
        icon: Phone,
        title: "رقم صيانة البا",
        value: phoneNumberE164,
        href: `tel:${phoneNumberE164}`,
        color: "bg-primary",
        dir: "ltr" as const,
      },
      {
        icon: MessageCircle,
        title: "واتساب",
        value: `تواصل عبر واتساب ${HOTLINE}`,
        href: `https://wa.me/${whatsappNumber}`,
        color: "bg-[#25D366]",
      },
      {
        icon: Mail,
        title: "البريد الإلكتروني",
        value: email,
        href: `mailto:${email}`,
        color: "bg-accent",
      },
      {
        icon: Clock,
        title: "ساعات العمل",
        value: "دعم على مدار اليوم",
        href: null as null,
        color: "bg-muted-foreground",
      },
    ],
    [HOTLINE, phoneNumberE164, whatsappNumber, email]
  );

  return (
    <Layout>
      {/* SEO */}
      <SEOHead title={metaTitleAr} description={metaDescriptionAr} />

      {/* JSON-LD schema */}
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1
            className={cn(
              "text-4xl md:text-5xl font-bold mb-4 text-foreground",
              isRTL ? "font-cairo" : "font-sans"
            )}
          >
            {h1Ar}
          </h1>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {metaDescriptionAr}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${phoneNumberE164}`}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-bold hover:opacity-90 transition"
              dir="ltr"
            >
              <Phone className="w-5 h-5" />
              {HOTLINE}
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-3 rounded-full font-bold hover:opacity-90 transition"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="group hover-lift border-none shadow-lg animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-5">
                      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", item.color)}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                          dir={(item as any).dir}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Service Areas */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">مناطق الخدمة</h3>
                      <p className="text-muted-foreground text-sm">
                        القاهرة، الجيزة، الإسكندرية، المنصورة، طنطا، والمزيد...
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>خريطة الموقع</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6 md:p-8">
                  <h2 className={cn("text-2xl font-bold mb-6 text-foreground", isRTL ? "font-cairo" : "font-sans")}>
                    أرسل لنا رسالة
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t?.("form.name") ?? "الاسم"}</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t?.("form.phone") ?? "رقم الهاتف"}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        dir="ltr"
                        className="w-full"
                        placeholder="مثال: 01xxxxxxxxx"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">رسالتك</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        className="w-full resize-none"
                        placeholder="اكتب نوع الجهاز (فرن/بوتاجاز) ووصف العطل والمنطقة..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2">
                      <MessageCircle className="w-5 h-5" />
                      إرسال عبر واتساب
                    </Button>
                  </form>

                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-card px-4 text-muted-foreground">أو</span>
                    </div>
                  </div>

                  <Button onClick={() => setIsServicePopupOpen(true)} variant="outline" size="lg" className="w-full gap-2">
                    {t?.("hero.cta.request") ?? "طلب صيانة"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              أسئلة شائعة عن خدمة عملاء البا:
            </h2>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item, idx) => (
                <FaqItem key={idx} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceRequestPopup
        isOpen={isServicePopupOpen}
        onClose={() => setIsServicePopupOpen(false)}
        domain="https://www.elba-eg.com"
      />
    </Layout>
  );
};

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-background shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-right"
      >
        <span className="text-lg font-bold text-foreground">{question}</span>
        <span className={`text-2xl font-bold text-primary transition-transform ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6 text-muted-foreground text-lg leading-relaxed space-y-3">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Contact;