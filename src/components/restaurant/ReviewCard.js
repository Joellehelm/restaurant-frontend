import React, { Component } from 'react';

class ReviewCard extends Component {
    render() {
        return (
            <div>
             <h4>{this.props.comment}</h4>
            <h3>user that made the comment</h3>
            </div>
        );
    }
}

export default ReviewCard;