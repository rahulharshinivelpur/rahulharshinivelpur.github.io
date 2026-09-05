import GlobalNav from "./components/GlobalNav";
import InvitationHero from "./components/InvitationHero";
import CountdownSection from "./components/CountdownSection";
import OurStorySection from "./components/OurStorySection";
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
      <InvitationHero />
      <CountdownSection />
      <OurStorySection />
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
