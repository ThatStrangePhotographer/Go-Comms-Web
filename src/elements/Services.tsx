export default function Services() {
  const services = [
    {
      title: "EVENT COMMUNICATIONS",
      desc: "Complete radio solutions for events of any scale, including operators, radios, and repeater systems.",
    },
    {
      title: "ON-SITE OPERATORS",
      desc: "Trained comms personnel to manage channels, distribute radios, and maintain operational flow.",
    },
    {
      title: "TAYLORED SOFTWARE",
      desc: "Software taylored to your price point, from basic GPS tracking to full incident management and control room dashboards.",
    },
    {
      title: "CONTROL ROOM SUPPORT",
      desc: "Live incident logging, channel management, and operational oversight for event control rooms.",
    },
    {
      title: "EQUIPMENT HIRE",
      desc: "DMR radios, earpieces, batteries, chargers, and accessories for short or long-term hire.",
    },
    {
      title: "FIELD NETWORKS",
      desc: "Rapid-deploy mesh and SDR-based systems for remote or infrastructure-limited environments.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-black text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-12 text-center">
          SERVICES
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((item, index) => (
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
