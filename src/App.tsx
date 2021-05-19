import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './app/pages/Home';
import ClientContextProvider from './app/context/client-context';
import WaitingListsContextProvider from './app/context/waiting-list-context';

export const App = () => (
	<ClientContextProvider>
		<WaitingListsContextProvider>
			<Router>
				<Switch>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</WaitingListsContextProvider>
	</ClientContextProvider>
);
