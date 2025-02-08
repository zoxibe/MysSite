import './App.css';
import React, { useState, useEffect } from 'react';
import Div from "./jsx/Div.jsx";
import Cursor from "./jsx/Cursor.jsx";
import Sommaire from "./jsx/Sommaire.jsx";
import ContactBox from "./jsx/ContactBox.jsx";

function App() {

    const [isWhiteMode, setIsWhiteMode] = useState(false);

    function myFunction() {
        const element = document.body;
        element.classList.toggle("white-mode");
        setIsWhiteMode(!isWhiteMode);
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.3
    });
    useEffect(() => {
        const titleElement = document.querySelector('.title');
        if (titleElement) {
            observer.observe(titleElement);
        }
        const text1Element = document.querySelector('.Text1');
        if (text1Element) {
            observer.observe(text1Element);
        }
        const text2Element = document.querySelector('.Text2');
        if (text2Element) {
            observer.observe(text2Element);
        }
        const text3Element = document.querySelector('.Text3');
        if (text3Element) {
            observer.observe(text3Element);
        }
        const FlipCardElement = document.querySelector('.flip-card');
        if (FlipCardElement) {
            observer.observe(FlipCardElement);
        }
        const InputElement = document.querySelector('.Input');
        if (InputElement) {
            observer.observe(InputElement);
        }
        const ContactElement = document.querySelector('#Contact');
        if (ContactElement) {
            observer.observe(ContactElement);
        }
        document.querySelectorAll('h2').forEach(h2 => {
            observer.observe(h2);
        });
        document.querySelectorAll('h1').forEach(h1 => {
            observer.observe(h1);
        });

        return () => {
            observer.disconnect();
        };
    }, []);



        return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&display=swap" rel="stylesheet"/>

            <div className={"Sommaire1"}>
                <Sommaire/>
            </div>
            <div className={"header"}>
                {/*<Cursor/>*/}
                <button className={"ColorTheme"} onClick={myFunction}></button>
                <div className={"title"}>
                    <h2 id="Title">TiméoF</h2>
                </div>
                <div className={"ScrolingBar"}>
                    <div className={"ScrolingBarInner"}/>
                </div>
            </div>

            <div className={"container"}>
                 <p className={"ScrollDown"}>* SCROLL DOWN *</p>
            </div>
            <div className={"TextBox"}>
                <div className={"flip-card"} id="flip-card">
                    <div className={"flip-card-inner"}>
                        <div className={"flip-card-front"}>
                            <img src={"/assets/FRANVILLE_Timeo.jpg"} alt={"Avatar"} width="100%" height="100%"/>
                        </div>
                        <div className={"flip-card-back"}>
                            <h3>Timéo FRANVILLE</h3>
                            <h4>Étudiant en 2ᵉ année à l’ESIEA</h4>
                            <h5>École d’ingénieurs spécialisée dans les technologies du numérique</h5>
                        </div>
                    </div>
                </div>
                <div className={"Text1"}>
                    <p>je recherche un contrat d’apprentissage dans le domaine de la réalité augmentée pour allier compétences techniques et passion pour l’innovation.</p>
                </div>
                <div className={"Text2"}>
                    <p>J'ai une forte curiosité pour les technologies de réalité augmentée et virtuelle ainsi que les système immersifs. J'apprécie également partager et créer, ce que je mets en avant lors de mes <a href={"https://www.twitch.tv/zoxibe"} target="_blank">streams</a>.</p>
                </div>
                <div className={"Text3"}>
                    <p style={{fontSize: "3vw", fontFamily: "'Corinthia', serif", textDecoration:"underline", textDecorationThickness: "1px"}}>Compétences techniques</p>
                    <ol style={{listStyleType: "disc"}}>
                        <li style={{margin: "0 13vw"}}>Programmation : [C, C++,JavaScript, Css]</li>
                    </ol>
                    <p style={{fontSize: "3vw", fontFamily: "'Corinthia', serif",textDecoration:"underline", textDecorationThickness: "1px"}}>Compétences personnelles</p>
                    <ol  style={{listStyleType: "disc"}}>
                        <li style={{margin: "0 13vw"}}>Capacité à travailler en équipe.</li>
                        <li style={{margin: "0 13vw"}}>Adaptabilité et curiosité pour les nouvelles technologies.</li>
                        <li style={{margin: "0 13vw"}}>Sens de l’organisation et respect des délais</li>
                    </ol>
                </div>
            </div>
            <div className={"Input"}>
                <div>
                    <h1 id="Contact">
                    Contact
                    </h1>
                </div>
                <ContactBox/>
            </div>
            <div className={"footer"} id={"Footer"}>
                <a href="#">Design & Coding by Timéo © 2024.</a>
            </div>
        </>
    )
}

export default App;
