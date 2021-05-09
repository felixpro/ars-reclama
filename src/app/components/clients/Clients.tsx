import React, { useContext } from 'react';
import { ClientsContext } from '../../context/client-context';
import addIcon from '../../../assets/images/icono_agregar.svg';
import SearchInput from '../searchInput/SearchInput';
import Client from './client/Client';
import { Client, Client, Client } from '../../../models';
import exampleClientIcon from '../../../assets/images/img_cliente.svg';

const Clients = () => {
	const clientsContext = useContext(ClientsContext);

	const handleEditClient = (client: Client) => {
		console.log('test');
	};

	const handleSendClient = (client: Client) => {
		console.log('test');
	};

	return (
		<div className="flex flex-row">
			<div className="flex flex-col rounded-lg border-0 bg-white-section w-427 h-screen ml-42 my-6">
				<div
					className="flex flex-row pl-9 pt-5 pb-5 border-b-2"
					style={{ borderBottomColor: '#EDF3F1' }}
				>
					<span
						className="mr-107"
						style={{ fontFamily: 'Raleway-Bold', fontSize: '19px' }}
					>
						Clientes
					</span>
					<img alt="" src={addIcon} className="mr-4" />
					<SearchInput />
				</div>
				<Client
					image={exampleClientIcon}
					name="Abbie Wilson"
					bloodType="O+"
					onEdit={handleEditClient}
					onSend={handleSendClient}
				/>
				<Client
					image={exampleClientIcon}
					name="Abbie Wilson"
					bloodType="O+"
					onEdit={handleEditClient}
					onSend={handleSendClient}
				/>
				<Client
					image={exampleClientIcon}
					name="Abbie Wilson"
					bloodType="O+"
					onEdit={handleEditClient}
					onSend={handleSendClient}
				/>
			</div>
			<div className="flex flex-col rounded-lg border-0 bg-white-section w-427 h-screen ml-9 mr-42 my-6">
				<div
					className="flex flex-row pl-9 pt-5 pb-5 border-b-2"
					style={{ borderBottomColor: '#EDF3F1' }}
				>
					<span
						className="mr-20 whitespace-nowrap"
						style={{ fontFamily: 'Raleway-Bold', fontSize: '19px' }}
					>
						Lista de Espera
					</span>
					<SearchInput />
				</div>
			</div>
			<ul>
				{clientsContext.clients?.map((client) => (
					<li key={client.id}>{client.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Clients;
