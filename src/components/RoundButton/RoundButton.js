import "./RoundButton.css";
const Button = ({ children, lightButton, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-button ${
        lightButton && "button_type_light"
      } ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
