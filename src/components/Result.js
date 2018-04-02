import React, { Component } from "react";
import BookDisplay from "./BookDisplay"

class Result extends Component {
	render() {
        this.props.results.sort((a, b) => {
        	if (a.volumeInfo.publishedDate < b.volumeInfo.publishedDate) {
				return 1;
			}
			if (a.volumeInfo.publishedDate > b.volumeInfo.publishedDate) {
				return -1;
			}
			return 0;
        })
        let booksDisplay = this.props.results.map(book => (
            <BookDisplay 
            	key = { book.id }
            	title = { book.volumeInfo.title }
            	authors = { book.volumeInfo.authors }
            	publishedDate = { book.volumeInfo.publishedDate }
            	thumbnail = { book.volumeInfo.imageLinks.smallThumbnail }
            	selfLink = { book.selfLink }
            />
        ))
		return (
			<div className="container">
            	<div className="row">
            		<div className="col-7 h4" onClick="alert('Title')">Title</div>
					<div className="col-3 h4" onClick="alert('Authors')">Authors</div>
					<div className="col-2 h4" onClick="alert('Date')">Published Date</div>
				</div>
				{ booksDisplay }
			</div>
		);
	}
}

export default Result;
