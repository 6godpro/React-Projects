type ToastMessageProps = {
  title: string;
  content: string;
};

const ToastMessage = ({ title, content }: ToastMessageProps) => {
  return (
    <div>
      <h4 style={{ color: "black" }}>{title}</h4>
      <p style={{ fontSize: "small", color: "gray" }}>{content}</p>
    </div>
  );
};

export default ToastMessage;
