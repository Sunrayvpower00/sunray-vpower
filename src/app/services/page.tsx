import Link from "next/link";
import {
  FaTools,
  FaBatteryFull,
  FaBolt,
  FaWrench,
  FaSearch,
  FaHeadset,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

const services = [
  {
    icon: FaTools,
    title: "Installation & Setup",
    description:
      "Professional installation and setup of inverters, batteries and UPS systems for reliable performance.",
  },
  {
    icon: FaBatteryFull,
    title: "Battery Replacement",
    description:
      "Get the right replacement battery for your inverter or backup system with professional assistance.",
  },
  {
    icon: FaBolt,
    title: "Inverter Installation",
    description:
      "Safe and reliable inverter installation for homes, offices and commercial requirements.",
  },
  {
    icon: FaWrench,
    title: "Repair & Maintenance",
    description:
      "Reliable maintenance and service support to help keep your power backup system performing efficiently.",
  },
  {
    icon: FaSearch,
    title: "Product Consultation",
    description:
      "Not sure which inverter or battery is right for you? Get guidance based on your power requirements.",
  },
  {
    icon: FaHeadset,
    title: "After-Sales Support",
    description:
      "Continued assistance after your purchase to help you get the best performance from your power solution.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#041225] text-white">

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24">

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            PROFESSIONAL SUPPORT
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
            Power Solutions.
            <br />

            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
              Professional Service.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            From installation and maintenance to product guidance and
            after-sales support, Sunray VPower is here to help you get the
            most from your power backup system.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/919811313701?text=Hello%20Sunray%20VPower%2C%20I%20need%20service%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
            >
              <FaWhatsapp />
              Get Service Assistance
            </a>

            <a
              href="tel:+919811313701"
              className="flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-semibold text-gray-200 transition duration-300 hover:border-orange-500 hover:text-orange-400"
            >
              <FaPhoneAlt />
              Call Now
            </a>

          </div>

        </div>
      </section>

      {/* Services */}
      <section className="relative px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              WHAT WE DO
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Our Services
            </h2>

            <p className="mt-5 text-gray-400">
              Complete support for your inverter, battery and UPS requirements.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/60 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)]"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-2xl text-orange-500 transition duration-500 group-hover:scale-110 group-hover:bg-orange-500/20">
                    <Icon />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-white transition group-hover:text-orange-400">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {service.description}
                  </p>

                  <a
                    href="https://wa.me/919811313701?text=Hello%20Sunray%20VPower%2C%20I%20need%20help%20with%20your%20service."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-400 transition-all duration-300 hover:gap-3"
                  >
                    Enquire Now
                    <span>→</span>
                  </a>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#07182F] px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                WHY CHOOSE US
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Support You Can
                <span className="text-orange-500"> Rely On</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-gray-400">
                We believe a power solution is more than just a product.
                Professional guidance, proper installation and dependable
                support are equally important.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold text-white">
                  Genuine Products
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Trusted products from leading power solution brands.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold text-white">
                  Professional Assistance
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Guidance to help you choose the right solution.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold text-white">
                  Reliable Support
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Assistance before and after your purchase.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold text-white">
                  Customer Focused
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Solutions designed around your power requirements.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-4xl rounded-3xl border border-orange-500/20 bg-orange-500/5 px-6 py-14 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            NEED ASSISTANCE?
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Let Us Help You Find the Right Power Solution
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Talk to our team about your inverter, battery, UPS or service
            requirements.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/919811313701?text=Hello%20Sunray%20VPower%2C%20I%20need%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-semibold transition hover:scale-105 hover:bg-orange-600"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>

            <a
              href="tel:+919811313701"
              className="flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-semibold text-gray-200 transition hover:border-orange-500 hover:text-orange-400"
            >
              <FaPhoneAlt />
              Call Now
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}