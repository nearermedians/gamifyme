import React from 'react';
import {Input} from 'react-materialize';

export const InputForm = (props) =>(
	<Input
		type={props.type}
		name={props.name}
		placeholder={props.placeholder}
		label={props.label}
		defaultValue={props.default}
		pattern = {props.pattern}
		onChange = {props.onChange}
		disabled = {props.disabled}
		required = {props.required}
	/>
)

export const Atoi = (vars) =>{
	let number = "";
	let string = vars;
	for (let i = 0; i < string.length; i++){
        number += string.charCodeAt(i).toString();
	}
	return number;
}

export const RandomString = () =>{
  let text="";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

export const Itoa = (vars) =>{
		let number = "";
		let string = vars;
		for (let i = 0; i < string.length; i++){
        	number += String.fromCharCode(string[i]).toString();
		}
		return number;
}

export const CheckAuth = () =>{
	let token = document.cookie.replace(/(?:(?:^|.*;\s*)gamifyToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	if(token)
		return localStorage.getItem("gamifyUser");
	else
		return false;
}

	
