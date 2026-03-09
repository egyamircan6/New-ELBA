import React, { useMemo, useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServiceRequestPopup from "@/components/Form/ServiceRequestPopup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const ContactEn = () => {
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const HOTLINE = "01211114528";
  const whatsappNumber = "201211114528";
  const phoneNumberE164 = "+201211114528";
  const email = "info@elba-maintenance.com";

  const metaTitle = `Elba Maintenance Number ${HOTLINE} | Elba Customer Service & Support in Egypt`;
  const metaDescription =
    `Contact Elba maintenance now at ${HOTLINE} to book fast in-home service for Elba appliances. ` +
    `Elba customer service in Egypt for technical support, oven repair, cooker repair, and genuine spare parts.`;

  const h1 = "Contact Elba Maintenance Now | Support Available All Day";

  const FAQ_ITEMS = useMemo(
    () => [
      {
        question: "1) What is the Elba maintenance number in Egypt?",
        answer: (
          <p>
            The Elba maintenance number in Egypt is{" "}
            <a
              href={`tel:${phoneNumberE164}`}
              className="font-bold text-primary hover:underline"
            >
              {HOTLINE}
            </a>
            . You can call this number to book a technician visit, report a
            fault, or request in-home repair for Elba appliances such as ovens,
            cookers, and more.
          </p>
        ),
      },
      {
        question: "2) What is the official Elba service number?",
        answer: (
          <p>
            The official Elba service number is{" "}
            <a
              href={`tel:${phoneNumberE164}`}
              className="font-bold text-primary hover:underline"
            >
              {HOTLINE}
            </a>
            . Once you call, your request is registered and the nearest service
            team can be scheduled for your area.
          </p>
        ),
      },
      {
        question: "3) Is this number for bookings only or also for inquiries?",
        answer: (
          <p>
            This number is available for both maintenance bookings and customer
            inquiries. You can call{" "}
            <a
              href={`tel:${phoneNumberE164}`}
              className="font-bold text-primary hover:underline"
            >
              {HOTLINE}
            </a>{" "}
            or contact us via{" "}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline"
            >
              WhatsApp
            </a>{" "}
            for technical questions, operating guidance, or repair appointments.
          </p>
        ),
      },
      {
        question: "4) Is Elba maintenance available at home?",
        answer: (
          <p>
            Yes. We provide in-home maintenance service in many areas across
            Egypt. Call{" "}
            <a
              href={`tel:${phoneNumberE164}`}
              className="font-bold text-primary hover:underline"
            >
              {HOTLINE}
            </a>{" "}
            to arrange a home visit from a qualified technician.
          </p>
        ),
      },
      {
        question: "5) When should I contact Elba maintenance?",
        answer: (
          <div className="space-y-3">
            <p>You should contact Elba maintenance if you notice:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Weak heating performance</li>
              <li>Ignition problems</li>
              <li>Gas smell</li>
              <li>Appliance not working at all</li>
            </ul>
            <p>
              Early support helps reduce damage and lowers the final repair
              cost.
            </p>
          </div>
        ),
      },
      {
        question: "6) What is the Elba customer service number?",
        answer: (
          <p>
            The Elba customer service number is{" "}
            <a
              href={`tel:${phoneNumberE164}`}
              className="font-bold text-primary hover:underline"
            >
              {HOTLINE}
            </a>
            . You can use it for maintenance appointments, product support, and
            general technical assistance.
          </p>
        ),
      },
    ],
    [HOTLINE, phoneNumberE164, whatsappNumber]
  );

  const faqJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the Elba maintenance number in Egypt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `The Elba maintenance number in Egypt is ${HOTLINE}. You can call to book in-home maintenance and report faults for Elba appliances.`,
          },
        },
        {
          "@type": "Question",
          name: "What is the official Elba service number?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `The official Elba service number is ${HOTLINE}. It is used to register maintenance requests and schedule technician visits.`,
          },
        },
        {
          "@type": "Question",
          name: "Is this number for bookings only or also for inquiries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `The number ${HOTLINE} is available for both maintenance bookings and customer inquiries.`,
          },
        },
        {
          "@type": "Question",
          name: "Is Elba maintenance available at home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes, Elba maintenance is available at home in many areas. Call ${HOTLINE} to arrange a technician visit.`,
          },
        },
        {
          "@type": "Question",
          name: "When should I contact Elba maintenance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `You should contact Elba maintenance when you notice weak heating, ignition problems, gas smell, or the appliance stops working.`,
          },
        },
        {
          "@type": "Question",
          name: "What is the Elba customer service number?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `The Elba customer service number is ${HOTLINE}. You can use it for service bookings, support, and technical help.`,
          },
        },
      ],
    }),
    [HOTLINE]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello, I want to contact you:\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  const contactInfo = useMemo(
    () => [
      {
        icon: Phone,
        title: "Elba Maintenance Number",
        value: phoneNumberE164,
        href: `tel:${phoneNumberE164}`,
        color: "bg-primary",
        dir: "ltr",
      },
      {
        icon: MessageCircle,
        title: "WhatsApp",
        value: `Chat with us on WhatsApp ${HOTLINE}`,
        href: `https://wa.me/${whatsappNumber}`,
        color: "bg-[#25D366]",
      },
      {
        icon: Mail,
        title: "Email",
        value: email,
        href: `mailto:${email}`,
        color: "bg-accent",
      },
      {
        icon: Clock,
        title: "Working Hours",
        value: "Support available all day",
        href: null,
        color: "bg-muted-foreground",
      },
    ],
    [HOTLINE, phoneNumberE164, whatsappNumber, email]
  );

  return (
    <Layout>
      <SEOHead title={metaTitle} description={metaDescription} />
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1
            className={cn(
              "text-4xl md:text-5xl font-bold mb-4 text-foreground",
              "font-sans"
            )}
          >
            {h1}
          </h1>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {metaDescription}
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
              Chat on WhatsApp
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
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                          item.color
                        )}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="font-bold text-foreground mb-1">
                        {item.title}
                      </h3>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                          dir={item.dir}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">
                          {item.value}
                        </p>
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
                      <h3 className="font-bold text-foreground mb-2">
                        Service Areas
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Cairo, Giza, Alexandria, Mansoura, Tanta, and more...
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
                    <p>Location Map</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card
                className="border-none shadow-xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <CardContent className="p-6 md:p-8">
                  <h2
                    className={cn(
                      "text-2xl font-bold mb-6 text-foreground",
                      "font-sans"
                    )}
                  >
                    Send us a message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        dir="ltr"
                        className="w-full"
                        placeholder="Example: 01xxxxxxxxx"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        className="w-full resize-none"
                        placeholder="Write the device type, fault description, and your area..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Send via WhatsApp
                    </Button>
                  </form>

                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-card px-4 text-muted-foreground">
                        OR
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsServicePopupOpen(true)}
                    variant="outline"
                    size="lg"
                    className="w-full gap-2"
                  >
                    Request Service
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
              Frequently Asked Questions About Elba Customer Service
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

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-background shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-lg font-bold text-foreground">{question}</span>
        <span
          className={`text-2xl font-bold text-primary transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
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

export default ContactEn;