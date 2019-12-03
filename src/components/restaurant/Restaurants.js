import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard'

class Restaurants extends Component {
    constructor(){
        super()

        this.state = {
            data: null
        }
    }



    componentDidMount(){
       
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant+Austin&radius=1500&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        this.setState({url: url})

        fetch(proxyurl + url)
        .then(r => r.json())
        .then(response => {
            this.setState({data: response.results})
        })
    
    }

  

        
    showRestaurants = () => {
        
        return this.state.data.map((place, idx) => {
            const picture = (place.photos.map(pic => {
                const imageurl = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + pic.photo_reference + '&key=' + process.env.REACT_APP_GOOGLE_API_KEY; 
                return imageurl
                }))
            
         
           return <RestaurantCard name={place.name} photo={picture} rating={place.rating} pricelevel={place.pricelevel} key={idx}/>
        })
    }




    render() {

        if (!this.state.data){
            return <div />
        }

        return (
            <div>
               {this.showRestaurants()}
              
                
            </div>
        );
    }
}

export default Restaurants;