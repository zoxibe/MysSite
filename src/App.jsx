import './App.css';
import { useState, useEffect } from 'react';
import Sommaire from "./jsx/Sommaire.jsx";
import ContactBox from "./jsx/ContactBox.jsx";
import FaceImg from "./assets/FRANVILLE_Timeo.jpg"

function App() {

    const [isWhiteMode, setIsWhiteMode] = useState(false);

    function myFunction() {
        const element = document.body;
        element.classList.toggle("white-mode");
        setIsWhiteMode(!isWhiteMode);
    }

    const observer = new IntersectionObserver((entries) => {
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
        const cardElement = document.querySelector('.card');
        if (cardElement) {
            observer.observe(cardElement);
        }
        const ZoneTextElement = document.querySelector('.ZoneText');
        if (ZoneTextElement) {
            observer.observe(ZoneTextElement);
        }
        const ImgCompElement = document.querySelector('.imageCompétences');
        if (ImgCompElement) {
            observer.observe(ImgCompElement);
        }
        const TxtCompElement = document.querySelector('.TextCompétences');
        if (TxtCompElement) {
            observer.observe(TxtCompElement);
        }
        const CadreSeachElement1 = document.querySelector('.SearchCadre1');
        if (CadreSeachElement1) {
            observer.observe(CadreSeachElement1);
        }
        const CadreSeachElement2 = document.querySelector('.SearchCadre2');
        if (CadreSeachElement2) {
            observer.observe(CadreSeachElement2);
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
    },);



        return (
            <>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&display=swap"
                      rel="stylesheet"/>

                <div className={"Sommaire1"}>
                    <Sommaire/>
                </div>


                <div className={"header"}>
                    {/*<Cursor/>*/}
                    <button className={"ColorTheme"} onClick={myFunction}></button>
                    <div className={"title"}>
                        <h2 id="Title">TiméoF</h2>
                    </div>
                    <div className={"AnimScrolingBar"}>
                        <div className={"ScrolingBarInner"}/>
                    </div>
                    <div className={"ScrollingBar"}>
                        <p className={"ScrollDown"}>* SCROLL DOWN *</p>
                    </div>
                </div>

                <div id={"cardSommaire"}></div>

                <div className={"AboutMe"}>


                    <div className={"card"}>
                        <div className={"Card-up"}>
                            <h3>Timéo FRANVILLE</h3>
                            <h4>Étudiant en 2ᵉ année à <a href={"https://www.esiea.fr"} target="_blank"
                                                          style={{color: "rgb(54,169,255)"}}>l’ESIEA</a></h4>
                        </div>

                        <div className={"Card-down"}>
                            <h5>École d’ingénieurs spécialisée dans les technologies du numérique</h5>
                        </div>
                    </div>

                    <div className={"ZoneText"}>
                        <div className={"Text1"}>
                            <p>Découvrir</p>
                            <div className={"Image1"}></div>
                        </div>
                        <div className={"Text2"}>
                            <div className={"Image2"}></div>
                            <p>Créer</p>
                        </div>
                        <div className={"Text3"}>
                            <p>Partager</p>
                            <div className={"Image3"}></div>
                        </div>
                    </div>


                    <div className={"ScrollingBar2"}>
                        <p className={"ScrollDown2"}>* À PROPOS DE MOI *</p>
                    </div>


                </div>

                <div id={"CompSommaire"}></div>

                <div className={"Compétences"}>

                    <div className={"imageCompétences"}></div>

                    <div className={"TextCompétences"}>
                        <p>Compétences techniques</p>
                        <ol style={{listStyleType: "disc"}}>
                            <li>Programmation : [C, C++, JavaScript, Css]</li>
                        </ol>
                        <p>Compétences personnelles</p>
                        <ol style={{listStyleType: "disc"}}>
                            <li>Capacité à travailler en équipe.</li>
                            <li>Adaptabilité et curiosité pour les nouvelles technologies.</li>
                            <li>Sens de l’organisation et respect des délais.</li>
                        </ol>
                    </div>

                    <div className={"ScrollingBar3"}>
                        <p className={"ScrollDown3"}>* MES COMPÉTENCES *</p>
                    </div>

                </div>

                <div id={"SearchSommaire"}></div>

                <div className={"Search"}>

                    <div className={"SearchCadre1"}>
                        <div className={"SearchText1"}>
                            Je recherche un contrat d’apprentissage dans le domaine de la réalité augmentée pour allier
                            compétences techniques et passion pour l’innovation.
                        </div>
                    </div>

                    <div className={"SearchCadre2"}>
                        <div className={"SearchText2"}>
                            <p>J'ai une forte curiosité pour les technologies de réalité augmentée et virtuelle ainsi
                                que
                                les système immersifs. J'apprécie également partager et créer, ce que je mets en avant
                                lors
                                de mes <a href={"https://www.twitch.tv/zoxibe"} target="_blank">streams</a>.</p>
                        </div>
                    </div>

                    <div className={"ScrollingBar4"}>
                        <p className={"ScrollDown4"}>* JE RECHERCHE *</p>
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
                    <a href="#">Design & Coding by Timéo © 2025.</a>
                </div>
            </>
        )
}

export default App;
