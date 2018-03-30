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
	    axios.get(`${API_URL}?q=${this.state.query}`)
	    	.then(res => {
	        console.log(res.data.items);
	        this.setState({
	        	results: res.data.items
	        })
      })
	}

	render() {
		let resultDisplay = this.state.results.map((book) => {
            return (
                <li key={book.id}>{ book.volumeInfo.title } by { book.volumeInfo.authors[0] }</li>
            )
        })
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
	            	<input type="text" name="query" onChange={this.handleChange} />
	          		<button type="submit">Find</button>
        		</form>
        		<ul>
    			{ resultDisplay }
    			</ul>
			</div>
		);
	}
}

export default Search;