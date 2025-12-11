import emailjs from "@emailjs/browser";

export const validateContactForm = (data: {
  user_name: string;
  user_email: string;
  message: string;
}): { user_name: boolean; user_email: boolean; message: boolean } => {
  return {
    user_name: data.user_name.trim() === "",
    user_email:
      data.user_email.trim() === "" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.user_email),
    message: data.message.trim() === "",
  };
};

export const sendEmail = async (form: HTMLFormElement | null) => {
  if (!form) return;
  await emailjs.sendForm(
    "service_ivh32rh",
    "template_t5yx2db",
    form,
    "MWC-cg9Ga1vPqiKN1"
  );
};
