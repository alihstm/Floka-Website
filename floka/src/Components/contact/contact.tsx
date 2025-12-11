import { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { validateContactForm, sendEmail } from "../extra/email";
import Illustration from "../../assets/Material/illustration9.svg";
import {
  FaUserTie,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { MdAlternateEmail, MdMessage } from "react-icons/md";

const inputs = [
  { id: 1, name: "user_name", placeholder: "نام شما", icon: FaUserTie },
  {
    id: 2,
    name: "user_email",
    placeholder: "ایمیل شما",
    icon: MdAlternateEmail,
  },
  {
    id: 3,
    name: "message",
    placeholder: "پیام شما",
    icon: MdMessage,
    textarea: true,
  },
];

const socials = [
  {
    id: 1,
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/FlokaTeam",
    color: "#0A66C2",
  },
  {
    id: 2,
    icon: FaTelegramPlane,
    href: "https://t.me/ُRoeinyousefi",
    color: "#0088cc",
  },
  {
    id: 3,
    icon: FaWhatsapp,
    href: "https://wa.me/989050967501",
    color: "#25D366",
  },
];

const InputField = ({ input, error }: { input: any; error: boolean }) => {
  const Icon = input.icon;
  return (
    <div
      className={`flex items-center w-full bg-white/10 border rounded-xl px-5 py-4 gap-4 transition-all duration-300
      ${
        error ? "border-red-500" : "border-white/20"
      } focus-within:border-primary`}
    >
      <Icon
        className={`text-2xl text-primary ${input.textarea ? "mb-17" : ""}`}
      />
      {input.textarea ? (
        <textarea
          name={input.name}
          placeholder={input.placeholder}
          rows={4}
          className="kalame-font bg-transparent w-full outline-none text-white placeholder-gray-400 resize-none"
        />
      ) : (
        <input
          type={input.type || "text"}
          name={input.name}
          placeholder={input.placeholder}
          className="kalame-font bg-transparent w-full outline-none text-white placeholder-[#99a1af]"
        />
      )}
    </div>
  );
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });
  const [buttonText, setButtonText] = useState("ارسال پیام");
  const [buttonSent, setButtonSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const data = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    const newErrors = validateContactForm(data);
    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      try {
        await sendEmail(form.current);
        form.current.reset();
        setErrors({ user_name: false, user_email: false, message: false });

        setButtonText("ارسال شد!");
        setButtonSent(true);
        setTimeout(() => {
          setButtonText("ارسال پیام");
          setButtonSent(false);
        }, 3000);
      } catch (err) {
        console.error("خطا در ارسال پیام:", err);
      }
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <main
      id="contact"
      className="flex flex-col items-center justify-center w-full sm:h-[38rem] h-[58rem] sm:px-[10rem] px-[1rem] sm:mt-50 mt-40"
    >
      <h1 className="text-5xl font-bold kalame-font sm:mb-20 mb-5">
        تماس با ما
      </h1>

      <div className="flex sm:flex-row flex-col items-center justify-between w-full h-full">
        <div className="flex flex-col items-center sm:w-[45%] sm:gap-5">
          <img
            data-aos="fade-left"
            className="sm:w-full w-70 h-70 sm:h-auto"
            src={Illustration}
            alt="Illustration"
          />
          <div
            className="
    flex gap-4 md:z-50
    flex-row justify-center items-center
    md:flex-col md:fixed md:left-5 md:top-1/2 md:-translate-y-1/2 sm:mb-0 mb-10
  "
          >
            {socials.map(({ id, icon: Icon, href, color }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                className="flex items-center justify-center p-3 rounded-full bg-[#f3f3f3]/10 backdrop-blur-xl border border-[#f3f3f3]/20 transition-all duration-150"
                style={{ "--hover-color": color } as React.CSSProperties}
              >
                <Icon
                  className="text-2xl transition-colors duration-150"
                  style={{ color }}
                />
                <style>{`
                  a:hover { background-color: var(--hover-color) !important; }
                  a:hover svg { color: white !important; }
                `}</style>
              </a>
            ))}
          </div>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-between sm:w-[40%] w-full h-full bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-primary shadow-lg"
        >
          <div className="flex flex-col w-full gap-6">
            {inputs.map((input) => (
              <InputField
                key={input.id}
                input={input}
                error={errors[input.name as keyof typeof errors]}
              />
            ))}
          </div>

          <button
            type="submit"
            className={`vazir-font py-4 w-full border border-primary text-md text-white hover:!text-[#000000] hover:cursor-pointer rounded-xl font-bold transition duration-150 active:scale-95 ${
              buttonSent
                ? "bg-secondary !text-black border-none"
                : "hover:bg-[#b9ff66]"
            }`}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
