import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Illustration2 from "../../assets/Material/illustration8.svg";
import { FaReact, FaPython } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const About = (): any => {
  const navigate = useNavigate();

  const boxes = [
    { id: 1, tech: "React.js & TypeScript", icon: FaReact },
    { id: 2, tech: "Python & Django", icon: FaPython },
  ];

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <main
      id="about"
      className="flex flex-col items-center w-full sm:h-[33rem] h-[52rem] sm:px-[10rem] px-[1rem] sm:mt-50 mt-40"
    >
      <h1 className="sm:text-5xl text-4xl font-bold kalame-font sm:mb-20 mb-5">
        درباره تیم ما
      </h1>

      <div className="flex sm:flex-row flex-col items-start justify-between w-full h-full">
        <img
          data-aos="fade-left"
          className="w-110 h-auto"
          src={Illustration2}
          alt="Illustration2"
        />

        <div className="flex flex-col items-center justify-between sm:w-[50%] w-full sm:h-9/10 sm:gap-0 gap-5">
          <div className="flex flex-col items-start justify-between w-full sm:gap-5 gap-3">
            <h2 className="sm:text-3xl text-2xl font-bold text-primary kalame-font">
              تیمی از برنامه‌نویسان با انگیزه
            </h2>
            <p className="text-gray-400 text-md kalame-font sm:w-135 w-full">
              یه تیم، یه هدف، یه عشق مشترک: کد زدن و ساختن چیزایی که دنیا رو یه
              ذره بهتر کنه. چون ما باور داریم تغییر از همینجا شروع میشه.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            {boxes.map((box) => {
              const Icon = box.icon;
              return (
                <div
                  key={box.id}
                  className="flex flex-row items-center justify-start sm:py-5 py-4 pl-20 pr-8 w-full border-l-4 border-primary backdrop-blur-xl hover:bg-[rgba(186,255,102,0.25)] hover:cursor-pointer rounded-xl gap-4 transition duration-300 hover:translate-x-3 hover:"
                >
                  <Icon className="text-4xl text-primary" />
                  <p className="font-semibold text-white">{box.tech}</p>
                </div>
              );
            })}
            <button
              onClick={() => navigate(`/team`)}
              className="flex items-center justify-center sm:py-5 py-4 px-20 w-full text-black vazir-font font-bold bg-[#b9ff66] hover:bg-[#b9ff66]/20 hover:!text-white active:scale-95 backdrop-blur-xl hover:cursor-pointer rounded-xl gap-4 transition duration-150"
            >
              مشاهده اعضای تیم
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default About;
