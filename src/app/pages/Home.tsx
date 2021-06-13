import React from 'react';
import ClientForm from '../components/forms/client/ClientForm';

function Home({ handlePath }) {
	return (
		<div>
			{/* <button onClick={() => handlePath(null, 'Lucas Jhon')}>add client path</button> */}

			<ClientForm />
		</div>
	);
}

export default Home;
