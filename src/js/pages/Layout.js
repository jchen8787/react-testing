import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
	navigate() {
		this.props.history.replaceState(null, "/");
	}

	render() {
		return (
			<div>
				<h1>KillerNews.net</h1>
				{this.props.children}
				<Link to="archives">archives</Link>
				<Link to="settings"><button>settings</button></Link>
				<button onClick={this.navigate.bind(this)}>featured</button>
			</div>
		);
	}
}