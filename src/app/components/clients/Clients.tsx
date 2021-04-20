import React, { useContext } from 'react';
import { ClientsContext } from '../../context/client-context';

const Clients = () => {
	const clientsContext = useContext(ClientsContext);

	return (
		<ul>
			{clientsContext.clients?.map((client) => (
				<li key={client.id}>{client.name}</li>
			))}
		</ul>
	);
};

export default Clients;
