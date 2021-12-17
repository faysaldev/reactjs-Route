import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useCookies } from 'react-cookie';
const [cookies, setCookie, removeCookie] = useCookies(['lname-faysalmridha']);


class Home extends Component {

constructor(){
    super();
    this.state={
        searchvalue:""
    }
}

onchangeHandler=(event)=>{
    const myvalue="/search/" +event.target.value;
    this.setState({searchvalue:myvalue})
}

    render() {
        if(sessionStorage.getItem("name")===null){
            return <Redirect to="/login"/>
        }else{
            return (
                <div style={{textAlign:"center",padding:"5px",width:"85%",margin:"auto"}}>
                    <form className="search-bar">
                        <input onChange={this.onchangeHandler} type="text" placeholder="Search"/>
                        <button><Link to={this.state.searchvalue} >Send</Link></button>
                    </form>
                    <h1>Hey This Is The actual Home Page</h1>
                </div>
            );
        }
        
    }
}

export default Home;