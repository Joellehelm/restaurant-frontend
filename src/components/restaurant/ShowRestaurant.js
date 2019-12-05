import React, { Component } from 'react';
import Reviews from './reviews'

class ShowRestaurant extends Component {
    state = {
        favorited: false
    }
  
    toggleFav = (event) => {
        this.setState({ favorited: true })
        event.preventDefault()

        fetch('http://localhost:3001/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user_id: this.props.user.id, restaurant_id: this.props.placeId})
        })
    }
  

    render() {
        return (
            <div>
        
          
            <h1>{this.props.name}</h1>
            <img src={this.props.photo} alt={this.props.name}/>
            <button onClick={this.toggleFav}>
            {this.state.favorited ? "Favorited!" : "Add To Favorites" }
            </button>
            
            <Reviews user={this.props.user} placeId={this.props.placeId}/>
            

            </div>
        );
    }
}

export default ShowRestaurant;