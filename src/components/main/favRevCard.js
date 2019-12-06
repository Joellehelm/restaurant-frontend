import React, { Component } from 'react';

class favRevCard extends Component {
    render() {
        return (
            <div className="favReviewCard">
            <h4>{this.props.comment}</h4>
            <h3>{this.props.username}</h3>           
            </div>
        );
    }
}

export default favRevCard;