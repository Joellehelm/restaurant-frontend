import React, { Component } from 'react';
import './NavBar.css'


class NavBar extends Component {
    
   


    render() {
        return (
        <div class="navbardiv">
            <div class="container">
                <nav>
                    <h1 class="brand"><a class="brandtext" href="http://localhost:3000/">Re<span>v</span>wr</a></h1>
                    <ul>
                        <li><a class="navtext" href="#">Home</a></li>
                        <li><a class="navtext" href="#">Search</a></li>
                        <li><a class="navtext" href="#">Favorites</a></li>
                    
                    </ul>
                </nav>
            </div>
        </div>   
         
           
        );
    }
}

export default NavBar;