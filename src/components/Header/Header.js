import * as React from "react";
import Avatar  from "../../images/AVatarImg.jpeg";

export const Header = () => (
    <header>
        <span className="date">Reza Mohammadi</span>
        <h1>Web developer</h1>
        <div className="avatar">
            <img src={Avatar} alt="avatar" width={50}/>
        </div>
    </header>
);
