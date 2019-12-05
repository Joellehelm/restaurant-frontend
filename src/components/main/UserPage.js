import React, { Component } from 'react';
import Reviews from './Reviews'
import Favorites from './Favorites'

class UserPage extends Component {

    state = {
        favorites: [],
        reviews: []
    }

    fetchFavorites = () => {
        fetch(`http://localhost:3001/favorites`)
        .then(r => r.json())
        .then(favs => {
            this.setState({ favorites: favs })
        })
    }

    fetchReviews = () => {
        fetch(`http://localhost:3001/reviews`)
        .then(r => r.json())
        .then(revs => {
            this.setState({ reviews: revs })
        })
    }

    render() {
        return (
            <div>
                <Favorites favorites={this.state.favorites}/>
                <Reviews reivews={this.state.reviews}/>
            </div>
        );
    }
}

export default UserPage;
