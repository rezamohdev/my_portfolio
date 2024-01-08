import React, { useState } from "react";
import "./TabGroup.css";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";



const TabGroup = () => {
    const [active, setActive] = useState("skills");
    return (<div className="tab">
        <div className="tab__group">

            <Button
                active={active === "skills"}
                onClick={() => setActive("skills")}
                lightButton={active == "skills" ? false : true}
            >
                Skills
            </Button>
            <Button
                lightButton={active == "skills" ? true : false}
                onClick={() => setActive("education")}
            >
                Education
            </Button>
        </div>
        <div className="tab__contents">
            {
                active == "skills" ? (
                    <>
                        <ProgressBar>User Experience Design - UI/UX</ProgressBar>
                        <ProgressBar>Web & User Interface Design - Development</ProgressBar>
                        <ProgressBar>Interaction Design - Animation </ProgressBar>
                    </>
                ) : (
                    <>
                        <ProgressBar>Major: Computer Science, Software Engineering</ProgressBar>
                        <ProgressBar>TripleTen (Practicum) Bootcamp: Software Engineering course</ProgressBar>
                    </>
                )
            }
        </div>

    </div>);
}
export default TabGroup;