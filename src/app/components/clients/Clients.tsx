import React, { useContext, useEffect, useState } from 'react';
import { ClientsContext } from '../../context/client-context';
import addIcon from '../../../assets/images/icono_agregar.svg';
import SearchInput from '../searchInput/SearchInput';
import ClientC from './client/Client';
import { Client, HealthInsurance } from '../../../models';
import Spinner from '../spinner/Spinner';
import defaultClientImage from '../../../assets/images/img_cliente.svg';
import { DataStore } from '@aws-amplify/datastore';

const Clients = () => {
	const clientsContext = useContext(ClientsContext);
	const [filterText, setFilterText] = useState('');
	const [loading, setLoading] = useState(true);

	const handleEditClient = (client: Client) => {
		console.log('test');
	};

	const handleSendClient = (client: Client) => {
		console.log('test');
	};

	const handleSearchInput = (value: string) => {
		setFilterText(value);
		setLoading(true);
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
			setLoading(false);
		}, 500);

		return () => {
			clearTimeout(timeOut);
		};
	}, [filterText]);

	let clients: JSX.Element[] = clientsContext.clients?.map((client) => {
		return (
			<ClientC
				key={client.id}
				image={defaultClientImage}
				name={client.name}
				bloodType={client.bloodType}
				onEdit={handleEditClient}
				onSend={handleSendClient}
			/>
		);
	});

	if (loading) {
		clients = [<Spinner key={1} />];
	}

	return (
		<div className="flex flex-col rounded-lg border-0 bg-white-section w-427 h-screen ml-42 my-6">
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
