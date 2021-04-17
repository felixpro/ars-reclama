import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './app/pages/Home';

export const App = () => (
	<Router>
		<Switch>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	</Router>
);
