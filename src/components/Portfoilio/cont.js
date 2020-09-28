import React from 'react';

import PortfolioItem from "./port-item";
class List extends React.Component {
   constructor(){
    super();
      this.state ={
           search: ''
       };
}
 
      updateSearch(event){
          this.setState({search: event.target.value.substr(0, 20)});
      }


     render() {
         let filteredlists = this.state.data.filter(
          (item) => {
              return item.name.toLowerCase().indexOf(
                  this.state.search.toLowerCase()) !== -1;
          }

         

         );
         return (
             <div>
                 <input type="text"
                     value={this.state.search}
                     onChange={this.updateSearch.bind(this)}/>
                 <ul>
                     {filteredlists.map((item)=> {
                       return <PortfolioItem item={item}
                       key={item.id}/>
                     })}
                     </ul>
                     
                     </div>
                     )
                    }}
export default List;