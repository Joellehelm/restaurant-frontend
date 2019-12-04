import React, { Component } from 'react';
import Restaurants from './Restaurants'
import Search from './Search'
import ShowRestaurant from './ShowRestaurant'

class RestaurantContainer extends Component {
    constructor(){
        super()

        this.state = {
            city: "",
            placeType: "",
            searched: false,
            proxyUrl: "https://cors-anywhere.herokuapp.com/",
            placeClicked: false,
            placeName: null,
            placeAddress: null,
            placePhone: null
         
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


    showPlace = (placeId) => {
        const placeUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,formatted_phone_number&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
        this.setState({placeClicked: true, placeUrl: placeUrl})
        
    }


    singleView = () => {
        fetch(this.state.proxyUrl + this.state.placeUrl)
        .then(r => r.json())
        .then(place => {
          
            this.setState({placeName: place.result.name})
           
        })
        return <ShowRestaurant name={this.state.placeName} />
    }


  




    render() {
        return (
            <div>
            {   this.state.placeClicked ?
                <div>
                    {this.singleView()}
                </div>
            :           
                <div>
                    <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                    {this.state.searched === true ?                    
                    <Restaurants showPlace={this.showPlace} proxyUrl={this.state.proxyUrl} city={this.state.city} placeType={this.state.placeType} user={this.props.user} />
                    :
                    null}

                </div>
             }
            </div>
        );
    }
}

export default RestaurantContainer;