import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-[#07182F]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">

        {/* Logo + Company Name */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <img
            src="/logo.png"
            alt="Sunray VPower"
            className="h-9 w-auto object-contain sm:h-12"
          />

          <h1 className="text-lg font-bold leading-tight sm:text-2xl">
            <span className="text-white">SUNRAY</span>{" "}
            <span className="text-orange-500">VPOWER</span>
          </h1>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="transition hover:text-orange-500"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="transition hover:text-orange-500"
          >
            Products
          </Link>

          <Link
            href="/services"
            className="transition hover:text-orange-500"
          >
            Services
          </Link>

          <a
            href="#about"
            className="transition hover:text-orange-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition hover:text-orange-500"
          >
            Contact
          </a>
        </div>

        {/* Call Now Button */}
        <a
          href="tel:+919811313701"
          className="rounded-lg bg-orange-500 px-3 py-2 text-xs font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] sm:px-5 sm:py-2 sm:text-sm"
        >
          Call Now
        </a>

      </div>
    </nav>
  );
}