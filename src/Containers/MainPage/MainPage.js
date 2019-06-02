import React, { Component } from 'react';
import ScrollingNavigationBar from '../../Layouts/ScrollingNavigationBar/ScrollingNavigationBar'
import Carousel from '../../Components/Carousel/Carousel'
import './MainPage.css'
import Introduction from '../../Components/Introduction/Introduction';
import RestaurantsPreview from '../../Components/RestaurantsPreview/RestaurantsPreview';
import Restaurants from '../../Components/Restaurants/Restaurants';
import ContactUs from '../../Components/ContactUs/ContactUs';
import Footer from '../../Layouts/Footer/Footer'

class MainPage extends Component {



    render() {

        return (
            <React.Fragment>
                <ScrollingNavigationBar />
                <Carousel />
                <Introduction />
                <RestaurantsPreview />
                <Restaurants/>
                <ContactUs/>
                <Footer/>


            </React.Fragment>



        )

    }



}

export default MainPage;