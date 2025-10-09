import "@/assets/styles/header.css";

interface Props {
  content: string;
}

const Header = ({ content }: Props) => {
  return (
    <div className="header">
      <h1>{content}</h1>
      <div id="underline" />
    </div>
  );
};

export default Header;
