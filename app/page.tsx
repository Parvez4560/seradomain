import Navbar from "../components/Navbar";
import HeaderSection from "../components/HeaderSection";
import FeaturesSection from "../components/FeaturesSection";
import FooterSection from "../components/FooterSection";
import TLDCard from "../components/TLDCard";

export default function Home() {
  return (
    <div className="font-sans bg-white dark:bg-black">
      
      {/* Navbar sticky থাকবে */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* বাকি কনটেন্ট */}
        <HeaderSection />
        <TLDCard />
        <FeaturesSection />

      <FooterSection />
    </div>
  );
}