import '../css/ContactBox.css';

function ContactBox() {
    return (
        <div className="ContactBox">
            <div>
                <p id={"TextContact"}>Pour toute question supplémentaire, n'hésitez pas à me contacter.</p>
                <div className={"logoContainer"}>
                    <a href={"https://www.linkedin.com/in/timéo-franville"} className={"Linkedin"} target="_blank"></a>
                    <a href={"https://github.com/zoxibe"} className={"GitHub"} target="_blank"></a>
                </div>
            </div>
            <form action={"https://script.google.com/macros/library/d/1STEVa_2TCPbDNqipziy383f6x915DG3eenZIXLSxabx5AIDUGqQKsHV-/2"}
                  method={"POST"}>

                <div className="ContactBox2">
                    <div className="input-container">
                        <input type={"text"} name={"Nom"} id={"name"} placeholder={"name*"}/>
                    </div>
                    <div className="input-container">
                        <input type={"email"} name={"Email"} id={"email"} placeholder={"Email*"}/>
                    </div>
                    <div className="input-container">
                        <textarea id={"subject"} name={"Subject"} placeholder={"Sujet*"}/>
                    </div>
                    <input type="submit" value="Envoyer"/>
                </div>
            </form>

        </div>
    )
}

export default ContactBox;