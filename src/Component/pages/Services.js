import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Services extends Component {
    render() {
        if(sessionStorage.getItem('name')===null){
            return <Redirect to="/login"/>
        }else{  return (
           <div>
               <h1>This is Qazi from claverprogrammer.com this is Services page</h1>
           </div>
        );}
    }
}

export default Services;