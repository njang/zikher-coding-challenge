import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class Result extends Component {
	render() {
		return (
			<div className='container'>
    			<ReactTable
					data= {this.props.results}
					columns={[
						{
							Header: "Title",
							accessor: "volumeInfo.title"
						},
						{
							Header: "Authors",
							accessor: "volumeInfo.authors"
						},
						{
							Header: "Published",
							accessor: "volumeInfo.publishedDate"
						}	
					]}
				/>
			</div>
		);
	}
}

export default Result;
