import React, { Component } from 'react';

class RestaurantCard extends Component {
    constructor(){
        super()

    }

    render() {
        return (
            <div>
                <h1>HELLo</h1>
                <img src={this.props.photo} />
            </div>
        );
    }
}

export default RestaurantCard;