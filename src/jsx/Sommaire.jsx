import React from 'react';
import "../css/Sommaire.css"
import Button1 from "./Button.jsx";

function Sommaire({isWhiteMode}) {
    return (
        <div  className={"Sommaire"}>
            <div className={"SommaireWrapper"}>
                <a href="#" className={"SommaireText"}>Title</a>
                <a href="#cardSommaire" className={"SommaireText"}>About</a>
                <a href="#CompSommaire" className={"SommaireText"}>Skills</a>
                <a href="#SearchSommaire" className={"SommaireText"}>Research</a>
                <a href="#Contact" className={"SommaireText"}>Contact</a>
            </div>

        </div>
    );
}

export default Sommaire;