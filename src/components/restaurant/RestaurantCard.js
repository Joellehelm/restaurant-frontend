import React, { Component } from 'react';

class RestaurantCard extends Component {
    constructor(){
        super()

    }

    render() {
        return (
            <div onClick={() => this.props.showPlace(this.props.placeId)}>
                <h1>{this.props.name}</h1>
                <img src={this.props.photo} alt={this.props.name}/>
            </div>
        );
    }
}

export default RestaurantCard;