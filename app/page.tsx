// import PhotographersMap from "@/components/photographers-map";
import FeaturedPhotographers from "@/components/Featured-Photographers";
import Hero from "@/components/Hero";
import LatestPhotoShoots from "@/components/LatestPhotoShoots";
import Tags from "@/components/Tags";
import Testimonials from "@/components/Testimonials";
import TopLocations from "@/components/TopLocations";
import { MapComponent } from "@/components/MapComponent";

export default function Home() {
  return (
    <>
    <Hero/>
    <Tags/>
    <FeaturedPhotographers/>
    <TopLocations/>
    <LatestPhotoShoots/>
    <Testimonials/>
    <MapComponent/>
    </>
  );
}
