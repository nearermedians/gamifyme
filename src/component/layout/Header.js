import React from 'react';
import{
	Collapse, 
	Nav,
	Navbar,
	NavbarBrand
} from 'reactstrap';


class Header extends React.Component{

	constructor(props){
		super(props);
		this.state={
			'isOpen': false
		};
	}
	render(){
		return(
			<div>
				<Navbar className="tawba-bars">
					<NavbarBrand className="tawba-brands" id="tawba-title">Tawba</NavbarBrand>
				</Navbar>
			</div>
		);
	}
}

export default Header;