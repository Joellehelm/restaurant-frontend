import React, { Component } from 'react';

class Restaurants extends Component {
    constructor(){
        super()

        this.state = {
            location: null,
            foodType: ""
        }
    }



    componentDidMount(){
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
        const proxyurl = "https://cors-anywhere.herokuapp.com/";


        fetch(proxyurl + url)
        .then(r => r.json())
        .then(response => {
            response.results.map(place => {
                (place.photos.map(pic => {
                    console.log(pic.html_attributions[0])
                    
                }))
                // place.name
                // place.openinghours
                // place.rating
                // place.pricelevel
                
            })
        })
    }


    render() {
        return (
            <div>
                <h1>HELLO from restaurants</h1>
            </div>
        );
    }
}

export default Restaurants;