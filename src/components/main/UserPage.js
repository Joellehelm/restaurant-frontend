import React, { Component } from 'react';
import Reviews from './Reviews'
import Favorites from './Favorites'

class UserPage extends Component {

    state = {
        favorites: [],
        reviews: []
    }

    componentDidMount(){
        this.fetchFavorites()
        this.fetchReviews()

    }


    fetchFavorites = () => {
        fetch(`http://localhost:3001/favorites`)
        .then(r => r.json())
        .then(favs => {
            let filterFavorites = []

            favs.forEach(fav => {
                if(fav.user_id ===this.props.user.id){
                    filterFavorites.push(fav)
                }
            })
       
            this.setState({ favorites: filterFavorites })
        })
    }

    fetchReviews = () => {
        fetch(`http://localhost:3001/reviews`)
        .then(r => r.json())
        .then(revs => {
          
            let filter = []
            
            revs.forEach(rev => {
                if(rev.user_id === this.props.user.id){
                    filter.push(rev)
                }
            })
           
           
           this.setState({reviews: filter})
           
        })
    }

    render() {
        // console.log(this.state.reviews)
        return (
            <div>
                <Favorites user={this.props.user} favorites={this.state.favorites}/>
                <Reviews user={this.props.user} reviews={this.state.reviews}/>
            </div>
        );
    }
}

export default UserPage;
