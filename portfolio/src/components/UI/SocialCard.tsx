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
      <h3>{text}</h3>
      <a href={`https://linkedin.com/${subText}`} target="_blank">{subText}</a>
    </div>
  );
};

export default SocialCard;
