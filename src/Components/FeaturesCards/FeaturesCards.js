import React from 'react';
import './FeaturesCards.css'
import Card from './Card/Card';

const featuresCards = (props) => {

    return (
        <div className="container-cards">
            <Card title='All Menus in one place' desc ='Check the most ordered restaurants here.' />
            <Card title='All Menus in one place' desc ='Check the most ordered restaurants here.'/>
            <Card title='All Menus in one place' desc ='Check the most ordered restaurants here.'/>

        </div>
    )

}
export default featuresCards;