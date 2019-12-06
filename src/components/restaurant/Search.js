import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
    render() {
        return (
            <div>
            <label className="searchLabel"> City </label>
            <label className="searchLabel"> Place Type </label>
            <form onSubmit={this.props.handleSubmit}>
            <input className="searchBox" placeholder='Name' type='text' name="city" onChange={this.props.handleChange} />

            <input className="searchBox" placeholder='Category' type='text' name="placeType" onChange={this.props.handleChange} />

            <input className="searchSubmit" type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default Search;
