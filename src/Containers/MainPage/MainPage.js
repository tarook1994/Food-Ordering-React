import React, { Component } from 'react';
import ScrollingNavigationBar from '../../Layouts/ScrollingNavigationBar/ScrollingNavigationBar'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image from '../../Assets/Images/image.jpg'
import './MainPage.css'

class MainPage extends Component {



    render() {
        const handleOnDragStart = e => e.preventDefault()

        return (
            <div>
                <ScrollingNavigationBar />
                <AliceCarousel mouseDragEnabled  autoPlay autoPlayInterval={3000}  buttonsDisabled = {true}>
                    <img src={image} onDragStart={handleOnDragStart} className="img" />
                    <img src={image} onDragStart={handleOnDragStart} className="img" />
                    <img src={image} onDragStart={handleOnDragStart} className="img" />
                    <img src={image} onDragStart={handleOnDragStart} className="img" />
                    <img src={image} onDragStart={handleOnDragStart} className="img" />
                </AliceCarousel>
               
            </div>


        )

    }

    

}

export default MainPage;