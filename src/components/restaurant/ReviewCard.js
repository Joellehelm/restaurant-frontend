import React, { Component } from 'react';

class ReviewCard extends Component {
    constructor(){
        super()

        this.state = {
            editing: false
        }
    }

    editToggle = () => {
        this.setState({editing: true})
    }

    editReview = (event) => {
        event.preventDefault()
      
        fetch(`http://localhost:3001/reviews/${this.props.reviewId}`, {
            method: "PATCH",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({comment: event.target.reviewEdit.value})
        })
        .then(r => r.json())
        .then(response => {
            this.setState({editing: false})
            this.props.renderReviews()
        })
    }

    handleDelete = () => {
        // event.preventDefault()
        fetch(`http://localhost:3001/reviews/${this.props.reviewId}`, {
            method: 'DELETE'
        }) 
        .then(r => r.json())
    }

    render() {
        return (
            <div>
            <h4>{this.props.comment}</h4>
            <h3>{this.props.username}</h3>
            {this.props.currentUser.id === this.props.commentUserId ? <button onClick={() => this.editToggle()}>Edit</button> : null}
            {this.state.editing === true ? 
            <form onSubmit={this.editReview}>
            <textarea id="review-edit" name="reviewEdit"/>
            <input type="submit" value="Submit" />
            </form> : null}

            {this.props.currentUser.id === this.props.commentUserId ? <button onClick={() => this.handleDelete()}>Destroy</button> : null}
            
            </div>
        );
    }
}

export default ReviewCard;


