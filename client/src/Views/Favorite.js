import React from 'react';
import Card from '../Components/Card';
import Item from '../Components/Item';

function Favorite(props) {
    return (
        <div>
        <h2>YOUR FAVOURITE RECIPES</h2>
        <div className="RecipeCss">
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
        <br/>
        <div className="RecipeCss">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div> 
        </div>
    );
}

export default Favorite;