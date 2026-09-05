import GlobalNav from "./components/GlobalNav";
import HeroSection from "./components/HeroSection";
import CountdownSection from "./components/CountdownSection";
import EventsSection from "./components/EventsSection";
import VenueSection from "./components/VenueSection";
import TravelSection from "./components/TravelSection";
import DressCodeSection from "./components/DressCodeSection";
import RSVPSection from "./components/RSVPSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <GlobalNav />
      <HeroSection />
      <CountdownSection />
      <EventsSection />
      <VenueSection />
      <TravelSection />
      <DressCodeSection />
      <RSVPSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
