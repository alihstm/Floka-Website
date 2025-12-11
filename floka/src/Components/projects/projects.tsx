import { FaRocket, FaCode, FaRobot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Projects = (): any => {
  const navigate = useNavigate();
  const boxes = [
    {
      id: 1,
      title: "وب اپلیکیشن",
      des: "توسعه وب‌سایت‌های مدرن و ریسپانسیو",
      icon: FaRocket,
      techs: ["React", "TypeScript", "Django"],
    },
    {
      id: 2,
      title: "بات تلگرام",
      des: "ساخت بات‌های کاربردی در تلگرام",
      icon: FaRobot,
      techs: ["Python"],
    },
    {
      id: 3,
      title: "پورتفولیو",
      des: "طراحی و توسعه وب‌سایت‌های  نمونه کار",
      icon: FaCode,
      techs: ["React", "Tailwind CSS"],
    },
  ];
  return (
    <main
      id="projects"
      className="flex flex-col items-center w-full sm:h-[30rem] h-[72rem] sm:px-[10rem] p-[1rem] sm:mt-50 mt-40"
    >
      <h1 className="sm:text-5xl text-4xl font-bold kalame-font sm:mb-20 mb-15">
        پروژه‌های ما
      </h1>

      <div className="flex sm:flex-row flex-col items-center justify-between w-full h-full">
        {boxes.map((box) => {
          const Icon = box.icon;
          return (
            <div
              key={box.id}
              onClick={() => navigate(`/works/${box.id}`)}
              className="
    flex flex-col items-center justify-between 
    sm:w-[32%] w-full sm:h-full h-[32%] sm:px-[3rem] px-[1rem] sm:py-[3rem] py-[3rem] rounded-2xl 
    bg-black/50 backdrop-blur-xl 
    border-1 border-transparent 
    transition-all duration-300 
    hover:border-[#b9ff66] 
    hover:shadow-[0_0_20px_#b9ff66,0_0_20px_#b9ff66_inset]
    hover:-translate-y-2
    hover:cursor-pointer
  "
            >
              <div className="flex flex-col items-center justify-between w-full h-[70%]">
                <Icon className="text-4xl text-primary spinning-animation" />

                <div className="flex flex-col items-center text-center gap-4">
                  <h2 className="text-2xl font-bold kalame-font text-white transition-colors duration-150">
                    {box.title}
                  </h2>
                  <p className="text-secondary vazir-font text-lg leading-relaxed">
                    {box.des}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center flex-wrap gap-3 w-full">
                {box.techs.map((tech, index) => {
                  return (
                    <div
                      key={index}
                      className="px-4 py-2 rounded-full bg-[#b9ff66]/10 border border-[#b9ff66]/30 text-primary vazir-font text-sm font-medium hover:bg-[#b9ff66] hover:!text-black transition-all duration-150 cursor-pointer"
                    >
                      <span>{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Projects;
