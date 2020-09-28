import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./port-item";
export default class Portcontainer extends Component {
  
  constructor(){
    super();
    this.state ={
      
      search: ''
  };

    this.state={
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: []
  };
  this.handleFilter = this.handleFilter.bind(this);
}
updateSearch(event){
  this.setState({search: event.target.value.substr(0, 100)});
}
handleFilter(filter) {
this.setState({
data: this.state.data.filter(item =>{
  return item.category === filter;
})
});
}
getPortfolioItems() {
  axios
  .get("https://simontes.devcamp.space/portfolio/portfolio_items")
  .then(response => {
   
    this.setState({
      data: response.data.portfolio_items
    });
 })
.catch(error => {
  console.log(error);
});
     }
  portfolioItems() {
  
      return this.state.data.map(item =>{
             return  <PortfolioItem
              key={item.id}
              item={item}
              name={item.name} 
              description={item.description}
             
             />;
      
    })
  }
componentDidMount(){
  this.getPortfolioItems();
}
 
  
  render() {
    let filteredlists = this.state.data.filter(
      (item) => {
          return item.name.toLowerCase().indexOf(
              this.state.search) !== -1;
              
      }

     

     );
     return (
       <div>
         <div className="searchrow">
                    <div className="search-outer">
					<form
						role="search"
						method="get"
						id="searchform"
            className="searchform"
        
					>
						{/* input field activates onKeyUp function on state change */}
            <input
      type="text"
      name="q"
      placeholder="Search Portfolio"
      autoComplete="on"
      className="ac-input"
      
      value={this.state.search}
      onChange={this.updateSearch.bind(this)}/>
    </form>
    </div>
  <div className="portfolio-items-wrapper"> {filteredlists.map((item)=> {
        return <PortfolioItem item={item} name={item.name} description={item.description}
        key={item.id} />
      })}</div>
	</div>
      
  
             
                 
                 
                 
     
    
          <div className="portfolio-items-wrapper">
         <button className="btn" onClick={() => this.handleFilter('eCommerce')}>
          Lifestyle</button>
        <button className="btn" onClick={() => this.handleFilter('Scheduling')}>
          Technology</button>
        <button className="btn" onClick={() => this.handleFilter('Enterprise')}>
          News</button>
          
    
        {this.portfolioItems()}</div>
        
     </div>
     

    
     
    
    );
  }
}