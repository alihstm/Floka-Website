import HeroSection from "../home/heroSection";
import NavBar from "../home/navbar";
import AnimatedBackground from "../extra/animatedBg";
import About from "../about/about";
import Projects from "../projects/projects";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

const Main = (): any => {
  return (
    <main
      id="home"
      className="relative flex flex-col items-center w-screen max-w-full overflow-x-hidden gradient-bg2 text-white"
    >
      <AnimatedBackground />
      <NavBar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};
export default Main;
