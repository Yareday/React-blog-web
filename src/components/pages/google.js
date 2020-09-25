import React,  {Component} from 'react'
import GoogleLogin from 'react-google-login'
export class App extends Component {
    responseGoogle=(response)=> {
        console.log(response);
        console.log(response.profileObj);

    }
    render() {
        return(
            <div>
                <GoogleLogin
                    clientId="976076546959-79kbamuou60mm9elj5kev1jusd7k1ufh.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    />
            </div>
        )
    }
}