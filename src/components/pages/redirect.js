import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Redirect } from "react-router-dom";


export default class Auth extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedin:false
    
        }
       
        
       
    }
    responseFacebook=(response)=> {
        console.log(response);
        this.setState({
            isLoggedin : true
        })
    }
    
state = { redirect: null };

render() {
        return(
            this.state.isLoggedin ? <Redirect push to="/auth" />:
            this.setState({ redirect: "/auth" })
              
         
           ( <div className="socials">
               <div className="social-grid">
               <div>
               <FacebookLogin
                    appId="643048623016626"
                    autoLoad={true}
                    fields="name,email,picture"
                     onClick={this.componentClicked}
                     callback={this.responseFacebook} /></div>
                    <div>
                    
                    </div>
                    </div>

                    
            </div>)
        )
    }  
  
    
}     

