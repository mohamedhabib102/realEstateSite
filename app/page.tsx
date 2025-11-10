import { 
  AboutSection,
  ContactSection,
  HeroSection, 
  ServicesSection 
} from "@/components/home";


export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
