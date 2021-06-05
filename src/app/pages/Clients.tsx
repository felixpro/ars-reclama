import React from 'react';

// A cada cliente se le debe agregar u
const Clients = ({ handlePath }) => {
	return (
		<div>
			<h1>Clientes</h1>
			<button onClick={() => handlePath(null, 'Juanita Lora')}>add client path</button>
		</div>
	);
};

export default Clients;
