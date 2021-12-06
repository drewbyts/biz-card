import React from "react"
import myimage from "./images/yosemite-me.jpeg"



export default function Info() {
    return(
            <div className="info-container">
            <img className="info-pic" src={myimage} alt="half dome"></img>
            <h1 className="info-name">Andrew Ramirez</h1>
            <h2 className="info-role">Developer</h2>
            <p className="info-website">@drewbyts</p>
            <button className="info-button" type="button">Email Me!</button>
            </div>
    )
};
