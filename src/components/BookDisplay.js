import React, { Component } from "react";

class BookDisplay extends Component {
	render() {
		return (
        	<div className="row">
        		<div className="col-7">
        			<a href={ this.props.selfLink } target="_blank" rel="noopener noreferrer" >
        				<img src={ this.props.thumbnail } alt={ this.props.title } />
						{ this.props.title }
					</a>
				</div>
				<div className="col-3">{ this.props.authors }</div>
				<div className="col-2">{ this.props.publishedDate }</div>
			</div>
        )
	}
};

export default BookDisplay;