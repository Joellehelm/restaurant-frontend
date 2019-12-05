import React, { Component } from 'react';
import './NavBar.css'


class NavBar extends Component {
    
   


    render() {
        return (
            
        <div class="container">
            <nav>
                <h1 class="brand"><a href="http://localhost:3000/">Br<span>a</span>nd</a></h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">Favorites</a></li>
                    
                </ul>
            </nav>
        </div>
                
                
         
           
        );
    }
}

export default NavBar;