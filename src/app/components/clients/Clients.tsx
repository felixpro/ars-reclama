import React, { useContext } from 'react';
import { ClientsContext } from '../../context/client-context';

const Clients = () => {
	const clients = useContext(ClientsContext).clients;

	return (
		<ul>
			{clients?.map((client) => (
				<li key={client.id}>{client.name}</li>
			))}
		</ul>
	);
};

export default Clients;
