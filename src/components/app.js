import React, { Component } from 'react';
import moment from 'moment';
import axios from "axios";
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
import PortfolioDetail from "./Portfoilio/portfolio-detail";
import NoMatch from "./pages/no-match";
export default class App extends Component {
 constructor(){
   super();

   this.getPortfolioItems = this.getPortfolioItems.bind(this);
 }

  getPortfolioItems() {
   axios.get('https://simontes.devcamp.space/portfolio/portfolio_items')
   .then(response => {
     console.log("response data", response);
  })
 .catch(error => {
   console.log(error);
 });
      }
  render() {
    this.getPortfolioItems();
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
             <Route exact path="/Portfoilio/:slug" component={PortfolioDetail} />
         <Route component={NoMatch} />
          </Switch>
          </div>
        </Router>  
      
      
     </div>
      

    );
  }
}
