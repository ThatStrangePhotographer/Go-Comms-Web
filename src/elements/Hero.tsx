import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">

      {/* Background media */}
      {isMobile ? (
        <img
          src="https://cdn.gseventphotography.co.uk/Pre-comp%201.00_00_05_14.Still001.bmp"
          alt="GO COMMS Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.gseventphotography.co.uk/HeaderVideo.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full">

        {/* NAVBAR */}
        <nav className="flex justify-between items-center px-8 md:px-12 py-6 text-white">
          <div className="text-xl font-semibold tracking-widest">
            GO COMMS
          </div>

          <div className="hidden md:flex gap-8 text-sm tracking-wide">
            <a className="cursor-pointer hover:text-green-400">ABOUT</a>
            <a className="cursor-pointer hover:text-green-400">SERVICES</a>
            <a className="cursor-pointer hover:text-green-400">DEPLOYMENT</a>
            <a className="cursor-pointer hover:text-green-400">PERSONNEL</a>
            <a className="cursor-pointer hover:text-green-400">CONTACT</a>
          </div>
        </nav>

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center justify-center text-center text-white flex-grow px-4">

          {/* Status indicators */}
          <div className="flex gap-6 mb-6 text-xs tracking-widest text-green-400">
            <span>SECURE</span>
            <span>ACTIVE</span>
            <span>ONLINE</span>
          </div>

          {/* Main text */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest mb-2">
            GO COMMS
          </h1>

          <h2 className="text-xl md:text-2xl tracking-[0.3em] mb-4">
            SEMPER CONNEXI
          </h2>

          <p className="text-sm md:text-lg opacity-80 mb-8">
            Tactical Communications • Field Operations • Deployable Systems
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-green-500 text-black font-semibold tracking-wide rounded-md hover:bg-green-400">
              REQUEST BRIEFING
            </button>

            <button className="px-6 py-3 bg-black/60 border border-white/30 text-white tracking-wide rounded-md hover:bg-black/40">
              INTEL OVERVIEW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
