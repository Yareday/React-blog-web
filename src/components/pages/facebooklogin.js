import React from 'react';

import FacebookLogin from 'react-facebook-login';
 
const responseFacebook = (response) => {
    if (response.status === 200) {
        props.history.push("/");
        
    }
    return response.data;
    console.log(response);
}
 
render(
  <FacebookLogin
    appId="643048623016626"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />,
);

export default function (responseFunction);