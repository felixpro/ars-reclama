import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClientContextProvider from './app/context/client-context';
import HospitalContextProvider from './app/context/hospital-context';
import DoctorContextProvider from './app/context/doctor-context';
import RelationsProvider from './app/context/relations-context';
import WaitingListsContextProvider from './app/context/waiting-list-context';
import Home from './app/pages/Home';
import Clients from './app/pages/Clients';
import Configuration from './app/pages/Configuration';
import Medicine from './app/pages/Medicine';
import Help from './app/pages/Help';
import { default as Amplify } from '@aws-amplify/core';
import { default as awsConfig } from '../aws-exports';
import SideBar from './app/components/sidebar/SideBar';
import NavBar from './app/components/navbar/NavBar';

interface Ipath {
	principal: string;
	path1: string | null;
}

const pathInitialState = { principal: 'Inicio', path1: null };

Amplify.configure(awsConfig);

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
		<RelationsProvider>
			<HospitalContextProvider>
				<DoctorContextProvider>
					<ClientContextProvider>
						<WaitingListsContextProvider>
							<Router>
								<div className="relative min-h-screen flex">
									<div
										className={` absolute -left-60 2sm:static  duration-500 ease-in-out  2sm:transform-none ${
											sidebarToggle ? 'transform translate-x-60' : ''
										}`}
									>
										<SideBar
											sidebarToggle={sidebarToggle}
											SetsidebarToggle={SetsidebarToggle}
											SetPagePath={SetPagePath}
											pagePath={pagePath}
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
						</WaitingListsContextProvider>
					</ClientContextProvider>
				</DoctorContextProvider>
			</HospitalContextProvider>
		</RelationsProvider>
	);
};
