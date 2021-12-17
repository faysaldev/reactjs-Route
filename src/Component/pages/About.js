import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class About extends Component {
    render() {
        if(sessionStorage.getItem('name')===null){
            return <Redirect to="/login"/>
        }else{  return (
           <div>
               <h1>This is Qazi from claverprogrammer.com</h1>
           </div>
        );}
      
    }
}

export default About;