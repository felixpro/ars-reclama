import React, { useState } from 'react';
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

interface Ipath {
	principal: string;
	path1: string | null;
}

const pathInitialState = { principal: 'Inicio', path1: null };

export const App = () => {
	const [sidebarToggle, SetsidebarToggle] = useState(false);
	const [pagePath, SetPagePath] = useState<Ipath>(pathInitialState);

	const handlePath = (principal: string | null, path1: string | null) => {
		// Verify what variable was change before add changes to state
		SetPagePath({
			principal: principal || pagePath.principal,
			path1: path1 || pagePath.path1,
		});
	};

	return (
		<HospitalContextProvider>
			<DoctorContextProvider>
				<ClientContextProvider>
					<Router>
						<div className="relative min-h-screen flex">
							<div
								className={` absolute -left-60 2sm:static transform transition-transform duration-500 ease-in-out  ${
									sidebarToggle ? 'translate-x-60' : 'translate-x-0'
								}`}
							>
								<SideBar
									sidebarToggle={sidebarToggle}
									SetsidebarToggle={SetsidebarToggle}
									SetPagePath={SetPagePath}
								/>
							</div>

							<div className=" flex-1">
								<NavBar
									SetsidebarToggle={SetsidebarToggle}
									sidebarToggle={sidebarToggle}
									pagePath={pagePath}
								/>
								<Switch>
									<Route exact path="/">
										<Home handlePath={handlePath} />
									</Route>
									<Route path="/Clients">
										<Clients handlePath={handlePath} />
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
};
