import './Button.css';
const Button = ({ children, lightButton }) => {
    return (<button className={`rounded-button ${lightButton && 'button_type_light'}`}>{children}</button>)
};
export default Button;