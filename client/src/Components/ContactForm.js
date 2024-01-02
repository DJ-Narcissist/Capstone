import React, { useState } from "react";
import './ContactForm.css'
import DJApi from "../Services/api";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name:'', email:'', message: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            //Call API to send the message
            const response = await DJApi.sendContactMessage(formData);
            console.log(response.message); // Handle response
        } catch (error) {
            console.error('Error sending message', error); // Handle error
        }
    };

    return ( 
        <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
            <button type="submit">Send Message</button> 
        </form>
    );
}

export default ContactForm;