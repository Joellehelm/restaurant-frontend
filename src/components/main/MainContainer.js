import React, { Component } from 'react';
import RestaurantContainer from '../restaurant/RestaurantContainer'

class MainContainer extends Component {

    // add state here and pass props up to determine which component gets rendered below
    // such as restaurant container on default but when a nav bar link is clicked it can swap components to favorites etc.
    render() {
        return (
            <div>
                <RestaurantContainer user={this.props.user} />
            </div>
        );
    }
}

export default MainContainer;