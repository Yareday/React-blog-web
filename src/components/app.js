import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
import axios from 'axios';

 

import NavigationContainer from "./navigation/navigation-container";
import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";
import blog from "./pages/blog";
import PortfolioManager from  "./pages/portfolio-manager";
import PortfolioDetail from "./Portfoilio/portfolio-detail";
import Auth from "./pages/auth";
import facebook from "./pages/facebook";

import NoMatch from "./pages/no-match";


export default class App extends Component {
 constructor(props){
  super(props);

 this.state={
   loggedInStatus: "NOT_LOGGED_IN" 
   
  } 
  this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this); 
 }

 handleSuccessfulLogin(){
   this.setState({
     loggedInStatus: "LOGGED_IN"
   });
 }
 handleUnsuccessfulLogin(){
  this.setState({
    loggedInStatus: "NOT_LOGGED_IN"
  });
}
handleSuccessfulLogout(){
  this.setState({
    loggedInStatus: "NOT_LOGGED_IN"
  });
}
checkLoginStatus() {
  return axios
  .get("https://api.devcamp.space/logged_in", {
     withCredentials: true 
      })
      .then(response => {
    console.log("logged_in return", response);
    const loggedIn = response.data.logged_in;
    const loggedInStatus = this.state.loggedInStatus;

    // If loggedIn and status LOGGED_IN => return data
    // If loggedIn status NOT_LOGGED_IN => update state
    // if not loggedIn and status LOGGED_IN => update state
    if (loggedIn && loggedInStatus === "LOGGED_IN") {
      return loggedIn;
    } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
      this.setState({
        loggedInStatus: "LOGGED_IN"
      });
    } else if (loggedIn === false && loggedInStatus === "LOGGED_IN") {
      this.setState({
        loggedInStatus: "NOT_LOGGED_IN"
      });
    }
  })
    .catch(error =>  {
    console.log("Error", error);
  }); 
} 
componentDidMount() {
  this.checkLoginStatus();
}
authorizedPages() {
  return [
    <Route key="portfolio-manager" path="/portfolio-manager" component={PortfolioManager} />
   

  ]
}
  render() {  
   
    return (
      <div className="container">
          <Router>
          <div>
          
          <NavigationContainer 
          loggedInStatus = {this.state.loggedInStatus}
          handleSuccessfulLogout={this.handleSuccessfulLogout}
          />
         
           <Switch>
             <Route exact path="/" component={home} />
            
             <Route 
             path="/auth" 
            render={props => (
              <Auth 
              {...props}
              handleSuccessfulLogin={this.handleSuccessfulLogin}
              handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
              />
            )}
             
             />
            
             <Route path="/about-me" component={about} />
             <Route path="/contact" component={contact} />
             <Route path="/blog" component={blog} />
             <Route path="/facebook" component={facebook} />
             
             { this.state.loggedInStatus === "LOGGED_IN" ? (
               this.authorizedPages()
             ) : null}
            
             <Route exact path="/Portfoilio/:slug" component={PortfolioDetail} />
            
         <Route component={NoMatch} />
          </Switch>
          </div>

          
        </Router>  
       
 
      
      
     </div>
      

    );
    
  }
  
}


 