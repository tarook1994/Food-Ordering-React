import React from 'react';
import './Card.css'
import image from '../../../Assets/Images/my.jpg'

const card = (props) => {

    return (
            <div className="card">
                <img src={image} alt="Avatar"  />
                <div className="img-container">
                    <h4><b>{props.title}</b></h4>
                    <p>{props.desc}</p>
                </div>
            </div>
        )
}

export default card;