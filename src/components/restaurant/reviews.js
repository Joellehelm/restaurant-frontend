import React, { Component } from 'react';

class Reviews extends Component {



    handleSubmit = (event) => {
        event.preventDefault()
        
        console.log(event.target.review.value)
        console.log(this.props.user)

        fetch('http://localhost:3001/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({comment: event.target.review.value, user_id: this.props.user.id, restaurant_id: this.props.placeId })
        })
        
        
    }


    render() {
        return (
            <div>
                <h1>Reviews</h1>
                <form onSubmit={this.handleSubmit}>
                    <textarea id="review-text" name="review"/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Reviews;