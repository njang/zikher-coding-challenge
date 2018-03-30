import React, { Component } from "react";
 
class Search extends Component {
	constructor(){
		super()
		this.state = {
			query: ""
		}
	} 
	handleInputChange = () => {
		this.setState({
			query: this.search.value
		})
	}

	render() {
		return (
			<div className="container">
				<form>
					<input 
						type="text" placeholder="Search.." 
						ref={input => this.search = input}
         				onChange={this.handleInputChange}
					/>
					<input type="submit" text="Submit" />
					<p>{this.state.query}</p>
				</form>
			</div>
		);
	}
}

export default Search;