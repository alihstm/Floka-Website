import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/Material/logo3.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", text: "خانه" },
    { id: "about", text: "درباره ما" },
    { id: "projects", text: "پروژه‌ها" },
    { id: "contact", text: "تماس" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="z-50 fixed flex flex-row items-center justify-between border-b-2 border-[#B9FF66] shadow-[0_5px_10px_-1px_#B9FF66] backdrop-blur-xl bg-secondary/60 w-full h-[6rem] sm:px-[10rem] px-[1.5rem] transition-all duration-300">
      <div className="flex flex-row items-center gap-4">
        <h1 className="text-3xl text-primary font-bold DM-font animation-float">
          Floka
        </h1>
        <img
          src={Logo}
          className="w-12 h-12 rounded-full animation-float"
          alt="Logo"
        />
      </div>

      <ul className="kalame-font font-medium hidden sm:flex flex-row items-center gap-8">
        {navItems.map(({ id, text }) => (
          <li
            key={id}
            onClick={() => handleScroll(id)}
            className="relative hover:text-[#B9FF66] text-lg cursor-pointer transition-all duration-200 px-2 py-1 rounded-full before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#B9FF66] before:transition-all before:duration-300 hover:before:w-full"
          >
            {text}
          </li>
        ))}
      </ul>

      <div
        className="sm:hidden text-3xl text-primary cursor-pointer z-[60] transition-transform duration-300 ease-in-out"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <FaTimes className="rotate-90 transition-transform duration-300 ease-in-out" />
        ) : (
          <FaBars className="rotate-0 transition-transform duration-300 ease-in-out" />
        )}
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#000000]/95 backdrop-blur-xl flex flex-col items-center justify-start pt-[8rem] gap-10 kalame-font font-medium text-2xl text-white transform transition-all duration-500 ease-in-out ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map(({ id, text }, index) => (
          <button
            key={id}
            onClick={() => handleScroll(id)}
            className={`hover:text-[#B9FF66] transition-all duration-200 ${
              menuOpen ? `animate-fadeIn delay-[${index * 100}ms]` : ""
            }`}
          >
            {text}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
