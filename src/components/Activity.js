import React from 'react';
import {CollectionItem, Input, Button, Badge} from 'react-materialize';

class Activity extends React.Component{
	constructor(props){
		super(props);
		this.textChange = this.textChange.bind(this);
		this.plusClick = this.plusClick.bind(this);
		this.minusClick = this.minusClick.bind(this);
	}

	textChange = (event) =>{
		//console.log(event.target.value);
		let data = {
			name: event.target.value,
			total: this.props.total, 
			activity_index: this.props.activity_index,
			mode:3
		}
		this.props.onUpdate(data);
	}

	plusClick = (event) =>{
		let total = this.props.total;
		let data = {
			name: this.props.name,
			total: total + 1,
			activity_index:this.props.activity_index,
			mode:3
		}
		this.props.onUpdate(data);
		//console.log(data.total);
	}
	minusClick = (event) =>{
		let total = this.props.total;
		if(total){
			let data = {
				name: this.props.name,
				total: total - 1,
				activity_index:this.props.activity_index,
				mode:3
			}
			this.props.onUpdate(data);
		}

		//console.log(data.total);
	}

	deleteActivity = (event) =>{
		console.log('uye!');
		let data = {activity_index: this.props.activity_index,
					mode:2};
		this.props.onUpdate(data);
	}


	render(){
		return(
			<CollectionItem>
				<a className="right" onClick={this.deleteActivity} style={{color: '#e74c3c', cursor: 'default'}}>x</a>
				<Input value={this.props.name} onChange={this.textChange}/>
				<Button waves='light' className='btn-small' onClick={this.plusClick} style={{backgroundColor: '#e74c3c'}}>+</Button> &nbsp;
				<Button waves='light' className='btn-small' onClick={this.minusClick} style={{backgroundColor: '#e74c3c'}}>-</Button>
				<Badge>{this.props.total}</Badge>
			</CollectionItem>
		);
	}
}

export default Activity;