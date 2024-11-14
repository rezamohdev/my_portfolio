import * as React from "react";
import Avatar  from "../../images/AVatarImg.jpeg";

export const Header = () => (
    <header>
        <span className="date">Thursday, August 8th</span>
        <h1>Today</h1>
        <div className="avatar">
            <img src={Avatar} alt="avatar" width={50}/>
        </div>
    </header>
);
