import React, { useContext } from 'react';
import { ClientsContext } from '../../context/client-context';
import addIcon from '../../../assets/images/icono_agregar.svg';
import searchIcon from '../../../assets/images/icono_buscar.svg';

const Clients = () => {
	const clientsContext = useContext(ClientsContext);

	return (
		<div className="flex flex-row p-3">
			<div className="flex flex-row pl-9 pt-5 pr-8 pb-5 rounded-lg border-0 bg-white-section">
				<span className="mr-24" style={{ fontFamily: 'Raleway-Bold' }}>
					Clientes
				</span>
				<img alt="" src={addIcon} className="mr-4" />
				<img alt="" src={searchIcon} className="mr-2" />

				<input type="text" placeholder="Buscar cliente" className="w-28" />
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
