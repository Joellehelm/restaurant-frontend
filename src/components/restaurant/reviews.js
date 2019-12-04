import React, { Component } from 'react';
import ReviewCard from './ReviewCard';

class Reviews extends Component {
    constructor(){
        super()

        this.state = {
            reviews: []
            
        }
    }


    handleSubmit = (event) => {
        event.preventDefault()


        fetch('http://localhost:3001/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({comment: event.target.review.value, user_id: this.props.user.id, restaurant_id: this.props.placeId})
        })

        this.fetchReviews()
        
    }

    fetchReviews = () => {
        fetch('http://localhost:3001/reviews')
        .then(r => r.json())
        .then(reviews => {
          

           const theseReviews = reviews.filter(review => 
                review.restaurant_id.includes(this.props.placeId)).map(correctReviews => {
                    return correctReviews
                })
            
            if(theseReviews.length > 0){
                this.setState({reviews: theseReviews})
            } 
            
        })
        this.showReviewCards()
    }


    componentDidMount(){
        this.fetchReviews()
        
     
    }

    handleDelete = () => {
        let url = 'http://localhost:3001/reviews'
        let review = this.state.review.id
        // debugger
        console.log(this.state.review.id)
        return fetch(url + '/' + review, {
            method: 'DELETE'
        }) 
        .then(r => r.json())
    }

    showReviewCards = () => {

        if(this.state.reviews.length > 0){
  
            return this.state.reviews.map((review, idx) => {
          
                return( 
                        <React.Fragment key={idx}>
                        
                        <ReviewCard
                        comment={review.comment} 
                        username={review.user.username} 
                        currentUser={this.props.user}
                        commentUserId={review.user_id}
                        reviewId={review.id}
                        />

                        <button onClick={this.handleDelete}>
                        {'DESTROY'}
                        </button>
                        </React.Fragment>
                
            )}
        )}  
    }


    render() {
        return (
            <div>
                <h1>Reviews</h1>
                <div>
                    {this.state.reviews.length > 0 ? this.showReviewCards() : null}
                    {/* <button onClick={this.handleDelete}>
                    {'DESTROY'}
                    </button> */}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <textarea id="review-text" name="review"/>
                    <input type="submit" value="Submit" />
                </form>


            </div>
        );
    }
}

export default Reviews;