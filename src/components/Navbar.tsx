import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo + Company Name */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Sunray VPower"
            className="h-12 w-auto object-contain"
          />

          <h1 className="text-2xl font-bold">
            <span className="text-white">SUNRAY</span>{" "}
            <span className="text-orange-500">VPOWER</span>
          </h1>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="transition hover:text-orange-500">
            Home
          </Link>

          <Link href="/products" className="transition hover:text-orange-500">
            Products
          </Link>

          <Link href="/services" className="transition hover:text-orange-500">
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
  className="cursor-pointer rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]"
>
  Call Now!!!
</a>
      </div>
    </nav>
  );
}