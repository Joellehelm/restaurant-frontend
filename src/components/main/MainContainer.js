import React, { Component } from 'react';
import RestaurantContainer from '../restaurant/RestaurantContainer'
import UserPage from './UserPage'

class MainContainer extends Component {

    
    renderComponent = () => {
        if(this.props.navClicked === "none" || this.props.navClicked === "search"){
            return <RestaurantContainer user={this.props.user} />
        }else if(this.props.navClicked === "favorites"){
            return <UserPage user={this.props.user} />
        }
    }

    render() {
        return (
            <div>
              {this.props.navClicked === "favorites" ? <UserPage user={this.props.user} /> : <RestaurantContainer user={this.props.user} />}
            </div>
        );
    }
}

export default MainContainer;