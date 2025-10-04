import type { ReactNode } from "react";
import "../../assets/styles/socialCard.css";

interface Props {
  text: string;
  subText: string;
  icon: ReactNode;
}
const SocialCard = ({ text, subText, icon }: Props) => {
  return (
    <div className="social-card">
      <div className="social-logo">{icon}</div>
      <div>
        <span>{subText}</span>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SocialCard;
