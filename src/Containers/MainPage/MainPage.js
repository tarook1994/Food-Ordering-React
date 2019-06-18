import React, { Component } from 'react';
import ScrollingNavigationBar from '../../Layouts/ScrollingNavigationBar/ScrollingNavigationBar'
import Carousel from '../../Components/Carousel/Carousel'
import './MainPage.css'
import Introduction from '../../Components/Introduction/Introduction';
import RestaurantsPreview from '../../Components/RestaurantsPreview/RestaurantsPreview';
import Restaurants from '../../Components/Restaurants/Restaurants';
import ContactUs from '../../Components/ContactUs/ContactUs';
import Footer from '../../Layouts/Footer/Footer'
import Login from '../../Components/Login/Login';

class MainPage extends Component {

    state = {
        currentPage : 'login'
    }

    loginHandler = () => {
        this.setState({
            currentPage : 'main'
        })
        console.log("asdasdsa")
    }

    render() {
        let page = <div>
            <ScrollingNavigationBar />
                <Carousel />
                <Introduction />
                <RestaurantsPreview />
                <Restaurants/>
                <ContactUs/>
                <Footer/>
        </div>
        if(this.state.currentPage==='login'){
            page = <Login click = {this.loginHandler}/>
        }

        return (
            <React.Fragment>
                {page}


            </React.Fragment>



        )

    }



}

export default MainPage;