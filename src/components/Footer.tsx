import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
  id="footer"
  className="relative overflow-hidden border-t border-white/10 bg-[#041225]"
>

      {/* Orange Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div id="about">
           <h2 className="text-2xl font-bold text-orange-500">
              SUNRAY VPOWER
           </h2>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
               Reliable power solutions for homes and businesses, backed by
                trusted brands and professional support.
            </p>

             <p className="mt-5 text-sm font-semibold text-gray-300">
                 Reliable Power. Uninterrupted Future.
             </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                href="/#hero"
                className="block text-gray-400 transition hover:text-orange-500"
                >
                    Home
              </Link>

              <Link
                href="/products"
                className="block text-gray-400 transition hover:text-orange-500"
              >
                Products
              </Link>

              <Link
                href="/services"
                className="block text-gray-400 transition hover:text-orange-500"
              >
                Services
              </Link>

              <Link
                 href="/#about"
                 className="block text-gray-400 transition hover:text-orange-500"
              >
                  About Us
              </Link>

               <Link
                  href="/#contact"
                  className="block text-gray-400 transition hover:text-orange-500"
                >
                   Contact
              </Link>

            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Our Products
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                href="/products"
                className="block text-gray-400 transition hover:text-orange-500"
              >
                Inverters
              </Link>

              <Link
                href="/products"
                className="block text-gray-400 transition hover:text-orange-500"
              >
                Batteries
              </Link>

              <Link
                href="/products"
                className="block text-gray-400 transition hover:text-orange-500"
              >
                UPS Systems
              </Link>

              <Link
                href="/products"
                className="block text-gray-400 transition hover:text-orange-500"
              >
                Luminous
              </Link>

              <Link
                href="/products"
                className="block text-gray-400 transition hover:text-orange-500"
              >
                Exide
              </Link>

              <Link
                href="/products"
                className="block text-gray-400 transition hover:text-orange-500"
              >
                Livfast
              </Link>

              <Link
                href="/products"
                className="block text-gray-400 transition hover:text-orange-500"
              >
                Amaron
              </Link>

            </div>
          </div>

          {/* Contact */}
            <div id="contact">
            <h3 className="text-lg font-semibold text-white">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-5">

              {/* Call */}
              <a
                href="tel:+919811313701"
                className="flex items-center gap-3 text-gray-400 transition hover:text-orange-500"
              >
                <FaPhoneAlt className="text-orange-500" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919811313701?text=Hello%20Sunray%20VPower"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 transition hover:text-green-400"
              >
                <FaWhatsapp className="text-green-500" />
                <span>WhatsApp</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="mt-1 text-orange-500" />
                <span>
                  22,Vinayaka Nagar, Near Rama Temple, Bagalur Cross-560063
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-8 text-center">

          <h3 className="text-2xl font-bold text-white">
            Need Help Choosing the Right Power Solution?
          </h3>

          <p className="mt-3 text-gray-400">
            Talk to us and find the right inverter, battery or UPS for your
            needs.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">

            {/* Call Button */}
            <a
              href="tel:+919811313701"
              className="flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-orange-600"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919811313701?text=Hello%20Sunray%20VPower"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-green-500 px-6 py-3 font-semibold text-green-400 transition hover:scale-105 hover:bg-green-500 hover:text-white"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">

          <p className="text-sm text-gray-500">
            © 2026 Sunray VPower. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}