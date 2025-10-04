import type { ReactNode } from "react";
import "../../assets/styles/button.css";

interface Props {
  buttonText: string;
  primary?: boolean;
  type?: "submit" | "reset" | "button";
  icon?: ReactNode;
  fontSize?: string;
  paddingX?: string;
  paddingY?: string;
}

const Button = ({
  buttonText,
  primary,
  type,
  icon,
  fontSize,
  paddingX,
  paddingY,
}: Props) => {
  return (
    <div className="button">
      <button
        type={type}
        className={primary ? "primary" : "secondary"}
        style={{
          padding:
            paddingX && paddingY ? `${paddingY} ${paddingX}` : ".8rem 2rem",
          fontSize: fontSize ? fontSize : "x-small",
        }}
      >
        {icon} {buttonText}
      </button>
    </div>
  );
};

export default Button;
