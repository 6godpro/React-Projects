import emailjs from "@emailjs/browser";

interface MessageProps {
  name: string;
  email: string;
  message: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID=import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUB_KEY=import.meta.env.VITE_EMAILJS_PUB_KEY

const sendMessage = async (data: MessageProps) => {
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    { from_email: data.email, message: data.message },
    PUB_KEY
  );
};

export default sendMessage;
