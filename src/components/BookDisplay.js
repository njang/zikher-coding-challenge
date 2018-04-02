import React, { Component } from "react";

class BookDisplay extends Component {
	render() {
		return (
        	<div className="row">
        		<div className="col-7">
        			<a href={ this.props.previewLink } target="_blank" rel="noopener noreferrer" >
						{ this.props.title }
					</a>
				</div>
				https://books.google.com/books?isbn={ this.props.isbn10 }
				<img src={ this.props.thumbnail } alt={ this.props.title } height="60px" />

				<div className="col-3">{ this.props.authors }</div>
				<div className="col-2">{ this.props.publishedDate }</div>
			</div>
        )
	}
};

export default BookDisplay;