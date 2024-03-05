import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import Logo from '../public/images/logo.jpg'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ez6qtag', 'template_wdcs7ks', form.current, 'F00NTB45q_wBFYGOw')
            .then(() => {
                swal({
                    title: "¡Tu mensaje ha sido enviado! responderé lo antes posible",
                });

                // Reload the page after 10 seconds
                setTimeout(() => {
                    window.location.reload();
                }, 10000); // 10000 milliseconds = 10 seconds
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    function submitCheck(e) {
        e.preventDefault();
        if (name !== "" && email !== "" && phone !== "" && message !== "") {
            sendEmail(e);
        } else {
            alert("Please fill in all the required fields");
        }
    }

    return (
        <div>
            <nav className='navbar'>
                <div className='logo'>
                    <Image src={Logo} width={120} height={120}></Image>
                </div>
                <span>Nutriologo Iván Prieto</span>
            </nav>

            <a className="link" href="/">Regresar</a>

            <div className="contact-wrapper">
                <div className="contact-left">
                    <div className="left-header">¿Quieres agendar una cita? Contáctame por email y visita mis redes sociales!</div>
                    <div className="contact-icons">
                        <a
                            className="contact-link"
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            title="Visita mi facebook"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            className="contact-link"
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            title="Visita mi instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            className="contact-link"
                            href="https://api.whatsapp.com/send?phone=526361117597"
                            target="_blank"
                            rel="noreferrer"
                            title="Contactame por whatsapps"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                {/* Contact form using Email JS */}
                <form className="form" ref={form} onSubmit={sendEmail} id="contact-form">
                    <div className="input-wrapper">
                        <label>Tu nombre</label>
                        <input className="input" type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} placeholder="nombre" />
                    </div>
                    <div className="input-wrapper">
                        <label>Tu email</label>
                        <input className="input" type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                    </div>
                    <div className="input-wrapper">
                        <label>Tu número de teléfono o celular</label>
                        <input className="input" type="number" name="user_email" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="celular" />
                    </div>
                    <div className="input-wrapper">
                        <label>Tu mensaje</label>
                        <textarea className="input message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="message" />
                    </div>
                    <input className="send-button" type="submit" value="SEND" onClick={submitCheck} />
                </form>
            </div>
        </div >
    );
}
