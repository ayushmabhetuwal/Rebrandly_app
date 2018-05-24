import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
import Account from './Account'
class Header extends Component{
	sideBar={
		textDecoration: 'none'
	}
	constructor(props){
		super(props)
		this.state = {
			sidebarOpen: false, 
			email:''
		}
	}
	render() {
		return(
				<div>
					<AppBar
						title= "Welcome to Dashboard"
						onLeftIconButtonClick={() => this.toggleSidebar()}
						iconElementRight={<Account email ={this.state.email}/>}
					/>
					<Drawer open = {this.state.sidebarOpen}
						docked={false}
					onRequestChange={() => this.toggleSidebar()}
					>
						<MenuItem><Link to="/dashboard" style={this.sideBar}>Home </Link> </MenuItem>
						<MenuItem><Link to ="/links" style={this.sideBar}> Link </Link></MenuItem>	
						<MenuItem><Link to ="/CreateLinks" style={this.sideBar}> CreateLink </Link></MenuItem>
					</Drawer>
				</div>
			)
	}
	toggleSidebar(){
		this.setState({sidebarOpen: !this.state.sidebarOpen}) 
	}
	componentWillMount() {
		this.setState({
		email: sessionStorage.getItem('email')
	  })
	}

}
export default Header; 