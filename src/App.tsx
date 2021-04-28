import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './app/pages/Home';
import ClientContextProvider from './app/context/client-context';

export const App = () => (
	<ClientContextProvider>
		<Router>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	</ClientContextProvider>
);
