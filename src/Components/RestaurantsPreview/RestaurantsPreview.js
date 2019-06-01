import React from 'react';
import './RestaurantsPreview.css'
import homeImage from '../../Assets/Images/home-img.png'

const restaurantsPreview = (props) => {
    return (
        <div className = 'preview-container'>
            <div >
                <img src ={homeImage}></img>
            </div>

            <div >
                <h4>ALL RESTAURANTS IN ONE PLACE</h4>
                <p className ="feature-paragraph">
                    asdsadasdasdasdasdasdasdasdasd
                </p>
                <p className ="feature-paragraph">
                    asdsadasdasdasdasdasdasdasdasd
                </p>
                <p className ="feature-paragraph">
                    asdsadasdasdasdasdasdasdasdasd
                </p>
                <p className ="feature-paragraph">
                    asdsadasdasdasdasdasdasdasdasd
                </p>
                <p className ="feature-paragraph">
                    asdsadasdasdasdasdasdasdasdasd
                </p>
                <p className ="feature-paragraph">
                    asdsadasdasdasdasdasdasdasdasd
                </p>
            </div>
        </div>
    )
}

export default restaurantsPreview;