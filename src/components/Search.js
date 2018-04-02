import React, { Component } from "react";
import axios from "axios"
import Result from "./Result"

const API_URL = "https://www.googleapis.com/books/v1/volumes"
// const API_URL = "https://www.google.com/search?tbm=bks"
 
class Search extends Component {
	state = {
		query: "",
		limit: "10",
		initialMode: true,
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
	        	initialMode: false,
	        	results: res.data.items
	        })
        });
	}

	render() {
		let displayElement = (
			<div className="row align-items-center justify-content-center search">
				<form className="col-11 col-sm-8 row form-group justify-content-center" onSubmit={this.handleSubmit}>
            		<input className="col-7 col-md-6 col-lg-5 form-control" type="text" name="query" aria-label="Query" placeholder="Search Google Books" onChange={this.handleChange} />
            		<input className="col-2 form-control" type="number" name="limit" aria-label="Limit" placeholder="Limit results" defaultValue="10" step="5" min="10" max="40" onChange={this.handleChange} />
	          		<button className="col-3 col-md-2 btn" type="submit">Find</button>
        		</form>
        		{/*this.state.initialMode ? null : <Result results={this.state.results} /> */}
    		</div>
		);
		if (this.state.initialMode === false) {
			displayElement = (
				<div className="row align-items-center justify-content-center result">
					<form className="col-11 col-sm-8 row form-group justify-content-center" onSubmit={this.handleSubmit}>
	            		<input className="col-7 col-md-6 col-lg-5 form-control" type="text" name="query" aria-label="Query" placeholder="Search Google Books" onChange={this.handleChange} />
	            		<input className="col-2 form-control" type="number" name="limit" aria-label="Limit" placeholder="Limit results" defaultValue="10" step="5" min="10" max="40" onChange={this.handleChange} />
		          		<button className="col-3 col-md-2 col-lg-1 btn" type="submit">Find</button>
	        		</form>
	        		<Result results={this.state.results} />
	    		</div>
			);
		}
		return (
			<div className="container-fluid">
          		{ displayElement }
			</div>
		);
	}
}

export default Search;