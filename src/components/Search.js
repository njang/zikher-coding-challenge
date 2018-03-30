import React, { Component } from "react";
import axios from 'axios'
import Result from './Result'

const API_URL = 'https://www.googleapis.com/books/v1/volumes'
 
class Search extends Component {
	state = {
		query: '',
		limit: '10',
		results: []
	}

	handleChange = event => {
		this.setState({ 
			[event.target.name]: event.target.value 
		});
	}

	handleSubmit = event => {
    	event.preventDefault();
	    axios.get(`${API_URL}?q=${this.state.query}&maxResults=${this.state.limit}`).then((res) => {
	        this.setState({
	        	results: res.data.items
	        })
        })
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
            		<input type="text" name="query" aria-label="Query" onChange={this.handleChange} />
            		<input type="number" name="limit" aria-label="Limit" placeholder="Limit results" defaultValue="10" step="5" min="10" max="40" onChange={this.handleChange} />
	          		<button type="submit">Find</button>
        		</form>
    			<Result results={this.state.results} />
			</div>
		);
	}
}

export default Search;