import React, { Component } from 'react';
import moment from 'moment';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';



import NavigationContainer from "./navigation/navigation-container";
import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";
import blog from "./pages/blog";

export default class App extends Component {
  render() {
    return (
      <div className="app">
          <Router>
          <div>
          <h1>Simon's Modern Blog</h1>            
        <div> 
          {moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
          <NavigationContainer />
           <Switch>
             <Route exact path="/" component={home} />
             <Route path="/about-me" component={about} />
             <Route path="/contact" component={contact} />
             <Route path="/blog" component={blog} />
          </Switch>
          </div>
        </Router>  
      
      
     </div>
      

    );
  }
}
