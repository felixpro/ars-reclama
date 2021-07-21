import React, { useState } from 'react';
import Clients from '../components/clients/Clients';
import WaitingList from '../components/waitingList/WaitingList';

function Home({ handlePath }) {
	const [dropdownValue, setDropdownValue] = useState();

	const [dropdownIconValue, setdropdownIconValue] = useState();

	return (
		<div className=" bg-green-content">
			<button onClick={() => handlePath(null, 'Lucas Jhon')}>add client path</button>
			<div className="flex flex-row">
				<Clients />
				<WaitingList />
			</div>
		</div>
	);
}

export default Home;
