import { useForm } from "react-hook-form";
import { GoMail } from "react-icons/go";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import Button from "./UI/Button";
import Header from "./UI/Header";
import SocialCard from "./UI/SocialCard";
import "../assets/styles/contact.css";

const Contact = () => {
  const socials = [
    {
      text: "Email",
      subText: "ehiseromz@gmail.com",
      icon: <GoMail />,
    },
    {
      text: "GitHub",
      subText: "6godpro",
      icon: <FaGithub />,
    },
    {
      text: "LinkedIn",
      subText: "Connect with me",
      icon: <FaLinkedin />,
    },
  ];

  interface FormValues {
    email: string;
    message: string;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    await emailjs
      .send(
        "service_ichkf3d",
        "template_9mv0bjq",
        { from_email: data.email, message: data.message },
        "8fyGZVkg62uXJ5QNP"
      )
      .then(() => {
        alert("Message sent");
        reset();
      })
      .catch(() => {
        alert("Message sending failed");
      });
  };

  return (
    <div className="contact">
      <Header content="Let's Work Together" />
      <div className="details">
        <div className="contact-left">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Enter email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/i,
                  message: "Sorry, that doesn't look like a valid email.",
                },
              })}
            />
            {errors?.email && <p>{errors.email.message}</p>}
            <textarea
              placeholder="Message here..."
              {...register("message", { required: true })}
            ></textarea>
            <Button
              primary
              type="submit"
              buttonText="Send Message"
              fontSize="x-small"
              paddingX=".5rem"
              paddingY="2rem"
            />
          </form>
        </div>
        <div className="contact-right">
          <p>
            I'm always interested in new opportunities and exciting projects.
            Feel free to reach out if you'd like to collaborate!
          </p>
          <div className="social-cards">
            {socials.map((social) => (
              <SocialCard
                key={social.text}
                icon={social.icon}
                subText={social.subText}
                text={social.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
