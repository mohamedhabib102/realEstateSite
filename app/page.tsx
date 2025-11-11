import { 
  About, 
  ContactSection, 
  HeroProperties, 
  HeroSection, 
  HeroSlider, 
  Properties, 
  Services,
  Testimonials
} from "@/components/home";
import StatsSection from "@/components/ui/AnimateCounter";


export default function Home() {
  return (
    <main className="text-black">
      <HeroSection />
      <About />
      <StatsSection/>
      <Services />
      <Properties />
      <HeroSlider />
      <Testimonials />
      <HeroProperties />
      <ContactSection />
    </main>
  );
}
