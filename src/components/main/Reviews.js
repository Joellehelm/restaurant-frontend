import React, { Component } from 'react';


const Reviews = props => {
     
    return (
            <div>
                {props.reviews.map(review => <Reviews reviews={review} key={review.id}/>)}
            </div>
        )
    }

export default Reviews;
