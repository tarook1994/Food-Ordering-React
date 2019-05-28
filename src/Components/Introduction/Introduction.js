import React from 'react'
import './Introduction.css'
import FeaturesCards from '../../Components/FeaturesCards/FeaturesCards';


const introduction = (props) => {

    return (
        <div className='introduction-container'>
            <h3>WELCOME TO <b>AT RESTAURANT</b></h3>
            <p id="paragraph"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <FeaturesCards />
        </div>
    )
}

export default introduction;