import React, { Component } from "react";
import axios from 'axios'
// import Result from './Result'

const API_URL = 'https://www.googleapis.com/books/v1/volumes'
 
class Search extends Component {
	state = {
		query: '',
		results: []
	}

	componentDidMount() {
    	axios.get(`${API_URL}?q=tiger`)
			.then(res => {
			const results = res.data;
			this.setState({ results });
		})
	}

	handleChange = event => {
		this.setState({ name: event.target.value });
	}

	handleSubmit = event => {
    	event.preventDefault();
	    const user = {
	      	name: this.state.name
	    };
	    axios.get(`${API_URL}?q=${this.state.name}`, { user })
	    	.then(res => {
	        console.log(res.data.items);
      })
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
	            	<input type="text" name="name" onChange={this.handleChange} />
	          		<button type="submit">Find</button>
        		</form>
			</div>
		);
	}
}

export default Search;