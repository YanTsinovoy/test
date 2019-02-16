import React, { Component } from "react";

import InputComponent from "../common";

export default class SignIn extends Component {
	state = {
		singIn: {
			email: {
				value: "",
				config: {
					name: "email",
					placeholder: "Enter your email"
				}
			},
			password: {
				value: "",
				config: {
					name: "password",
					placeholder: "Enter your password"
				}
			}
		}
	};

	submit = e => {
		e.preventDefault();
	};

	change = e => {
		const { name, value } = e.target;
		console.log("name", name);
		console.log("value", value);

		this.setState(prevState => ({
			singIn: {
				...prevState.singIn,
				[name]: {
					...prevState.singIn[name],
					value
				}
			}
		}));
	};

	render() {
		const { singIn } = this.state;

		console.log(singIn);
		return (
			<div className="auth-box__sign-in-box" onSubmit={this.submit}>
				<form className="auth-box__sign-in-form">
					{Object.keys(singIn).map(el => (
						<InputComponent
							key={el}
							value={singIn[el].value}
							onChange={this.change}
							config={singIn[el].config}
						/>
					))}
					<input className="auth-box__input-submit" type="submit" />
				</form>
			</div>
		);
	}
}
