import React from 'react';
import './Restaurants.css';
import RestaurantCard from './RestaurantCard/RestaurantCard';

const restaurants = (props) => {
    return (
        <div>
            <h3>OUR <b>RESTAURANTS</b></h3>
            <p>We are trying our best to ..sdasd  asdjaisdkjas dasd asjdas dasd</p>

            <div 
                className='grid-container'>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

export default restaurants;