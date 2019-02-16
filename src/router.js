import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./containers/App";
import Auth from "./containers/Auth";

import Header from "./components/header";

export default () => (
	<div className="container">
		<Header />
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/auth" component={Auth} />
		</Switch>
	</div>
);
