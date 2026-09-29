import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedWork from "@/components/home/FeaturedWork";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ServicesOverview />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <FinalCTA />
    </>
  );
}