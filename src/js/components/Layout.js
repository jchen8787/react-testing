import React from "react";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Hello World",
		};
	}

	render() {
		return (
			<div>
				asdffffffffffffffffffff
				<h1>{this.state.title}</h1>
			</div>
		);
	}
}