import React from 'react';

// A cada cliente se le debe agregar u
const Clients = ({ handlePath }) => {
	return (
		<div>
			<button onClick={() => handlePath(null, 'Juanita Lora')}>add client path</button>

			<h1>Clientes</h1>
		</div>
	);
};

export default Clients;
