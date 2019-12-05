import React from 'react';
import MainContainer from './MainContainer'
import './home.css'

import {Link} from 'react-router-dom'
const Home = (props) => {


const handleClick = () => {
    fetch('http://localhost:3001/logout', {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }

  
return (
   
    <div>
      
      { 
        props.loggedInStatus ? 
       <div> 
        <h1>Hello {props.user.username}</h1> 
        <Link to='/logout' onClick={handleClick}>Log Out</Link> 
        <MainContainer user={props.user}/>
       </div>
       : 

        <div class="logsignlink"> <Link to='/login'><div class="logintext">Log In</div></Link>
        <br></br>
        <Link to='/signup'><div class="signuptext">Sign Up</div></Link>
        <br></br>
        </div>
      }
    </div>
  );
};
export default Home;