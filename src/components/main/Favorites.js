import React, { Component } from 'react';
import RestaurantCard from '../restaurant/RestaurantCard'

class Favorites extends Component {
   constructor(){
       super()

       this.state = {
           data: []
       }
   }

  
    
   
  


    render() {
        return (
            <div>
                {/* {this.showRestaurants()} */}
            </div>
        );
    }
}

export default Favorites;







// {props.favorites.map((favorite, idx) => <RestaurantCard favorites={favorite} key={idx}/>)}













