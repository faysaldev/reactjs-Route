import React, { Component } from 'react';

class Search extends Component {
    
    constructor({match}){
        super();
        this.state={
            name:match.params.username
        }
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Search" value={this.state.name}/>
            </div>
        );
    }
}

export default Search;