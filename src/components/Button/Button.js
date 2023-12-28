import './Button.css';
const Button = ({ children, lightButton, onClick }) => {
    return (<button onClick={onClick} className={`rounded-button ${lightButton && 'button_type_light'}`}>{children}</button>)
};
export default Button;