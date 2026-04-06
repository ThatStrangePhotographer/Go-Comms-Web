export default function Features() {
  const features = [
    {
      title: "REAL-TIME LOCATION",
      desc: "Track team positions with live GPS updates for improved coordination.",
    },
    {
      title: "ENCRYPTED COMMS",
      desc: "Secure digital voice channels with modern encryption standards.",
    },
    {
      title: "DEPLOYABLE NETWORKS",
      desc: "Rapid setup mesh and repeater systems for field operations.",
    },
    {
      title: "DEVICE MANAGEMENT",
      desc: "Remote programming, monitoring, and diagnostics for all radios.",
    },
    {
      title: "EVENT DASHBOARD",
      desc: "Live status board for operators, channels, and incident logs.",
    },
    {
      title: "CROSS-PLATFORM",
      desc: "Compatible with DMR, SDR, LTE, and hybrid communication stacks.",
    },
  ];

  return (
    <section
      id="features"
      className="w-full bg-black text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-12 text-center">
          FEATURES
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((item, index) => (
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
