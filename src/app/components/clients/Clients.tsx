import React, { useContext, useEffect, useState } from 'react';
import { ClientsContext } from '../../context/client-context';
import { WaitingListsContext } from '../../context/waiting-list-context';
import addIcon from '../../../assets/images/icono_agregar.svg';
import SearchInput from '../searchInput/SearchInput';
import ClientC from './client/Client';
import { Client, HospitalDoctorCliente, Insurance } from '../../../models';
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
			new Insurance({
				name: 'ARS Humano',
			})
		);
		DataStore.save(
			new Insurance({
				name: 'ARS SeNaSa',
			})
		);
	};

	const generateTestData = async () => {
		const client = await DataStore.save(
			new Client({
				name: 'Abbie Wilson',
				bloodType: 'O+',
				affiliateNumber: 1
			})
		);
		await DataStore.save(
			new HospitalDoctorCliente({
				clientID: client.id,
				hospitalDoctorID: '08e6cb06-b05e-4090-b21f-124d442b645a',
				lastHealthInsurranceID: '0b41ed74-ab74-4a75-b11f-157355d93fc2'
			})
		);
		const client2 = await DataStore.save(
			new Client({
				name: 'Francis Pujols',
				bloodType: 'A+',
				affiliateNumber: 2
			})
		);
		await DataStore.save(
			new HospitalDoctorCliente({
				clientID: client2.id,
				hospitalDoctorID: '08e6cb06-b05e-4090-b21f-124d442b645a',
				lastHealthInsurranceID: '73f4661d-0203-4c9f-8477-ddef1fddbda2'
			})
		);
		const client3 = await DataStore.save(
			new Client({
				name: 'Felix Pujols',
				bloodType: 'O+',
				affiliateNumber: 3
			})
		);
		await DataStore.save(
			new HospitalDoctorCliente({
				clientID: client3.id,
				hospitalDoctorID: '08e6cb06-b05e-4090-b21f-124d442b645a',
				lastHealthInsurranceID: '0b41ed74-ab74-4a75-b11f-157355d93fc2'
			})
		)
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
