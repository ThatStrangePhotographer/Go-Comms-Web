export default function Pricing() {
  const tiers = [
    {
      title: "STANDARD DEPLOYMENT",
      price: "£350 / DAY",
      desc: "Ideal for small events requiring reliable comms and basic operator support.",
      features: [
        "Up to 10 radios",
        "1 on-site operator",
        "Basic repeater (if required)",
        "Standard event support",
      ],
    },
    {
      title: "ENHANCED DEPLOYMENT",
      price: "£650 / DAY",
      desc: "For medium events needing extended coverage, additional radios, and advanced support.",
      features: [
        "Up to 25 radios",
        "2 on-site operators",
        "High-power repeater",
        "Coverage mapping",
        "Incident logging",
      ],
    },
    {
      title: "FULL OPERATIONS PACKAGE",
      price: "£1200 / DAY",
      desc: "Complete comms solution for large-scale events and critical operations.",
      features: [
        "Up to 50 radios",
        "3 on-site operators",
        "Dual-repeater setup",
        "Live dashboard",
        "GPS tracking (if supported)",
        "Priority response",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full bg-black text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-12 text-center">
          EVENT PRICING
        </h2>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className="border border-white/10 bg-white/5 rounded-lg p-8 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold tracking-wide mb-2">
                {tier.title}
              </h3>

              <p className="text-green-400 text-lg font-bold tracking-wider mb-4">
                {tier.price}
              </p>

              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                {tier.desc}
              </p>

              <ul className="flex flex-col gap-2 text-sm opacity-80">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs opacity-50 tracking-widest mt-12">
          Custom deployments available — contact us for tailored operational packages.
        </p>
      </div>
    </section>
  );
}
