import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';

class Welcome extends Component {
    constructor(props){
        super(props);
        this.state={
            redirect:false
        }
        this.signup =this.signup.bind(this);
    }
    
    signup(res, type){
        let postData;
        if(type === 'facebook' && res.email){

        }

        if(type === 'google' && res.w3.U3){

        }
PostData('signup',postData).then((result) =>{
    let responseJson = result;
    if(responseJson.userData){

        sessionStorage.setItem('userData',JSOn.stringify(responseJson));
        this.setState({redirectToReferrer: true});
    }
});
        
    }
    
    render(){

         if(this.state.redirectToReferrer){
             return(<Redirect to={'/'}/>)
         }

        const responseFacebook = (response) =>{
            console.log(response);
            this.signup(response, 'facebook');

        }
        const responseGoogle = (response) => {
            console.log(response);
            this.signup(response, 'google')
        }
        
        return(
            <div className="row" id="Body">
                <div className="medium-12 columns">
                    <h2 id="welcomeText"> Make people fall</h2>

                    <GoogleLogin
                    clientId="976076546959-79kbamuou60mm9elj5kev1jusd7k1ufh.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    />

                    <FacebookLogin
                    appId="643048623016626"
                    autoLoad={true}
                    field="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook} />
                    
                    <a href="/signup" className= "button success">Signup</a>              
                      </div>
            </div>
        );
    }
}
export default Welcome;