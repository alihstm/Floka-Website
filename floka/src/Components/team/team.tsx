import aliShabani from "../../assets/Material/prof1.jpg";
import roeinYusefi from "../../assets/Material/prof2.png";
import type { IconType } from "react-icons";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

const members = [
  {
    id: 1,
    name: "علی شعبانی",
    role: "Front-end Developer",
    image: aliShabani,
    socials: [
      {
        title: "instagram",
        link: "https://instagram.com/ali_shabani.25",
        icon: FaInstagram,
        color: "#E1306C",
      },
      {
        title: "linkedin",
        link: "https://www.linkedin.com/in/ali-shabani-8b544b352/",
        icon: FaLinkedin,
        color: "#0A66C2",
      },
      {
        title: "github",
        link: "https://github.com/alihstm",
        icon: FaGithub,
        color: "#000000",
      },
    ],
  },
  {
    id: 2,
    name: "رویین یوسفی تبار",
    role: "Back-end Developer",
    image: roeinYusefi,
    socials: [
      {
        title: "instagram",
        link: "https://instagram.com/roein_pv",
        icon: FaInstagram,
        color: "#E1306C",
      },
      {
        title: "linkedin",
        link: "https://www.linkedin.com/in/roein-yousefi-b794b0292/",
        icon: FaLinkedin,
        color: "#0A66C2",
      },
      {
        title: "github",
        link: "https://github.com/Roein-yousefi",
        icon: FaGithub,
        color: "#000000",
      },
    ],
  },
];

const Team = () => {
  return (
    <main className="flex flex-col items-center w-full min-h-[100vh] py-10 sm:px-20 px-3 gradient-bg">
      <h1 className="sm:text-4xl text-3xl kalame-font text-primary mb-15">
        اعضای تیم
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-15">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center gap-6 bg-black/40 rounded-2xl shadow-md hover:shadow-xl transition-shadow py-15 px-15 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
            />

            <div className="flex flex-col items-center gap-0.5">
              <h3 className="vazir-font text-lg text-white font-semibold mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-[#b9ff66]/90">{member.role}</p>
            </div>

            <div className="flex flex-row items-center justify-between gap-6">
              {member.socials.map((s) => {
                const Icon: IconType = s.icon;
                return (
                  <a
                    className={`flex items-center justify-center rounded-full sm:p-3 p-2 transition-colors duration-150 bg-white`}
                    href={s.link}
                    style={{ backgroundColor: "#ffffff", color: s.color }}
                    onMouseEnter={(e) => {
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.backgroundColor = s.color;
                      (e.currentTarget.firstChild as HTMLElement).style.color =
                        "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.backgroundColor = "#ffffff";
                      (e.currentTarget.firstChild as HTMLElement).style.color =
                        s.color;
                    }}
                  >
                    <Icon
                      size={25}
                      className="text-xl transition-colors duration-200"
                      style={{ color: s.color }}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Team;
