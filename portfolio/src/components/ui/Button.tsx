import type React from "react";
import "@/assets/styles/button.css";

interface Props {
  buttonText: string;
  primary?: boolean;
  type?: "submit" | "reset" | "button";
  icon?: React.ReactElement;
  fontSize?: string;
  paddingX?: string;
  paddingY?: string;
  loading?: boolean;
}

const Button = ({
  buttonText,
  primary,
  type,
  icon,
  fontSize,
  paddingX,
  paddingY,
  loading,
}: Props) => {
  return (
    <div className="button">
      <button
        inert={loading}
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
