import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClientContextProvider from './app/context/client-context';
import HospitalContextProvider from './app/context/hospital-context';
import DoctorContextProvider from './app/context/doctor-context';

import Home from './app/pages/Home';
import Clients from './app/pages/Clients';
import Configuration from './app/pages/Configuration';
import Medicine from './app/pages/Medicine';
import Help from './app/pages/Help';

import SideBar from './app/components/sidebar/SideBar';
import NavBar from './app/components/navbar/NavBar';

export const App = () => (
	<HospitalContextProvider>
		<DoctorContextProvider>
			<ClientContextProvider>
				<Router>
					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-2">
							<SideBar />
						</div>

						<div className=" col-span-10">
							<NavBar />
							<Switch>
								<Route exact path="/">
									<Home />
								</Route>
								<Route path="/Clients">
									<Clients />
								</Route>
								<Route path="/Configuration">
									<Configuration />
								</Route>
								<Route path="/Medicine">
									<Medicine />
								</Route>
								<Route path="/Help">
									<Help />
								</Route>
							</Switch>
						</div>
					</div>
				</Router>
			</ClientContextProvider>
		</DoctorContextProvider>
	</HospitalContextProvider>
);
