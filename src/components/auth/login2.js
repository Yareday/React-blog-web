import React, { Component } from 'react';
import axios from 'axios';

export default class Logim extends Component {
    constructor(props){
    super(props);

    this.state = {
        email:"simon.tesfaye1@gmail.com",
        password:"simon123123123123",
        errorText:""
    };
       
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value,
        errorText:""
            });
    }
    
    handleSubmit(event) {
        axios.post("https://api.devcamp.space/sessions", 
        {
            client: {
                email: this.state.email,
                password: this.state.password
            }
        },
        { withCredentials: true }
        ).then(response => {
            if (response.data.status === 'created') {
                this.props.handleSuccessfulAuth();
               
            } else {
                this.setState({
                    errorText:"Wrong email or password"
                });
                this.props.handleUnsuccessfulAuth();
            }
        })
        .catch(error => {
            this.setState({
                errorText: "An error Occured"
            });
            this.props.handleUnsuccessfulAuth();
        });
        
        event.preventDefault();
    }
    
    render() {
        return(
            <div>
                
                <div>{this.state.errorText}</div>
                <form onSubmit={this.handleSubmit}>
                 
                  
                  <div>
                      <button type="submit">Continue</button>
                      
                  </div>
                 
                </form>
               
            </div>
            
           
        );
        
    }
    
   
}

                                                  