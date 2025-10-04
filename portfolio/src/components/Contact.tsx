import { useForm } from "react-hook-form";
import { GoMail } from "react-icons/go";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import Button from "./ui/Button";
import Header from "./ui/Header";
import "../assets/styles/contact.css";
import SocialCard from "./ui/SocialCard";
import {
  MdOutlineMailOutline,
  MdOutlinePhone,
  MdOutlineMyLocation,
} from "react-icons/md";

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
    name: string;
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
    <section id="contact">
      <Header content="Let's Work Together" />
      <p>Ready to bring your ideas to life? Let's collaborate on your next project.</p>
      <div className="content">
        <div className="form">
          <h2>Send me a message 👋 </h2>
          <p>
            I'd love to hear about your project and discuss how we can work
            together.
          </p>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="name-group">
              <input
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your full name",
                  },
                })}
              />
              <label htmlFor="name">Name</label>
              {errors?.name && <p>{errors.name.message}</p>}
            </div>
            <div className="email-group">
              <input
                type="text"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter your email",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/i,
                    message: "Sorry, that doesn't look like a valid email.",
                  },
                })}
              />
              <label htmlFor="email">Email</label>
              {errors?.email && <p>{errors.email.message}</p>}
            </div>
            <div className="message-group">
              <textarea {...register("message", { required: true })} />
              <label htmlFor="message">Message</label>
            </div>
            <Button
              primary
              type="submit"
              buttonText="Send Message"
              fontSize="small"
              paddingX="5rem"
              paddingY=".5rem"
            />
          </form>
        </div>
        <div className="connect">
          <h2>Let's connect 🧲</h2>
          <div className="connect-content">
            <p>
              Feel free to reach out through any of these channels. I am always
              excited to discuss new opportunities.
            </p>
            <div>
              <SocialCard
                text="ehiseromz@gmail.com"
                icon={<MdOutlineMailOutline />}
                subText="Email"
              />
            </div>
            <div>
              <SocialCard
                text="+2347064567012"
                icon={<MdOutlinePhone />}
                subText="Phone"
              />
            </div>
            <div>
              <SocialCard
                text="Lagos, NG"
                icon={<MdOutlineMyLocation />}
                subText="Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
