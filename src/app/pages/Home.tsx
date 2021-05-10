import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import Clients from '../components/clients/Clients';
import WaitingList from '../components/waitingList/WaitingList';

function Home() {
	return (
		<div className=" bg-green-content">
			<SideBar />
			<div className="flex flex-row">
				<Clients />
				<WaitingList />
			</div>
		</div>
	);
}

export default Home;
