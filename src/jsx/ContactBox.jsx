import React, { useState } from 'react';
import '../css/ContactBox.css';

function ContactBox() {

    const [formData, setFormData] = useState({
        Nom: '',
        Email: '',
        Subject: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Empêche la redirection

        const form = new FormData();
        form.append("Nom", formData.Nom);
        form.append("Email", formData.Email);
        form.append("Subject", formData.Subject);

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbwnc6aCJW8KpTWK0PHkZzutB2QwUsLfT8Bf9j_Htkk5/dev", {
                method: "POST",
                body: form
            });

            if (response.ok) {
                alert("Formulaire envoyé avec succès !");
                setFormData({ Nom: '', Email: '', Subject: '' }); // Réinitialiser le formulaire
            } else {
                alert("Une erreur est survenue.");
            }
        } catch (error) {
            alert("Erreur réseau, veuillez réessayer.");
        }
    };

    return (
        <div className="ContactBox">
            <div>
                <p id="TextContact">Pour toute question supplémentaire, n'hésitez pas à me contacter.</p>
                <div className="logoContainer">
                    <a href="https://www.linkedin.com/in/timéo-franville" className="Linkedin" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://github.com/zoxibe" className="GitHub" target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="ContactBox2">
                    <div className="input-container">
                        <input type="text" name="Nom" id="name" placeholder="Nom*" value={formData.Nom} onChange={handleChange} required />
                    </div>
                    <div className="input-container">
                        <input type="email" name="Email" id="email" placeholder="Email*" value={formData.Email} onChange={handleChange} required />
                    </div>
                    <div className="input-container">
                        <textarea id="subject" name="Subject" placeholder="Sujet*" value={formData.Subject} onChange={handleChange} required />
                    </div>
                    <input type="submit" value="Envoyer" />
                </div>
            </form>
        </div>
    );
}

export default ContactBox;
