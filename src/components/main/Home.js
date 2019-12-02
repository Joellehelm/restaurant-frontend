import React from 'react';

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
      <Link to='/login'>Log In</Link>
      <br></br>
      <Link to='/signup'>Sign Up</Link>
      <br></br>
      { 
        props.loggedInStatus ? 
        <Link to='/logout' onClick={handleClick}>Log Out</Link> : 
        null
      }
    </div>
  );
};
export default Home;