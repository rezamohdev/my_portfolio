import React from "react";
import {items} from "./data";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

function Card({id, title, category, theme}) {
    return (
        <li className={`card ${theme}`}>
            <div className="card-content-container">
                <motion.div className="card-content" layoutId={`card-container-${id}`}>
                    <motion.div className="card-image-container" layoutId={`card-image-container-${id}`}>
                        <img className="card-image" src={`images/${id}.jpg`} alt="card image" />
                    </motion.div>
                </motion.div>
            </div>

        </li>
    )
}

function List() {
}