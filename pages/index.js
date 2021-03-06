import Rewards from "../components/Rewards";
import Home from "../components/Home";
import PartnerBrand from "../components/PartnerBrand";
import Roadmap from "../components/Roadmap";
import Compass from "../components/Compass";
import OurConcept from "../components/OurConcept";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div>
      <Home />
      <PartnerBrand />
      <OurConcept />
      <Rewards />
      <Roadmap />
      <Compass />
      <PartnerBrand colorCss="bg-white" textColorCss="text-carefour-blue" />
      <Footer />
      {/* 
      {/*  */}
    </div>
  );
}
