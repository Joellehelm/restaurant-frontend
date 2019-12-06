import React, { Component } from 'react';
import Reviews from './reviews'

class ShowRestaurant extends Component {
    state = {
       
        favorited: false
    }
  
    toggleFav = (event) => {

        if(this.state.favorited === false){
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
    }}

    componentDidMount(){
        fetch('http://localhost:3001/favorites')
        .then(r => r.json())
        .then(favs => {
            favs.map(fav => {
                if(fav.user_id === this.props.user.id && fav.restaurant_id === this.props.placeId){
                    this.setState({favorited: true})
                }
            })
        })
    }
  

    render() {
        return (
            <div>
        
          
            <h1>{this.props.name}</h1>
            <img src={this.props.photo} alt={this.props.name}/>
            
            <Reviews user={this.props.user} placeId={this.props.placeId}/>
            <button className="favoriteButton" onClick={this.toggleFav}>
            {this.state.favorited === true ? "Favorited!" : "Add To Favorites" }
            </button>
          
            </div>
        );
    }
}

export default ShowRestaurant;