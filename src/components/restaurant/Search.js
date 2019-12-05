import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
  

  
   
   
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
            <label> City </label>
            <input class="input" type='text' name="city" onChange={this.props.handleChange} />

            <label> Place Type </label>
            <input class="input" type='text' name="placeType" onChange={this.props.handleChange} />

            <input class="button" type="submit" value="Submit" />
            </form>
        );
    }
}

export default Search;
