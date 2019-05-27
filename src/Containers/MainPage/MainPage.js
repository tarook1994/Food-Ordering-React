import React, { Component } from 'react';
import ScrollingNavigationBar from '../../Layouts/ScrollingNavigationBar/ScrollingNavigationBar'
import Carousel from '../../Components/Carousel/Carousel'
import './MainPage.css'
import Introduction from '../../Components/Introduction/Introduction';

class MainPage extends Component {



    render() {

        return (
            <React.Fragment>
                <ScrollingNavigationBar />
                <Carousel />
                <Introduction/>

                
            </React.Fragment>



        )

    }



}

export default MainPage;