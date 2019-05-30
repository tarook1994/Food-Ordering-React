import React from 'react';
import './RestaurantCard.css'
import image from '../../../Assets/Images/mcdonalds.png'

const restaurantCard = (props) => {
    return (
        <div className="hvrbox">
            <img src={image} alt="Mountains" className="hvrbox-layer_bottom" />
            <div className="hvrbox-layer_top">
                <div className="hvrbox-text">View Menu</div>
            </div>
        </div>
    )
}

export default restaurantCard;