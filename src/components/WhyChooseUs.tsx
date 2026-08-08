const features = [
  {
    icon: "✅",
    title: "Genuine Products",
    description: "100% original products from trusted manufacturers."
  },
  {
    icon: "🏆",
    title: "Trusted Brands",
    description: "We deal with leading power solution brands."
  },
  {
    icon: "🛠️",
    title: "Expert Installation",
    description: "Professional installation by experienced technicians."
  },
  {
    icon: "🛡️",
    title: "Warranty Support",
    description: "Complete assistance for warranty and service."
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    description: "Competitive prices with great value."
  },
  {
    icon: "🤝",
    title: "After Sales Service",
    description: "Reliable support even after purchase."
  }
];


export default function WhyChooseUs() {

  return (

    <section className="bg-[#07182F] px-6 py-20">

      <div className="mx-auto max-w-7xl">


        <div className="text-center">

          <h2 className="text-4xl font-bold text-orange-500">
            Why Choose Sunray VPower?
          </h2>

          <p className="mt-4 text-gray-300">
            Your trusted partner for complete power solutions.
          </p>

        </div>



        <div className="mt-12 grid gap-6 md:grid-cols-3">


          {features.map((item) => (

            <div
              key={item.title}
              className="
              rounded-2xl
              bg-white/10
              p-8
              border
              border-white/10
              transition
              hover:-translate-y-2
              hover:border-orange-500
              "
            >

              <div className="text-4xl">
                {item.icon}
              </div>


              <h3 className="mt-5 text-xl font-bold hover:text-orange-500">
                {item.title}
              </h3>


              <p className="mt-3 text-gray-300">
                {item.description}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>

  );

}