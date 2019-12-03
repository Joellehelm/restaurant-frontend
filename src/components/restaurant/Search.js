import React, { Component } from 'react';

class Search extends Component {
   state = {
       city: '',
       foodType: ''
   }
   

   handleChange = (event) => {
       this.setState({ [event.target.name]: event.target.value})
   }

   
   
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label> City </label>
            <input type='text' name="city" onChange={this.handleChange} />

            <label> Food Type </label>
            <input type='text' name="foodType" onChange={this.handleChange} />

            <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Search;
