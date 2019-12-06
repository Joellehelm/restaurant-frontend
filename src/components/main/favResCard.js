import React, { Component } from 'react';

class favResCard extends Component {
    render() {
        return (
            <div className="favResCard">
                <h1>{this.props.name}</h1>
                <img src={this.props.photo} alt={this.props.name}/>
            </div>
        );
    }
}

export default favResCard;