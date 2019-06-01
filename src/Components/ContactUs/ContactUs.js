import React from 'react';
import './ContactUs.css'
import Card from '../FeaturesCards/Card/Card';

const contactUs = (props) => {

    return (
        <div className = 'contact-container'>
            <h3>CONTACT US</h3>
            <Card icon ={true}
                title = 'Email'/>
            <Card icon ={true}
                title  ='Phone'/>
            
         

        </div>

    )

}

export default contactUs;