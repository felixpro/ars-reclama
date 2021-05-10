import React, { useContext } from 'react';
import { ClientsContext } from '../../context/client-context';
import addIcon from '../../../assets/images/icono_agregar.svg';
import SearchInput from '../searchInput/SearchInput';
import ClientC from './client/Client';
import { Client } from '../../../models';
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
		<div className="flex flex-col rounded-lg border-0 bg-white-section w-427 h-screen ml-42 my-6">
			<div className="section-cell border-b-2" style={{ borderBottomColor: '#EDF3F1' }}>
				<span className="mr-107" style={{ fontFamily: 'Raleway-Bold', fontSize: '19px' }}>
					Clientes
				</span>
				<img alt="" src={addIcon} className="mr-4" />
				<SearchInput />
			</div>
			<ClientC
				image={exampleClientIcon}
				name="Abbie Wilson"
				bloodType="O+"
				onEdit={handleEditClient}
				onSend={handleSendClient}
			/>
			<ClientC
				image={exampleClientIcon}
				name="Abbie Wilson"
				bloodType="O+"
				onEdit={handleEditClient}
				onSend={handleSendClient}
			/>
			<ClientC
				image={exampleClientIcon}
				name="Abbie Wilson"
				bloodType="O+"
				onEdit={handleEditClient}
				onSend={handleSendClient}
			/>
		</div>
	);
};

export default Clients;
