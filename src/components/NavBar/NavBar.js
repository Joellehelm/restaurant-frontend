import React, { Component } from 'react';
import './NavBar.css'


class NavBar extends Component {
    constructor(){
        super()

    }
   
    handleSearch = () => {
        this.props.navClicked("search")
    }

    handleFav = () => {
        this.props.navClicked("favorites")
    }

  


    render() {
        return (
        <div className="navbardiv">
            <div className="container">
                <nav>
                    <h1 className="brand"><a className="brandtext" href="http://localhost:3000/">Re<span>v</span>wr</a></h1>
                    <ul>
                        <li><a onClick={this.handleSearch.bind(this)} className="navtext">Search</a></li>
                        <li><a onClick={this.handleFav.bind(this)}className="navtext">Comments</a></li>
                    
                    </ul>
                </nav>
            </div>
        </div>   
         
           
        );
    }
}

export default NavBar;