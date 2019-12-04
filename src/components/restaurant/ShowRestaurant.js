import React, { Component } from 'react';
import Reviews from './reviews'

class ShowRestaurant extends Component {
    render() {
        return (
            <div>
        
            <h1>HELLO</h1>
            <h1>{this.props.name}</h1>
            <img src={this.props.photo} alt={this.props.name}/>
            
            <Reviews user={this.props.user} placeId={this.props.placeId}/>
            
            </div>
        );
    }
}

export default ShowRestaurant;