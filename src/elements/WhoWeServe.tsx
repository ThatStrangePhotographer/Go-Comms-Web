export default function WhoWeServe() {
  const sectors = [
    {
      title: "EVENT OPERATIONS",
      desc: "Large-scale events, festivals, and public gatherings requiring reliable comms.",
    },
    {
      title: "SECURITY TEAMS",
      desc: "Private security, patrol units, and rapid response personnel.",
    },
    {
      title: "EMERGENCY SUPPORT",
      desc: "Ad-hoc comms for incidents, SAR teams, and resilience operations.",
    },
    {
      title: "INDUSTRIAL SITES",
      desc: "Factories, warehouses, and logistics requiring coordinated radio networks.",
    },
    {
      title: "VOLUNTEER GROUPS",
      desc: "Community responders, marshals, and organised volunteer teams.",
    },
    {
      title: "LOCAL AUTHORITIES",
      desc: "Councils, event safety teams, and public service operations.",
    },
  ];

  return (
    <section
      id="who-we-serve"
      className="w-full bg-black text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-12 text-center">
          WHO WE SERVE
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {sectors.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 p-8 rounded-lg bg-white/5 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold tracking-wide mb-3">
                {item.title}
              </h3>
              <p className="text-sm opacity-80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
