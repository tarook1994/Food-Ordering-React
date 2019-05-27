import React, { Component } from 'react';
import ScrollingNavigationBar from '../../Layouts/ScrollingNavigationBar/ScrollingNavigationBar'
import Carousel from '../../Components/Carousel/Carousel'
import './MainPage.css'

class MainPage extends Component {



    render() {

        return (
            <React.Fragment>
                <ScrollingNavigationBar />
                <Carousel >

                </Carousel>
            </React.Fragment>



        )

    }



}

export default MainPage;