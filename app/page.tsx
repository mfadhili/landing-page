import Navbar from "@/app/navbar/page";
import HeroSection from "@/app/first-section/page";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <Carousel />
        Home page
    </div>
  )
}
