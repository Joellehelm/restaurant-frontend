import React, { Component } from 'react';

const Favorites = props => {

    return(
        <div>
            {props.favorites.map(favorite => <Favorites favorites={favorite} key={favorite.id}/>)}
        </div>
        )
    }

export default Favorites;
