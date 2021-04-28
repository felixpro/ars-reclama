import React, { useContext } from 'react';
import { ClientsContext } from '../../context/client-context';
import addIcon from '../../../assets/images/icono_agregar.svg';
import searchIcon from '../../../assets/images/icono_buscar.svg';

const Clients = () => {
	const clientsContext = useContext(ClientsContext);

	return (
		<div className="flex flex-row p-3">
			<div className="flex flex-row pl-9 pt-5 pr-8 pb-8 rounded-lg border-0 w-96 bg-white-section">
				<span className="mr-24">Clientes</span>

				<img alt="" src={addIcon} />
				<img alt="" src={searchIcon} />

				<input type="text" placeholder="Buscar cliente" className=" w-sectionSearchInput" />
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
