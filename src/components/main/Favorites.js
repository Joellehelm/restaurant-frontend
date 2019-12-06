import React, { Component } from 'react';
import FavResCard from './favResCard';

const Favorites = (props) => {
debugger
    return (
        <div>
            {props.favorites.map((favorite, idx) => 
            <FavResCard
            name={favorite.name}
            key={idx}
            photo={favorite.photo}
            />
            )}
        </div>
    )
}

export default Favorites;







// {props.favorites.map((favorite, idx) => <RestaurantCard favorites={favorite} key={idx}/>)}













