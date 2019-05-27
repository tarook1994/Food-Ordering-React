import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image from '../../Assets/Images/food.png'
import './Carousel.css'



const carousel = (props) => {
    return (
        <React.Fragment>
            <div  id='carousel'>
                <Carousel showStatus={false} showThumbs={false} autoPlay ={true} infiniteLoop  >
                    <div>
                        <img src={image} />
                    </div>
                    <div>
                        <img src={image} />
                    </div>
                    <div>
                        <img src={image} />
                    </div>
                </Carousel>
            </div>


        </React.Fragment>
    )
}
export default carousel;