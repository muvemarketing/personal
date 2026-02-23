import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import SoftwarePlatforms from "../components/SoftwarePlatforms";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <SoftwarePlatforms />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
