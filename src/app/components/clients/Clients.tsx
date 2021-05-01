import React, { useContext } from 'react';
import { ClientsContext } from '../../context/client-context';
import addIcon from '../../../assets/images/icono_agregar.svg';
import SearchInput from '../searchInput/SearchInput';

const Clients = () => {
	const clientsContext = useContext(ClientsContext);

	return (
		<div className="flex flex-row">
			<div className="flex flex-row m-3 pl-9 pt-5 pr-8 pb-5 rounded-lg border-0 bg-white-section w-427 m-42">
				<span className="mr-24" style={{ fontFamily: 'Raleway-Bold' }}>
					Clientes
				</span>
				<img alt="" src={addIcon} className="mr-4" />
				<SearchInput />
			</div>
			<div className="flex flex-row m-3 pl-9 pt-5 pr-8 pb-5 rounded-lg border-0 bg-white-section w-427 m-42">
				<span className="mr-24" style={{ fontFamily: 'Raleway-Bold' }}>
					Clientes
				</span>
				<img alt="" src={addIcon} className="mr-4" />
				<SearchInput />
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
