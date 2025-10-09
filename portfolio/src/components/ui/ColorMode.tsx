import { FaSun, FaMoon } from "react-icons/fa";
import "@/assets/styles/colorMode.css";

type Props = {
  theme: "light" | "dark" | null;
  toggleTheme: () => void;
};

const ColorMode = ({ toggleTheme, theme }: Props) => {
  return (
    <div className="mode-btn" onClick={toggleTheme}>
      <div
        id="switch"
        className={theme === "light" ? "switch-left" : "switch-right"}
      >
        {theme === "light" ? <FaSun size={16} /> : <FaMoon size={16} />}
      </div>
    </div>
  );
};

export default ColorMode;
