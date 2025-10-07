import emailjs from "emailjs-com";

interface MessageProps {
  name: string;
  email: string;
  message: string;
}

const sendMessage = async (data: MessageProps) => {
  await emailjs.send(
    "service_ichkf3d",
    "template_9mv0bjq",
    { from_email: data.email, message: data.message },
    "8fyGZVkg62uXJ5QNP"
  );
};

export default sendMessage;
