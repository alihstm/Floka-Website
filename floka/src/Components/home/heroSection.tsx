import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Illustration from "../../assets/Material/illustration4.svg";

const HeroSection = () => {
  const handleScroll = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <main
      id="hero"
      className="flex sm:flex-row flex-col items-center justify-between w-full sm:px-[10rem] px-[1rem] sm:mt-40 mt-50"
    >
      <div className="flex flex-col items-center sm:w-auto w-full sm:gap-5 gap-4">
        <div
          className="flex flex-col sm:items-start items-center w-full sm:gap-8 gap-5 py-10 sm:pl-20 pl-6 sm:pr-8 pr-6 
                    bg-white/0 border-1 border-white backdrop-blur-xl rounded-2xl"
        >
          <h1 className="sm:text-4xl text-2xl font-bold kalame-font">
            تیم توسعه نرم افزار فلوکا
          </h1>
          <p className="sm:text-xl text-lg text-primary font-medium vazir-font">
            ساختن آینده، هربار با یک خط کد
          </p>
        </div>
        <button
          onClick={() => handleScroll()}
          className="sm:text-lg text-sm alexandria-font font-bold text-bg py-5 w-full bg-primary backdrop-blur-xl rounded-lg transition duration-150 hover:cursor-pointer active:scale-95 "
        >
          مشاهده نمونه کارها
        </button>
      </div>
      <img
        data-aos="fade-right"
        className="align-top sm:w-120 sm:h-120 w-90 h-90"
        src={Illustration}
        alt="Illustration"
      />
    </main>
  );
};
export default HeroSection;
