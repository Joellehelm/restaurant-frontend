import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard'
import ShowRestaurant from './ShowRestaurant'
import './Restaurants.css'

class Restaurants extends Component {
    constructor(){
        super()

        this.state = {
            data: null,
            placeUrl: null
        }
    }

    fetchPlaces = () => {
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.props.city}&radius=150000&type=${this.props.placeType}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`

        fetch(this.props.proxyUrl + url, {
            method: "GET",
            headers: {
                "mode": "no-cors"
            }
        })
        .then(r => r.json())
        .then(response => {
        
            this.setState({data: response.results})
            this.showRestaurants()
        })
       
      
    }

    componentDidMount(){
       
       this.fetchPlaces()
       
    }


        
    showRestaurants = () => {
        
        return this.state.data.map((place, idx) => {
          
            if(!place.photos){
                place.photos = [{photo_reference: "CmRaAAAA00wc-fEjfxFgC0G2KkTWDnz1ldHzSv7wO2bDGo5F_N…HfOqnVncV6UPtVYi4OfGhT5d9-LtWaJaZMLo-1-imney81XLQ"}]  
            } 
            const picture = (place.photos.map(pic => {
                const imageurl = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + pic.photo_reference + '&key=' + process.env.REACT_APP_GOOGLE_API_KEY; 
                return imageurl
                }))
                  
          
           return <RestaurantCard showPlace={this.props.showPlace} placeId={place.place_id} name={place.name} photo={picture} rating={place.rating} pricelevel={place.pricelevel} key={idx}/>
   
        })  
    }






    render() {

        if (!this.state.data){
            return <div></div>
        }

        return (
            <div className="restaurantContainer">            
               {this.showRestaurants()}
            </div>
        );
    }
}

export default Restaurants;