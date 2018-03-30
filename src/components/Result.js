import React, { Component } from 'react';
 
class Result extends Component {
	render() {
		return (
			<div className='container'>
				Search results
				<ul>
    				{this.props.results.map(book => (
		                <li key={book.id}>{ book.volumeInfo.title }</li>
        			))
    				}
    			</ul>
			</div>
		);
	}
}

export default Result;
