import React from 'react';
import './Card.css'
import image from '../../../Assets/Images/my.jpg'
import icon from '../../../Assets/Images/icon.png'

const card = (props) => {
    let img = image;
    let titleText =   <h4><b>{props.title}</b></h4>
    if(props.icon){
        img = icon
        titleText =   <h4>{props.title}</h4>
    }
    return (
            <div className="card">
                <img src={img} alt="Avatar"  />
                <div className="img-container">
                    {titleText}
                    <p>{props.desc}</p>
                </div>
            </div>
        )
}

export default card;