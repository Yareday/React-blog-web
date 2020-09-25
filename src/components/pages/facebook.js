import React, { Component } from 'react';
import Login from "../auth/login";
import FacebookLogin from 'react-facebook-login';


export default class Facebook extends Component {
   constructor(props){
       super(props);
       this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
       this.handleUnsuccessfulAuth =this.handleUnsuccessfulAuth.bind(this);
   }
  handleSuccessfulAuth(){
      this.props.handleSuccessfulLogin();
      this.props.history.push("/");
  }
  handleUnsuccessfulAuth(){
      this.props.handleUnuccessfulLogin();
  }
  state ={
    isLoggedIn:false,
    userID:'',
    name:'',
    email:''
  }

  responseFacebook = response => {
    //  console.log(response);
     this.setState({
         isLoggedIn:true,
         userID:response.userID,
         name:response.name,
         email:response.email
     });
      };
componentClicked = () => console.log('clicked');
render(){
   

  let fbContent;
  


  if(this.state.isLoggedIn) {
      fbContent=(
          
      <Login
          handleSuccessfulAuth = {this.handleSuccessfulAuth}
          handleUnsuccessfulAuth = {this.handleUnsuccessfulAuth}
      />
      )
      
  }else {
      fbContent = (
          <FacebookLogin
appId="643048623016626"
autoLoad={true}
fields="name,email,picture"
onClick={this.componentClicked}
callback={this.responseFacebook} />
      );

  
  }
  
return (
  
<div className="fby">
    {fbContent}
    
    </div>

)
}
}