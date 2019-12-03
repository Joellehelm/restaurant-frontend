import React, { Component } from 'react';

class Search extends Component {
  

  
   
   
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
            <label> City </label>
            <input type='text' name="city" onChange={this.props.handleChange} />

            <label> Place Type </label>
            <input type='text' name="placeType" onChange={this.props.handleChange} />

            <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Search;
