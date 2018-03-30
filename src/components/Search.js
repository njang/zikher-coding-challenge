import React, { Component } from "react";
import axios from 'axios'
// import Result from './Result'

const API_URL = 'https://www.googleapis.com/books/v1/volumes'
 
class Search extends Component {
	state = {
		query: '',
		results: []
	}

	handleChange = event => {
		this.setState({ query: event.target.value });
	}

	handleSubmit = event => {
    	event.preventDefault();
	    const user = {
	      	query: this.state.query
	    };
	    axios.get(`${API_URL}?q=${this.state.query}`, { user })
	    	.then(res => {
	        console.log(res.data.items);
      })
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
	            	<input type="text" name="query" onChange={this.handleChange} />
	          		<button type="submit">Find</button>
        		</form>
			</div>
		);
	}
}

export default Search;