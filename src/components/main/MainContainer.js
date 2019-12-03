import React, { Component } from 'react';
import RestaurantContainer from '../restaurant/RestaurantContainer'

class MainContainer extends Component {
    render() {
        return (
            <div>
                <RestaurantContainer user={this.props.user} />
            </div>
        );
    }
}

export default MainContainer;