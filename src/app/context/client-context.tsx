import React, { useState, useContext } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Client } from '../../models';

import { ClientDoctor } from '../../models';
import { DoctorsContext } from './doctor-context';

import { IdentificationTypes } from '../../models';
import { SexType } from '../../models';

interface ClientContextProps {
	clients: Client[];
	fetchClients: () => void;
	createClient: () => void;
	deleteClient: (id: string) => void;
	updateClient: (id: string) => void;
	fetchClient: (id: string) => void;
}

export const ClientsContext = React.createContext<Partial<ClientContextProps>>({});

const ContextProvider: React.FC = (props) => {
	const [clients, setClients] = useState<Client[]>([]);

	const { actualDoctor, updateActualDoctor } = useContext(DoctorsContext);

	const createClient = (): void => {
		DataStore.save(
			new Client({
				identificationName: IdentificationTypes.CEDULA,
				identificationData: 'Cedula',
				name: 'fyuhui,gjk Dunas',
				cellphoneNumber: '+18292301846',
				email: 'Francis.fr@gmail.com',
				bornDate: '15/01/2021',
				sex: SexType.FEMENINO,
				phoneNumber: '8097891564',
				admissionDate: '15/01/2021',
				addressStreet: 'C/1 #23',
				addressNumber: 11517,
				neighborhood: 'Cancino Adentro',
				city: 'Santo Domingo',
				sector: 'Cancino Adentro',
				BloodType: '0+',
				Empresa: 'Panaderia Jhon',
				insuranceSelected: 'Cenasa',
				Insurances: [],
			})
		)
			.then((res) => {
				// antes de crear un cliente segurarse de correro la funcion que actualiza actualDoctor
				// Create relation between clients and doctors
				DataStore.save(new ClientDoctor({ client: res, doctor: actualDoctor }))
					.then((res) => {
						console.log('Relacion creada correctamente', res);
					})
					.catch((error) => {
						console.log('Fallo al crear relacion', error);
						// Delete client created withoutrelation
						deleteClient(res.id);
					});
				console.log('Cliente creado correctamente', res);
			})
			.catch((error) => {
				console.log('Error al crear cliente', error);
			});
	};

	const fetchClients = (): void => {
		DataStore.query(Client)
			.then((res) => {
				setClients(res);
				console.log('Clientes encontrados correctamente', res);
			})
			.catch((error) => {
				console.log('Error al encontrar clientes', error);
			});
	};

	const fetchClient = (): void => {};

	const deleteClient = (id): void => {
		DataStore.query(Client, id)
			.then((res) => {
				DataStore.delete(res)
					.then((res) => console.log('Cliente eliminado correctamente', res))
					.catch((error) => console.log('Error al eliminar el cliente', error));
			})
			.then((res) => console.log('Cliente a eliminar encontrado correctamente', res))
			.catch((error) => console.log('No se encontro cliente para eliminar', error));
	};

	const updateClient = (): void => {
		console.log('Console doctor');
	};

	return (
		<ClientsContext.Provider
			value={{
				clients: clients,
				createClient: createClient,
				fetchClients: fetchClients,
				deleteClient: deleteClient,
				updateClient: updateClient,
			}}
		>
			{props.children}
		</ClientsContext.Provider>
	);
};

export default ContextProvider;
