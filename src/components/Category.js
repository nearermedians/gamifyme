import React from 'react';
import {Collection, Button} from 'react-materialize';

import Activity from './Activity';
import {InputForm} from './Util';

class Category extends React.Component{
	constructor(props){
		super(props);
		this.activityChange = this.activityChange.bind(this);
	}

	activityChange = (data) =>{
		data['category_index'] = this.props.category_index;
		//console.log(this.props.category_index);
		if(data.mode==3) 
				this.props.activityUpdate(data);
		else if(data.mode==2)
				this.props.delActivity(data);
	}

	addActivity = (event) =>{
		let data = {category_index:this.props.category_index};
		this.props.addActivity(data);
	}

	delCategory = (event) =>{
		let data = {category_index:this.props.category_index};
		this.props.delCategory(data);
	}


	render(){
		let activities = this.props.activities;
		return(
			<div className="container">
				<InputForm label="Category Name" placeholder="Insert your category here (e.g: Personal Development)" />
				<Collection>
					{activities.map((activity, index) =>
	     				<Activity name={activity.name} activity_index={index} total={activity.total} onUpdate={this.activityChange}/>
					)}
	     		</Collection>
	     		<Button waves='light' className='btn-small' onClick={this.addActivity}>+ Add New Activity</Button> &nbsp;
	     		<Button waves='light' className='btn-small' onClick={this.delCategory}>x Delete Category</Button>
	     		<br/><br/>
     		</div>
		);
	}
}

export default Category;