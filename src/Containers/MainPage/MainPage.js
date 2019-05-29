import React, { Component } from 'react';
import ScrollingNavigationBar from '../../Layouts/ScrollingNavigationBar/ScrollingNavigationBar'
import Carousel from '../../Components/Carousel/Carousel'
import './MainPage.css'
import Introduction from '../../Components/Introduction/Introduction';
import RestaurantsPreview from '../../Components/RestaurantsPreview/RestaurantsPreview';

class MainPage extends Component {



    render() {

        return (
            <React.Fragment>
                <ScrollingNavigationBar />
                <Carousel />
                <Introduction/>
                <RestaurantsPreview/>                    


            </React.Fragment>



        )

    }



}

export default MainPage;