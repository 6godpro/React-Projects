import "@/assets/styles/button.css";
import type { CSSLengthValue } from "@/types/style";
import { assertValidCSSLength } from "@/types/style";

interface Props {
  buttonText: string;
  primary?: boolean;
  type?: "submit" | "reset" | "button";
  icon?: React.ReactElement;
  fontSize?: CSSLengthValue;
  paddingX?: CSSLengthValue;
  paddingY?: CSSLengthValue;
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
  // Validate props
  if (process.env.NODE_ENV === "development") {
    if (fontSize) assertValidCSSLength(fontSize, "fontSize");
    if (paddingX) assertValidCSSLength(paddingX, "paddingX");
    if (paddingY) assertValidCSSLength(paddingY, "paddingY");
  }

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
