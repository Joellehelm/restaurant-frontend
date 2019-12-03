import React, { Component } from 'react';
import Restaurants from './Restaurants'
import Reviews from './reviews'
import Search from './Search'

class RestaurantContainer extends Component {

    


    render() {
        return (
            <div>
                <Restaurants user={this.props.user} />
                <Search />
            </div>
        );
    }
}

export default RestaurantContainer;