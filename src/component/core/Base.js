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

  getData = (url, callback) =>{
    axios.get(url, FETCH_HEAD)
    .then(response =>{
      callback(response.data);
    })
    .catch(error => console.log(error))
  }

  postData = (url, data, callback) =>{
     axios.post(url, FETCH_HEAD)
    .then(response =>{
      callback(response.data);
    })
    .catch(error => console.log(error))   
  }

  putData = (url, data, callback) =>{
     axios.put(url, FETCH_HEAD)
    .then(response =>{
      callback(response.data);
    })
    .catch(error => console.log(error))  
  }

  deleteData = (url, callback) =>{
     axios.delete(url, FETCH_HEAD)
    .then(response =>{
      callback(response.data);
    })
    .catch(error => console.log(error))  
  }

	
}

export default Base;