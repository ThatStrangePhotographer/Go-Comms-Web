export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Column 1 — Branding */}
        <div>
          <h3 className="text-xl font-semibold tracking-widest mb-4">
            GO COMMS
          </h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Tactical Communications • Field Operations • Deployable Systems
          </p>
        </div>

        {/* Column 2 — Navigation */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest mb-4 opacity-80">
            NAVIGATION
          </h4>
          <ul className="flex flex-col gap-2 text-sm opacity-70">
            <li className="hover:text-green-400 cursor-pointer">ABOUT</li>
            <li className="hover:text-green-400 cursor-pointer">SERVICES</li>
            <li className="hover:text-green-400 cursor-pointer">DEPLOYMENT</li>
            <li className="hover:text-green-400 cursor-pointer">PERSONNEL</li>
            <li className="hover:text-green-400 cursor-pointer">CONTACT</li>
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest mb-4 opacity-80">
            CONTACT
          </h4>
          <p className="text-sm opacity-70">ops@gocomms.uk</p>
          <p className="text-sm opacity-70 mt-2">+44 0000 000000</p>
          <p className="text-sm opacity-70 mt-2">
            Medway, Kent<br />United Kingdom
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs opacity-50 tracking-widest">
        © {new Date().getFullYear()} GO COMMS — ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
