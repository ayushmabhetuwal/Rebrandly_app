import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component{
	constructor(props){
		super(props)
		this.state= 
		{	email: '',
			password:''
		}
	}
	render(){
		return(
				<div>
					<Card>
						<CardText> 
							<TextField 
								type ="email"
								hintText= "Email"
								floatingLabelText= "Enter Email"
								value= {this.state.email}
								onChange= {(e) => this.onChangeEmail(e)}
							/> 
						</CardText>
						<CardText>
							<TextField
								type= "password"
								hintText="Password"
								floatingLabelText= "Enter Password"
								value={this.state.password}
								onChange= {(e) => this.onChangePassword(e)}
							/>
						</CardText>
						<CardText>
							<RaisedButton label ="Submit" primary={true} onClick={() => this.submitForm()} />
						</CardText>
					</Card>
				</div>
			)
	}
	onChangeEmail(e){
		this.setState({
			email: e.target.value
		})
	}
	onChangePassword(e){
		this.setState({
			password: e.target.value
		})
	}
	submitForm(){
		this.validatePassword(this.state.password)
			.then((response) => 
				{
					if (response.ok){
						return response.json()
							.then((data) => 
								{
									if(data.email === this.state.email){
										sessionStorage.setItem("apikey", this.state.password)
										sessionStorage.setItem("email", this.state.email)
										this.props.history.push("/dashboard")
									}
									else{
										alert ("User can't be validated.")
									}
								})
					} else{
						alert(response.statusText)
					}
				})
	}
	componentWillMount()
	{
		const savedPassword = sessionStorage.getItem("password")
		if(savedPassword){
			this.validatePassword(savedPassword)
				.then((response) =>
						{
							if(response.ok){
							this.props.history.push("/dashboard")
							}
						}
					)
		}

	}
	
	validatePassword(password){
		return fetch('https://api.rebrandly.com/v1/account',
		{headers: 
			{
				apikey: password 
			}
		})
	}
}
export default Login;