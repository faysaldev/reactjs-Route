import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


class Protfolio extends Component {
    render() {
        if(sessionStorage.getItem('name')===null){
            return <Redirect to="/login"/>
        }else{  return (
           <div>
               <h1>This is Faysal Protfolio</h1>
           </div>
        );}
    }
}

export default Protfolio;