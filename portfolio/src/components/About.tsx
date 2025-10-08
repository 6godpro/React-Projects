import "@/assets/styles/about.css";
import Header from "./ui/Header";
import { motion } from "framer-motion";
import {
  LuCode,
  LuPalette,
  LuZap,
  LuMonitor,
  LuSmartphone,
  LuGlobe,
} from "react-icons/lu";

const About = () => {
  const highlights = [
    "GSAP, Framer Motion, & Chakra UI",
    "Performance Optimization",
    "Modern CSS & Tailwind",
    "React & TypeScript",
    "Responsive Design",
  ];

  const skills = [
    {
      category: "Frontend Technologies",
      icon: LuCode,
      items: ["React", "TypeScript", "Next.js", "Vue.js", "JavaScript ES6+"],
    },
    {
      category: "Styling & Design",
      icon: LuPalette,
      items: [
        "Tailwind CSS",
        "Styled Components",
        "SASS/SCSS",
        "CSS Grid & Flexbox",
        "Figma",
      ],
    },
    {
      category: "Animation & Interaction",
      icon: LuZap,
      items: ["Framer Motion", "GSAP", "CSS Animations"],
    },
    {
      category: "Development Tools",
      icon: LuMonitor,
      items: ["Git & GitHub", "Webpack", "Vite", "ESLint", "Prettier"],
    },
    {
      category: "UI/UX Design",
      icon: LuSmartphone,
      items: ["Responsive Design", "Accessibility", "Design Systems"],
    },
    {
      category: "Performance & SEO",
      icon: LuGlobe,
      items: [
        "Web Vitals",
        "Lighthouse",
        "Semantic HTML",
        "Meta Tags",
        "Schema Markup",
      ],
    },
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

        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  id="skill"
                >
                  <div id="skill-header">
                    <div id="header-icon">
                      <IconComponent size={24} />
                    </div>
                    <h3>{skill.category}</h3>
                  </div>
                  <ul>
                    {skill.items.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + itemIndex * 0.05,
                          duration: 0.2,
                        }}
                        id="skill-item"
                      >
                        <div id="item-bullet" />
                        <span id="item">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="highlight-section">
          <h3>Key Highlights</h3>
          <div className="highlights">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="highlight"
              >
                {highlight}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
