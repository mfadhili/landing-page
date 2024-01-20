import Navbar from "@/app/navbar/page";
import HeroSection from "@/app/first-section/page";
import Carousel from "@/components/carousel";
import About from "@/app/second-section/page";
import Pricing from "@/app/third-section/page";

export default function Home() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <Carousel />
        <About />
        <Pricing />
    </div>
  )
}
