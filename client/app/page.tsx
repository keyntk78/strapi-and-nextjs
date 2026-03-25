import Header from "../components/layout/Header";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ProjectsSection from "../components/home/ProjectsSection";
import StatsSection from "../components/home/StatsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import Footer from "../components/layout/Footer";
import { fetchGlobalData } from "../lib/api";

export default async function Home() {
  const globalData = await fetchGlobalData();

  return (
    <>
      <Header globalData={globalData} />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <StatsSection />
        <TestimonialsSection />
      </main>
      <Footer globalData={globalData} />
    </>
  );
}
