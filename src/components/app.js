import React, { Component } from 'react';

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
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";
export default class App extends Component {
 
   

  
  render() {
   
    return (
      <div className="container">
          <Router>
          <div>
          
          <NavigationContainer />
           <Switch>
             <Route exact path="/" component={home} />
             <Route path="/auth" component={Auth} />
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
