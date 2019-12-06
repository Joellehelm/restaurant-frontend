import React, { Component } from 'react';

class favRevCard extends Component {
    render() {
        return (
            <div>
            <h4>{this.props.comment}</h4>
            <h3>{this.props.username}</h3>           
            </div>
        );
    }
}

export default favRevCard;