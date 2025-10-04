import "../assets/styles/about.css";
import Header from "./ui/Header";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const skills = [
    "GSAP, Framer Motion, & Chakra UI",
    "Performance Optimization",
    "Modern CSS & Tailwind",
    "React & TypeScript",
    "Responsive Design",
  ];

  return (
    <section id="about">
      <Header content="About Me" />
      <div className="content">
        <div className="about-me">
          <p>
            I'm a passionate Frontend Developer with over 3 years of experience
            creating digital experiences that combine beautiful design with
            cutting-edge technology. I specialize in building responsive,
            accessible, and performant web applications using modern frameworks
            and tools.
          </p>
          <p>
            My approach blends technical expertise with design thinking,
            ensuring that every project not only functions flawlessly but also
            provides an exceptional user experience. I believe that great
            interfaces are invisible, they work so well that users don't have to
            think about them.
          </p>
        </div>
        <div className="skill-section">
          <h3>Key Highlights</h3>
          <div className="skills">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="skill"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
