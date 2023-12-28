import React, { useState } from "react";
import "./TabGroup.css";
import Button from "../Button/Button";


const tabs = ["Main Skills", "Education"];
const TabGroup = () => {
    const [active, setActive] = useState(tabs[0]);
    return (<>
        <div className="tab-group">
            {tabs.map(tab => (

                <Button
                    key={tab}
                    active={active === tab}
                    onClick={() => setActive(tab)}
                >
                    {tab}
                </Button>
            ))}
        </div>
        <p />
        <p> Your payment selection: {active} </p>
    </>);
}
export default TabGroup;