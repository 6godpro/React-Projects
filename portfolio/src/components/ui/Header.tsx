import '../../assets/styles/header.css'

interface Props {
  content: string;
}

const Header = ({content}: Props) => {
  return (
    <div className="header">
      <h1>{content}</h1>
      <div
        style={{
          width: "150px",
          height: "4px",
          background: "#ededed",
          margin: "0 auto",
        }}
      />
    </div>
  );
};

export default Header;
