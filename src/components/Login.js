import React from 'react';
import {Button} from 'react-materialize';

import {InputForm, RandomString, CheckAuth} from './Util';

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email:'',
			password:''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.textChange = this.textChange.bind(this);
	}

	componentDidMount(){
		if(CheckAuth())
			this.props.history.push("user");
	}

	compareCreds = (email, password) =>{
		let url = "https://api.jsonbin.io/b/5b28ac52d0635e29d703999e/2";
		fetch(url, {
				method:"GET",
				headers:{
					'content-type': 'application/json',
					'secret-key': '$2a$10$k./JYGCrFgN6Mvu0oW8SMePeMP9dAEkFzagewqmJ8dxJ6K6iWCT2i'
				}
		}).then(response => response.json())
		.catch(error => console.error('Error:', error))
		.then(response=>{
			console.log(response);
			let array = response.users;
			let credible = array.filter((e) => e.email === email && e.password === password);
			if(credible !== undefined && credible.length != 0){
				let token = RandomString();
				let bin_id = credible[0].bin_id;
				document.cookie = "gamifyToken=" + token;
				localStorage.setItem("gamifyUser", email);
				localStorage.setItem("gamifyBin", bin_id);
				this.props.history.push("user");
				//console.log(localStorage.getItem("gamifyBin"));
			}
		})
	}

	handleSubmit = (event) =>{
		event.preventDefault();
		if(this.state.email && this.state.password){
			/*TODO:
				1. Kirim email ke API JSONBin dan cek apakah email exist atau tidak, kalau iya, cek passwordnya bener atau nggak.
			*/
			let email = this.state.email;
			let password = this.state.password;
			this.compareCreds(email, password);
			if(CheckAuth())
				this.props.history.push("user");
		}
	}

	textChange = (event) =>{
		let state = this.state;
		let id = event.target.name;
		state[id] = event.target.value;
		this.setState({state:state});
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<InputForm name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required="true" placeholder="email" onChange={this.textChange}/>
					<InputForm name="password" type="password" required="true" placeholder="password" onChange={this.textChange}/>
					<Button waves='light' className='btn-small' type="submit">Login</Button>
				</form>
			</div>
		);
	}

}
export default Login;