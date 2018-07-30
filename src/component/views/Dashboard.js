import React from 'react';
import { 
	Button, 
	Card, 
	CardHeader, 
	CardBody,
	Col, 
	Collapse, 
	Dropdown, 
	DropdownToggle, 
	DropdownMenu, 
	DropdownItem, 
	Progress,
	Row
} from 'reactstrap';

import Base from '../core/Base';
import { InputForm } from '../core/Util';
import { blake } from '../../assets/img';

export const ActivityDiv = ({name, difficulty, ...props}) =>{
	return(
				<Row>
					<Col xs="1">
					     <a><i class="fa fa-minus tawba-button-icons"/></a>
					</Col>
					<Col xs="9">
					    <p align="center">{name}<br/><span style={{'color':'red'}}>{difficulty}</span></p>
					</Col>
					<Col xs="1">
						<a><i class="fa fa-plus tawba-button-icons"/></a>   
					</Col>
					<br/>
				</Row>
		   );
}

class Dashboard extends Base{
	constructor(props){
		super(props);
		this.state ={card_open:false, dropdownOpen:false};
		this.cardToggle = this.cardToggle.bind(this);

	}

	makeUser = () =>{
		return {
			user_id:'Mekintossu Mainussu',
			xp:3000,
			level:1,
			target_xp:5000,
			categories:[
				{
					name:'Strength',
					level:1,
					target_xp:10000,
					activities:[
						{
							name:'Bench Press',
							total:0,
							xp_gained:500,
							difficulty:'easy'
						},
						{
							name:'Pull-Ups',
							total:0,
							xp_gained:1500,
							difficulty:'hard'
						}
					]
				}
			]
		};
	}

	componentDidMount(){
		this.setState(this.makeUser());
	}

	cardToggle() {
    	this.setState({ card_open: !this.state.card_open });
  	}

  	toggleActivityDropDown = () =>{
	    this.setState({
	      dropdownOpen: !this.state.dropdownOpen
	    });
  	}

  	activityDropdownChange = (event) =>{
  		event.preventDefault();
  		let categories = this.state.categories;

  		console.log(event.key);
  	}

	

	render(){
		let {user_id, xp, level, categories} = this.state;
		return(
			<div className="tawba-app-container">
				<div id="tawba-user-profile">
					<Row>
						<Col xs={6}>
							<p><img src={blake} id="tawba-profile-picture"/></p>
						</Col>
						<Col xs={6}>
							<h6><b>{this.state.user_id}</b></h6>
							<p>Level {this.state.level}</p>
							<p>	
								<Progress color="success" className="tawba-progress" value={this.state.xp/this.state.target_xp * 100}>{this.state.xp}/{this.state.target_xp}</Progress>
							</p>
						</Col>
					</Row>
					<hr/>
				</div>
				{categories && categories.map((category, cindex) =>(
					<Card>
						<CardHeader onClick={this.cardToggle}>{category.name}</CardHeader>
				        <Collapse isOpen={this.state.card_open}>
				            <CardBody className="tawba-activity">
				            {category.activities && category.activities.map((activity, aindex) =>(
				            		<ActivityDiv name={activity.name} difficulty={activity.difficulty}/>
				            ))}	
				            </CardBody>
				        </Collapse>
					</Card>
				)
				)}
			</div>
		)
	}
}

export default Dashboard;