import React, { useState, useContext } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Client } from '../../models';
import { Insurance } from '../../models';

import { ClientDoctor } from '../../models';
import { DoctorsContext } from './doctor-context';

import { IdentificationTypes } from '../../models';
import { SexType } from '../../models';

const clientArray = [
	{ id: 45764, name: 'Felix Pujols', insurance: '402-263-6462-4' },
	{ id: 45864, name: 'Javier Rudoz', insurance: '268-998-789-2' },
	{ id: 45654, name: 'Denis  Lutors', insurance: '458-9847-4' },
	{ id: 45264, name: 'Rauld mendez', insurance: '235-5865-6' },
	{ id: 45614, name: 'Lucas Deibi ', insurance: '402-263-65462-4' },
	{ id: 45064, name: 'Randy Duffer ', insurance: '486-998-789-2' },
	{ id: 4564, name: 'Perris Chanlca', insurance: '268-947-4' },
	{ id: 46564, name: 'Brandis Dopberman', insurance: '285-5865-6' },
];

interface ClientContextProps {
	clients: Client[];
	fetchClients: () => void;
	createClient: (clientData: Record<string, unknown>) => void;
	deleteClient: (id: string) => void;
	updateClient: (id: string) => void;
	fetchClient: (id: string) => void;
}

export const ClientsContext = React.createContext<Partial<ClientContextProps>>({});

const ContextProvider: IContextProvider = (props) => {
	const [clients, setClients] = useState<Client[]>([]);

	// const { actualDoctor, updateActualDoctor } = useContext(DoctorsContext);

	const createClient = (dataForm): void => {
		const passport = dataForm.identification.passport ? IdentificationTypes.PASAPORTE : null;
		const identification = dataForm.identification.id ? IdentificationTypes.CEDULA : null;

 		const femenine = dataForm.sex.femenine ? SexType.FEMENINO : null;
		const masculine = dataForm.sex.masculine ? SexType.MASCULINO : null;

		const clientObj: Client = {
			identificationName: passport || identification,
			identificationData: dataForm.identificationData,
			name: dataForm.name,
			cellphoneNumber: dataForm.cellphoneNumber,
			email: dataForm.email,
			bornDate: dataForm.bornDate,
			sex: femenine || masculine,
			phoneNumber: dataForm.phoneNumber,
			addressStreet: dataForm.addressStreet,
			city: dataForm.city,
			sector: dataForm.sector,
			BloodType: dataForm.BloodType,
			company: dataForm.company,
		};

		const insuranceData: Insurance = {
			name: dataForm.insuranceSelected,
			contractNumber: parseInt(dataForm.contractNumber),
			affiliateNumber: parseInt(dataForm.affiliateNumber),
			affiliateType: dataForm.affiliateType,
		};

		DataStore.save(new Client(clientObj))
			.then((res) => {
				// Create insurance
				DataStore.save(new Insurance(insuranceData))
					.then((res) => {
						console.log('Seguro creada correctamente', res);
					})
					.catch((error) => {
						console.log('Fallo al crear Seguro', error);
						// Delete client created withoutrelation
						deleteClient(res.id);
					});

				console.log('Cliente creado correctamente', res);
				// Create relation between clients and doctors
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

	const fetchClient = (id: string): void => {
		console.log('Console doctor');
	};

	const deleteClient = (id: string): void => {
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
				clients: clientArray,
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
