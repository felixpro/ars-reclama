import React, { useState } from 'react';
import { Client, HealthInsurance } from '../../models';
import { DataStore } from '@aws-amplify/datastore';
import { ClientType } from './types';

interface ClientContextProps {
	clients: ClientType[];
	fetchClients: (filterText: string) => void;
}

export const ClientsContext = React.createContext<ClientContextProps>({
	clients: [],
	fetchClients: () => null,
});

const ContextProvider: React.FC = (props) => {
	const [clients, setClients] = useState<ClientType[]>([]);

	const fetchClients = async (filterText: string) => {
		try {
			let clients = await DataStore.query(Client);
			const filterTextValue = filterText.trim();
			if (filterTextValue.length) {
				clients = clients.filter((client) =>
					client.name?.toLowerCase().includes(filterTextValue.toLocaleLowerCase())
				);
			}
			clients.forEach(async (client) => {
				const healthInsurance = await DataStore.query(
					HealthInsurance,
					client.healthInsuranceId
				);
				const transformedClient: ClientType = {
					id: client.id,
					name: client.name,
					healthInsuranceId: client.healthInsuranceId,
					healthInsurance: healthInsurance ? healthInsurance.name : '',
				};
				setClients((clients) => clients.concat(transformedClient));
			});
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
