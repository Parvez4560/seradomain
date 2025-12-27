import Navbar from "../components/Navbar";
import HeaderSection from "../components/HeaderSection";
import FeaturesSection from "../components/FeaturesSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <div className="font-sans bg-white dark:bg-black">
      
      {/* Navbar sticky থাকবে */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* বাকি কনটেন্ট */}
        <HeaderSection />
        <FeaturesSection />
      <FooterSection />
    </div>
  );
}