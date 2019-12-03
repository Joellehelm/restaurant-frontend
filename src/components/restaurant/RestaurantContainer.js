import React, { Component } from 'react';
import Restaurants from './Restaurants'
import Reviews from './reviews'

class RestaurantContainer extends Component {

    


    render() {
        return (
            <div>
                <Restaurants user={this.props.user} />
                
            </div>
        );
    }
}

export default RestaurantContainer;