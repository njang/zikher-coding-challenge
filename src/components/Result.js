import React, { Component } from "react";

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
        let booksDisplay = this.props.results.map((book) => {
            return (
            	<div className="row" key={ book.id }>
            		<div className="col-7">
            			<a href={ book.selfLink } target="_blank" rel="noopener noreferrer" >
            				<img src={ book.volumeInfo.imageLinks.smallThumbnail} alt={ book.volumeInfo.title } />
							{ book.volumeInfo.title }
						</a>
					</div>
					<div className="col-3">{ book.volumeInfo.authors }</div>
					<div className="col-2">{ book.volumeInfo.publishedDate }</div>
				</div>
            )
        })
		return (
			<div className="container">
				{ booksDisplay }
			</div>
		);
	}
}

export default Result;
