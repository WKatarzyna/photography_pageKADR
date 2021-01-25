import React from 'react';
import ContactForm from "./ContactForm";
import formImg from '../assets/form_img.jpg';
import './ContactPage.css';

const ContactPage = () => {


        return (
            <>
                <h1 id="header-primary">Napisz do mnie</h1>
                <div className={'avatar'}
                     style={{backgroundImage: 'linear-gradient(' + ' rgba(0, 0, 0, 0.5),' + 'rgba(0, 0, 0, 0.5)),' + 'url(' + formImg + ')'}}>
                </div>
                <ContactForm/>
            </>


        )

    }

;
export default ContactPage