import './Button.css';
const Button = ({ children }) => {
    return (<button className="rounded-button">{children}</button>)
};
export default Button;