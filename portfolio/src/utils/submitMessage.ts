import { notifyLoading, updateNotify } from "../components/utils/toast";
import emailjs from "emailjs-com";

interface MessageProps {
  name: string;
  email: string;
  message: string;
}

const sendMessage = async (data: MessageProps) => {
  const id = notifyLoading(
    "Sending Message",
    "Your message is being delivered."
  );

  await emailjs
    .send(
      "service_ichkf3d",
      "template_9mv0bjq",
      { from_email: data.email, message: data.message },
      "8fyGZVkg62uXJ5QNP"
    )
    .then(() => {
      updateNotify(
        id,
        "Message sent",
        "Your message was sent successfully!",
        "success"
      );
    })
    .catch(() => {
      updateNotify(
        id,
        "Message not delivered",
        "There was an error in delivering your message.",
        "error"
      );
    });
};

export default sendMessage;
