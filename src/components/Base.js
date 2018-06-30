import React from 'react';
import axios from 'axios';

const FETCH_HEAD = {
  	headers:{
				'content-type': 'application/json',
				'secret-key': '$2a$10$k./JYGCrFgN6Mvu0oW8SMePeMP9dAEkFzagewqmJ8dxJ6K6iWCT2i'
	}       
}

class Base extends React.Component{
	constructor(props){
		super(props);
	}

	fetchSomething = (url, method, data={}, callback) =>{
     this.setState({loading:true});
     let conf = FETCH_HEAD;
     conf.method = method;
     conf.url = url;
     if(data)
      conf.data = data;
     axios(conf).then(result =>{
     	callback();
     });
  	}

	
}

export default Base;