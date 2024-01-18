import React from 'react'

function contactame() {
    return (
        <>
            {/* Contact form using Email JS */}
            <form id="contact-form">
                <div className="contact-for-header">Contáctame</div>
                <label>Nombre</label>
                <input type="text" name="user_name" placeholder='Nombre' />
                <label>Correo electrónico</label>
                <input type="email" name="user_email" placeholder='correo electrónico' />
                <label>Message</label>
                <textarea name="message" placeholder="message" />
                <button>Enviar</button>
            </form>
        </>
    )
}

export default contactame