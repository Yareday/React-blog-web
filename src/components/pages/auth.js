import React, { Component } from 'react';
import Login from "../auth/login";
import Logim from "../auth/login2";
import Logil from "../auth/login3";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import GitHubLogin from 'react-github-login';


export default class Auth extends Component {
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
    responseFacebook = (response) => {
        //  console.log(response);
         this.setState({
             isLoggedIn:true,
             userID:response.userID,
             name:response.name,
             email:response.email,
             xfbml:true
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
          
        <Logil
            handleSuccessfulAuth = {this.handleSuccessfulAuth}
            handleUnsuccessfulAuth = {this.handleUnsuccessfulAuth}
        /> 
        )
        
    }else {
        fbContent = (
           <div className="fbstyle"> <FacebookLogin
  appId="643048623016626"
  autoLoad={false}
  fields="name,email,picture"
  xfbml={true}
  callback={this.responseFacebook}
  onFailure= {console.error()} /></div>
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
        <div className="ggstyle"> <GoogleLogin
        clientId="976076546959-79kbamuou60mm9elj5kev1jusd7k1ufh.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        autoLoad={false}
        onSuccess={this.responseGoogle}
        onFailure= {console.error()}
        cookiePolicy={'single_host_origin'}
        /></div>


      );

  
  }
  
  
  if(this.state.isLoggedIn) {
    gitContent=(
        
    <Logim
        handleSuccessfulAuth = {this.handleSuccessfulAuth}
        handleUnsuccessfulAuth = {this.handleUnsuccessfulAuth}
        style="display:none"
    />
    )
    
}else {
    gitContent = (
        <div className="gitstyle"> <GitHubLogin 
        clientId="27cf9ccae112c4c8d79a"
        autoLoad={false}
        buttonText="LOGIN WITH GITHUB"
        verification_uri= "https://github.com/login/device"
        redirectUri="https://reactlog-11817.web.app/auth"
    onSuccess={this.onSuccess}
    onFailure= {console.error()}/></div>
    );


}


return (
  
<div className="fby">
    <div className="fbyg">
   
    <div className='ggbtn'>{ggContent}
    </div> 
   
    
    <div className='gitbtn'>
    {gitContent}</div>
    <div className='fbbtn'>
    {fbContent}</div>   
    </div>
    </div>






)
}
}