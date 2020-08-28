import React, { Component } from "react";

import PortfolioItem from "./port-item";
export default class Portcontainer extends Component {
  constructor(){
    super();


    this.state={
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
      { title: "Home", category: "eCommerce" },
      { title: "About", category: "Chatapp" },
      { title: "Blog", category: "LMS" },
      { title: "My Blogs", category: "eCommerce" }
      
    ]
  };
  this.handleFilter = this.handleFilter.bind(this);
}
handleFilter(filter) {
this.setState({
data: this.state.data.filter(item =>{
  return item.category === filter;
})
});
}
  portfolioItems() {
    
    return this.state.data.map(item =>{
      return <PortfolioItem title={item.title} url={"google.com"} />;
    })
  }

  
  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        <button onClick={() => this.handleFilter('eCommerce')}>
          eCommerce</button>
        <button onClick={() => this.handleFilter('Chatapp')}>
          Chatapp</button>
        <button onClick={() => this.handleFilter('LMS')}>
          LMS</button>
        {this.portfolioItems()}
     <hr/>

    
     </div> 
    
    );
  }
}