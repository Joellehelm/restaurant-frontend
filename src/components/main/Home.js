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
        <div className="maincontainer"> 
        <div className="logoutlink"><Link to='/logout' onClick={handleClick}>Log Out</Link> </div>
        <h1>Hello {props.user.username}</h1> 
        <MainContainer navClicked={props.navClicked} user={props.user}/>
       </div>
       : 

        <div className="logsignlink"> <Link to='/login'>
          <button className="button" id="login">
	      Login
	      <div className="button__horizontal"></div>
	      <div className="button__vertical"></div>
        </button>
        </Link>
        <br></br>
        <Link to='/signup'><div className="signuptext">
        <button className="button" id="sign">
	      Sign Up
	      <div className="button__horizontal"></div>
	      <div className="button__vertical"></div>
        </button></div></Link>
        <br></br>
        </div>
      }
    </div>
  );
};
export default Home;