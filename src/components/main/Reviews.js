import React, { Component } from 'react';
import FavRevCard from './favRevCard'

class Reviews extends Component {
    constructor(){
        super()
    }

    renderReviews = () => {
      
        return this.props.reviews.map((review, idx) => {
            // debugger
            return <FavRevCard
                        comment={review.comment} 
                        username={review.user.username} 
                        key={idx}
                        />
        })
    }
    render() {
        return (
            <div>
                {this.renderReviews()}
            </div>
        );
    }
}

export default Reviews;




