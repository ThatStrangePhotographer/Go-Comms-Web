import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-widest text-white"
        >
          GO COMMS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-sm tracking-wide text-white">
          <Link to="/" className="hover:text-green-400">HOME</Link>
          <Link to="/services" className="hover:text-green-400">SERVICES</Link>
          <Link to="/pricing" className="hover:text-green-400">PRICING</Link>
          <Link to="/shop" className="hover:text-green-400">SHOP</Link>
          <Link to="/dashboard" className="hover:text-green-400">DASHBOARD</Link>
          <Link to="/contact" className="hover:text-green-400">CONTACT</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 flex flex-col gap-4 text-white tracking-wide">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-green-400">HOME</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="hover:text-green-400">SERVICES</Link>
          <Link to="/pricing" onClick={() => setOpen(false)} className="hover:text-green-400">PRICING</Link>
          <Link to="/shop" onClick={() => setOpen(false)} className="hover:text-green-400">SHOP</Link>
          <Link to="/dashboard" onClick={() => setOpen(false)} className="hover:text-green-400">DASHBOARD</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-green-400">CONTACT</Link>
        </div>
      )}
    </nav>
  );
}
