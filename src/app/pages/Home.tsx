import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import Clients from '../components/clients/Clients';

function Home() {
	return (
		<div className=" bg-green-content">
			<SideBar />
			<Clients />
		</div>
	);
}

export default Home;
