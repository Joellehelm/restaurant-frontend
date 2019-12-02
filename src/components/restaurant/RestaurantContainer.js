import React, { Component } from 'react';
import Restaurants from './Restaurants'
import Reviews from './Reviews'

class RestaurantContainer extends Component {
    render() {
        return (
            <div>
                <Restaurants user={this.props.user} />
                <Reviews user={this.props.user}/>
            </div>
        );
    }
}

export default RestaurantContainer;