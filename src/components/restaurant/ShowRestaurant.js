import React, { Component } from 'react';

class ShowRestaurant extends Component {
    render() {
        return (
            <div>
        
            <h1>HELLO</h1>
            <h1>{this.props.name}</h1>
            <img src={this.props.photo}/>
            
            
            </div>
        );
    }
}

export default ShowRestaurant;