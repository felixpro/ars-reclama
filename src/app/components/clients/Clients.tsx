import React, { useContext, useEffect, useState } from 'react';
import { ClientsContext } from '../../context/client-context';
import { WaitingListsContext } from '../../context/waiting-list-context';
import addIcon from '../../../assets/images/icono_agregar.svg';
import SearchInput from '../searchInput/SearchInput';
import ClientC from './client/Client';
import { Client, HealthInsurance } from '../../../models';
import defaultClientImage from '../../../assets/images/img_cliente.svg';
import { DataStore } from '@aws-amplify/datastore';

const Clients = () => {
	const clientsContext = useContext(ClientsContext);
	const waitingListsContext = useContext(WaitingListsContext);
	const [filterText, setFilterText] = useState('');

	const handleEditClient = (client: Client) => {
		//TO-DO
	};

	const handleSendClient = (client: Client) => {
		waitingListsContext.addClientToCurrentWaitingList(client);
	};

	const handleSearchInput = (value: string) => {
		setFilterText(value);
	};

	const generateHealthInsurranceData = () => {
		DataStore.save(
			new HealthInsurance({
				name: 'ARS Humano',
			})
		);
		DataStore.save(
			new HealthInsurance({
				name: 'ARS SeNaSa',
			})
		);
	};

	const generateTestData = () => {
		DataStore.save(
			new Client({
				name: 'Efrain Toribio Reyes',
				bloodType: 'O+',
				healthInsuranceId: '0262ef94-aaf4-47df-b78d-bc34b7bfa94f',
			})
		);
		DataStore.save(
			new Client({
				name: 'Ramon Jimenez',
				bloodType: 'A+',
				healthInsuranceId: 'e6748dcc-f8c5-4f49-b761-4567ba78d407',
			})
		);
		DataStore.save(
			new Client({
				name: 'Manuel Diaz',
				bloodType: 'O+',
				healthInsuranceId: '0262ef94-aaf4-47df-b78d-bc34b7bfa94f',
			})
		);
	};

	useEffect(() => {
		//generateTestData();
		//generateHealthInsurranceData();
	}, []);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			clientsContext?.fetchClients(filterText);
		}, 500);

		return () => {
			clearTimeout(timeOut);
		};
	}, [filterText]);

	const clients: JSX.Element[] = clientsContext.clients?.map((client) => {
		return (
			<ClientC
				key={client.id}
				image={defaultClientImage}
				client={client}
				onEdit={handleEditClient}
				onSend={handleSendClient}
			/>
		);
	});

	return (
		<div className="flex flex-col rounded-lg border-0 bg-white-section w-427 h-screen ml-42 my-6 overflow-y-auto">
			<div className="section-cell border-b-2" style={{ borderBottomColor: '#EDF3F1' }}>
				<span className="mr-107" style={{ fontFamily: 'Raleway-Bold', fontSize: '19px' }}>
					Clientes
				</span>
				<img alt="" src={addIcon} className="mr-4" />
				<SearchInput onChange={handleSearchInput} />
			</div>
			{clients}
		</div>
	);
};

export default Clients;
