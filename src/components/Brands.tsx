const brands = [
  "Luminous",
  "Exide",
  "Amaron",
  "Livfast",
];

export default function Brands() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl text-center">

        <h2 className="text-4xl font-bold text-orange-500">
          Trusted Brands
        </h2>

        <p className="mt-4 text-gray-300">
          We provide genuine products from leading power solution brands.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">

          {brands.map((brand) => (
            <div
              key={brand}
              className="rounded-xl border border-white/10 bg-white/10 p-6 text-xl font-semibold backdrop-blur transition hover:-translate-y-2 hover:border-orange-500"
            >
              {brand}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}