import React, { Component } from 'react';
import Login from "../auth/login";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import GitHubLogin from 'react-github-login';


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
      this.props.handleUnsuccessfulLogin();
  }
  state ={
    isLoggedIn:false,
    googleID:'',
    name:'',
    email:''
  }
  state ={
    isLoggedIn:false,
    userID:'',
    name:'',
    email:''
  }
  state ={
    isLoggedIn:false,
    redirectUri:"", 
    name:'',
    email:''
  }
  
  
      responseGoogle=(response)=> {
        console.log(response);
        console.log(response.profileObj);
        this.setState({
            isLoggedIn:true,
            googleID:response.googleID,
            name:response.name,
            email:response.email
        });
    };
    responseFacebook = response => {
        //  console.log(response);
         this.setState({
             isLoggedIn:true,
             userID:response.userID,
             name:response.name,
             email:response.email
         });
          };
          
          onSuccess = (response)=> {
            console.log(response);
            
            this.setState({
                isLoggedIn:true,
                redirectUri:response.redirectUri,
                name:response.name,
                email:response.email
            });
        };
render() {
    var fbContent;
    var ggContent;
    var gitContent;
   

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
  autoLoad={false}
  fields="name,email,picture"
  onClick={this.componentClicked}
  callback={this.responseFacebook}
  onFailure= {console.error()} />
        );
  
    
    }




  if(this.state.isLoggedIn) {
      ggContent=(
          
      <Login
          handleSuccessfulAuth = {this.handleSuccessfulAuth}
          handleUnsuccessfulAuth = {this.handleUnsuccessfulAuth}
      />
      )
      
  }else {
      ggContent = (
        <GoogleLogin
        clientId="976076546959-79kbamuou60mm9elj5kev1jusd7k1ufh.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        autoLoad={false}
        onSuccess={this.responseGoogle}
        onFailure= {console.error()}
        cookiePolicy={'single_host_origin'}
        />


      );

  
  }
  
  
  if(this.state.isLoggedIn) {
    gitContent=(
        
    <Login
        handleSuccessfulAuth = {this.handleSuccessfulAuth}
        handleUnsuccessfulAuth = {this.handleUnsuccessfulAuth}
    />
    )
    
}else {
    gitContent = (
        <GitHubLogin 
        clientId="27cf9ccae112c4c8d79a"
        autoLoad={false}
        buttonText="LOGIN WITH GITHUB"
        redirectUri="http://localhost:3000/auth"
    onSuccess={this.onSuccess}
    onFailure= {console.error()}/>
    );


}


return (
  
<div className="fby">
    <div className="fbyg">
    <div className='ggbtn'>
    {fbContent}</div>   
    <div className='fbbtn'>{ggContent}
    </div> 
   
    
    <div className='gitbtn'>
    {gitContent}</div>
    </div>
    </div>






)
}
}