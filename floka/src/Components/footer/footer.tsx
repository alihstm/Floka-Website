import Logo from "../../assets/Material/logo3.png";

const Footer = () => {
  return (
    <main
      id="footer"
      className="flex flex-col items-center justify-between border-t-2 border-[#B9FF66] backdrop-blur-3xl bg-secondary/70 w-full h-[10rem] py-[2rem] sm:mt-35 mt-30"
    >
      <div className="flex flex-row items-center justify-between gap-5">
        <h1 className="text-3xl text-primary letter font-bold DM-font animation-float">
          Floka
        </h1>
        <img
          src={Logo}
          className="w-14 h-14 rounded-full animation-float"
          alt="Logo"
        />
      </div>
      <p className="sm:text-lg text-sm vazir-font">
        © 2025 <span className="DM-font">Floka</span>. تمامی حقوق محفوظ است.
      </p>
    </main>
  );
};
export default Footer;
