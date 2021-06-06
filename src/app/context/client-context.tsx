import React, { useState } from 'react';
import { Client } from '../../models';
import { DataStore } from '@aws-amplify/datastore';

interface ClientContextProps {
	clients: Client[];
	fetchClients: (filterText: string) => void;
}

export const ClientsContext = React.createContext<ClientContextProps>({
	clients: [],
	fetchClients: () => null,
});

const ContextProvider: React.FC = (props) => {
	const [clients, setClients] = useState<Client[]>([]);

	const fetchClients = async (filterText: string) => {
		try {
			let clients = await DataStore.query(Client);
			const filterTextValue = filterText.trim();
			if (filterTextValue.length) {
				clients = clients.filter((client) =>
					client.name?.toLowerCase().includes(filterTextValue.toLocaleLowerCase())
				);
			}
			setClients(clients);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ClientsContext.Provider value={{ clients: clients, fetchClients: fetchClients }}>
			{props.children}
		</ClientsContext.Provider>
	);
};

export default ContextProvider;
