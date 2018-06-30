import React from 'react';
import {Button} from 'react-materialize';
import fs from 'fs';

import Category from './Category';

const WAIT_INTERVAL = 1000;

class User extends React.Component{
	constructor(props){
		super(props);
		this.state={
			email:'',
			bin_id:'',
			xp:0,
			categories:[{
				name:'',
				activities:[{
					name:'',
					total:0
				}]
			}]
		}
		this.addCategory = this.addCategory.bind(this);
	}

	componentDidMount(){
		let bin = localStorage.getItem("gamifyBin");
		console.log(bin);
		this.setState({
			categories:bin.categories
		});
	}

	activityUpdate = (data) =>{
		let categories = this.state.categories;
		//state['categories'][data.category_index]['activities'] = data;
		categories[data.category_index]['activities'][data.activity_index]= data;
		this.setState({categories:categories});
		//this.saveMyData();
	}

	addCategory = (event) =>{
		let categories = this.state.categories;
		let category = {
				name:'',
				activities:[{
					name:'',
					total:0
				}]
		}
		categories.push(category);
		this.setState({categories:categories});
		//this.saveMyData();
	}

	addActivity = (data)=>{
		let categories = this.state.categories;
		let activity = {name:'', total:0}
		categories[data.category_index]['activities'].push(activity);
		this.setState({categories:categories});
		this.saveHandler();
	}


	saveMyData = () =>{
		let content = JSON.stringify(this.state);
		let url = "https://api.jsonbin.io/b/";
		let method = "POST";
		if(this.state.bin_id){
			method = "PUT";
			url+=this.state.bin_id;
			console.log(url);
		}

		/*TODO:
			1. Method fetchnya bikin reuseable aja
		*/
		fetch(url, {
			body:content,
			method:method,
			headers:{
				'content-type': 'application/json',
				'secret-key': '$2a$10$k./JYGCrFgN6Mvu0oW8SMePeMP9dAEkFzagewqmJ8dxJ6K6iWCT2i'
			}
		}).then(response => response.json())
		.catch(error => console.error('Error:', error))
		.then(response=>{
			console.log(response);
			if(method=="POST"){
				console.log(response);
				this.setState({bin_id:response.id})
				console.log(this.state.bin_id);
			}
		})
	}

	deleteActivity = (data) =>{
		let categories = this.state.categories;
		let index = data.activity_index;
		let activities = categories[data.category_index]['activities']
		activities.splice(index, 1);
		this.setState({categories:categories});
	}
	deleteCategory = (data) =>{
		let categories = this.state.categories;
		let index = data.category_index;
		categories.splice(index, 1);
		this.setState({categories:categories});
	}

	saveHandler = () =>{
		console.log('masuk');
		clearTimeout(this.timer);
		this.timer = setTimeout(this.saveTrigger.bind(this), WAIT_INTERVAL);
	}

	saveTrigger = (event) => {
	  		this.saveMyData();
	}

	render(){
		let categories = this.state.categories;
		return(
			<div>
						{categories.map((category, index) =>
								<Category activities={category.activities} category={category.name} category_index={index} activityUpdate={this.activityUpdate} addActivity={this.addActivity} delActivity={this.deleteActivity} delCategory={this.deleteCategory}/>
						)}
						<Button waves='light' className='btn-small' onClick={this.addCategory}>+ Add New Category</Button>
			</div>	
		
		);
	}

	/*TODO:
		1. Each category di map
		2. Taro index buat setiap category yang di map
	*/
}

export default User;