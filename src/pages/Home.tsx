import Navbar from "../components/Navbar";
import Hero from "../elements/Hero";
import Features from "../elements/Features";
import Services from "../elements/Services";
import WhoWeServe from "../elements/WhoWeServe";
import Pricing from "../elements/Pricing";
import Contact from "../elements/Contact";
import Footer from "../elements/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeServe />
      <Services />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
