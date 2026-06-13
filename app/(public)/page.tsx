import Hero from "@/components/home/Hero";
import Programs from "@/components/home/Programs";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CtaBanner from "@/components/home/CtaBanner";
import LocationContact from "@/components/home/LocationContact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Programs />
      <WhyChooseUs />
      <CtaBanner />
      <LocationContact />
    </>
  );
}
