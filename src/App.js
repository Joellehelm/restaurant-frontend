import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/main/Home'
import Login from './components/registration/Login'
import Signup from './components/registration/Signup'
import NavBar from './components/NavBar/NavBar'
import './App.css'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {},
      navClick: "none"
     };
  }
componentDidMount() {
    this.loginStatus()
  }
loginStatus = () => {
    fetch('http://localhost:3001/logged_in')
    .then(r => r.json())
    .then(response => {
      if (response.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }


  navClicked = (type) => {
    this.setState({navClick: type})
  }


render() {
    return (
      
      <div className="App">
        <NavBar navClicked={this.navClicked} user={this.state.user} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
        <div className="login">
        <BrowserRouter>
          <Switch>
            <Route 
              exact path='/' 
              render={props => (
              <Home {...props} navClicked={this.state.navClick} user={this.state.user} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
          </Switch>
        </BrowserRouter>
       </div>
      </div>
     
    );
  }
}
export default App;