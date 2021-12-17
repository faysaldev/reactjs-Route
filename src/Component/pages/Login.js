import React, { Component } from 'react';

class Login extends Component {
constructor(){
    super();
    this.state={
        inputvalue:""
    }
}
    onchangeHandler=(event)=>{
        const inputvalu =event.target.value;
        this.setState({inputvalue:inputvalu});
    }
    clickhandler=()=>{
        sessionStorage.setItem("name",this.state.inputvalue);
        const cookie='fname='+ this.state.inputvalue+';'+ +'expires=';
        document.cookie= cookie + new Date(9999,0,1).toUTCString();
    }
    
    render() {
        return (
            <div>
                <h1>Fill Up this From</h1>
                <form>
                    <input onChange={this.onchangeHandler} type="text" placeholder="Enter Name"/>
                    <button onClick={this.clickhandler}>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;