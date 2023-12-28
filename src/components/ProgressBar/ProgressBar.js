import "./ProgressBar.css";

const ProgressBar = ({ children }) => {
    return (<div className="progressbar">
        {children}
        <span className="progressbar__fill"></span>
    </div>)
}
export default ProgressBar;