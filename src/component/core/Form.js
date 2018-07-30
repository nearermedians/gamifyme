import React from 'react';
import Base from './Base';
import Notifications, {notify} from 'react-notify-toast';

class Form extends Base{
	constructor(props){
		super(props);
		this.state = {
			form: props.data||{},
			submitting:false,
			uploading:false,
			show:false
		}
		this.textChange = this.textChange.bind(this);
		this.handleSubmitForm = this.handleSubmitForm.bind(this);
	}

	textChange = (event) =>{
		event.preventDefault();
		let form = this.state.form;
		let identifier = event.target.name;
		form[identifier] = event.target.value;
		this.setState({form : form});
		//console.log(form);
	}

	handleSubmitForm = (event) =>{
		event.preventDefault();
		this.setState({submitting : true})
		let data = this.state.form;
		//this.sendData(data, this.successCallback);
		notify.show("Your request has been succesfully processed", "success", 2000);
	}

	renderForm = () => {
		return ""
	}

	render(){
		return(
			<div>
				<Notifications/>
				{this.renderForm()}
			</div>
		);
	}
}

export default Form;