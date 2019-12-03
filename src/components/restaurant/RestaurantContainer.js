import React, { Component } from 'react';
import Restaurants from './Restaurants'
import Reviews from './reviews'
import Search from './Search'

class RestaurantContainer extends Component {
    constructor(){
        super()

        this.state = {
            city: "",
            placeType: "",
            searched: false,
         
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({searched: true})
      
    }

    handleChange = (event) => {
        this.setState({test: !this.state.test})
      
        this.setState({ [event.target.name]: event.target.value})
        this.setState({searched: false})
    }


    render() {
        return (
            <div>
                <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                {this.state.searched === true ?                    
                <Restaurants city={this.state.city} placeType={this.state.placeType} user={this.props.user} />
                :
                null}
              
            </div>
        );
    }
}

export default RestaurantContainer;