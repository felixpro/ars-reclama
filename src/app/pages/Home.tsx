import React, { useState } from 'react';

function Home({ handlePath }) {
	const [dropdownValue, setDropdownValue] = useState();

	const [dropdownIconValue, setdropdownIconValue] = useState();

	return (
		<div>
			<button onClick={() => handlePath(null, 'Lucas Jhon')}>add client path</button>
			<h1>Home</h1>
		</div>
	);
}

export default Home;
