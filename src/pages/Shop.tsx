import Navbar from "../components/Navbar";
import Footer from "../elements/Footer";

export default function Shop() {
  const products = [
    {
      name: "HOBBYIST TIER",
      price: "£50 flat",
      desc: "Entry-level dashboard access for small personal DMR setups.",
      features: [
        "Up to 10 radios included",
        "Extra radios: £1/month each",
        "Basic logging",
        "Live channel activity",
        "Local-only control",
        "No encryption",
        "No nodes",
      ],
    },
    {
      name: "PROFESSIONAL TIER",
      price: "£99–£149 / month",
      desc: "Ideal for event teams, volunteer groups, and semi‑pro operations.",
      features: [
        "Up to 50 radios included",
        "Extra radios: £0.75/month each",
        "GPS support",
        "Basic geofencing",
        "Web integration (OTP, limited control)",
        "Multi-device access",
        "Up to 2 nodes",
      ],
    },
    {
      name: "COMMERCIAL TIER",
      price: "£249–£499 / month",
      desc: "Full‑scale operational dashboard for commercial and mission‑critical deployments.",
      features: [
        "Up to 100 radios included",
        "Extra radios: £0.50/month each",
        "Unlimited nodes",
        "Advanced analytics",
        "Full web integration",
        "API access",
        "Remote radio management (stun/kill)",
        "Multi-site support",
        "Priority support",
      ],
    },
    {
      name: "SDRUNO AUTO‑RECORD PLUGIN",
      price: "FREE",
      desc: "Automatically records audio when SDRUno detects a signal. Perfect for monitoring, scanning, and evidence capture.",
      features: [
        "Auto‑record on signal detect",
        "Lightweight plugin",
        "Zero configuration",
        "Works with SDRUno v1.x",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <main className="w-full bg-black text-white min-h-screen py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold tracking-widest mb-12 text-center">
            SOFTWARE LICENSING
          </h1>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="border border-white/10 bg-white/5 rounded-lg p-8 hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-semibold tracking-wide mb-3">
                  {product.name}
                </h3>

                <p className="text-green-400 text-lg font-bold tracking-wider mb-4">
                  {product.price}
                </p>

                <p className="text-sm opacity-80 leading-relaxed mb-6">
                  {product.desc}
                </p>

                <ul className="flex flex-col gap-2 text-sm opacity-80 mb-6">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full px-6 py-3 bg-green-500 text-black font-semibold tracking-wide rounded-md hover:bg-green-400">
                  {product.price === "FREE" ? "DOWNLOAD" : "SELECT TIER"}
                </button>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <p className="text-center text-xs opacity-50 tracking-widest mt-12">
            Licences activate instantly. Upgrade anytime.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
