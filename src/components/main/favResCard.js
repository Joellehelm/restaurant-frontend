import React, { Component } from 'react';

class favResCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <img src={this.props.photo} alt={this.props.name}/>
            </div>
        );
    }
}

export default favResCard;