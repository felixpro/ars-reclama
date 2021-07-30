import React, { useState, useContext } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Client, HealthInsurance, HospitalDoctorCliente } from '../../models';
import { Insurance } from '../../models';
import { ClientType } from './types';
import { ClientDoctor } from '../../models';
import { DoctorsContext } from './doctor-context';
import { RelationsContext } from './relations-context'

import { IdentificationTypes } from '../../models';
import { SexType } from '../../models';

interface ClientContextProps {
	clients: ClientType[];
	fetchClients: (filterText?: string) => void;
	createClient: (clientData: Record<string, unknown>) => void;
	deleteClient: (id: string) => void;
	updateClient: (id: string) => void;
	fetchClient: (id: string) => void;
	setActualClient: React.Dispatch<React.SetStateAction<ClientType[]>>;
	actualClient: ClientType[];
}

export const ClientsContext = React.createContext<Partial<ClientContextProps>>({});

const ContextProvider: React.FC = (props) => {
	const [clients, setClients] = useState<ClientType[]>([]);
	const [actualClient, setActualClient] = useState<ClientType[]>([]);

	const relationsContext = useContext(RelationsContext);

	// const { actualDoctor, updateActualDoctor } = useContext(DoctorsContext);

	const createClient = (dataForm): void => {
		const passport = dataForm.identification.passport ? IdentificationTypes.PASAPORTE : null;
		const identification = dataForm.identification.id ? IdentificationTypes.CEDULA : null;

		const femenine = dataForm.gender.femenine ? SexType.FEMENINO : null;
		const masculine = dataForm.gender.masculine ? SexType.MASCULINO : null;

		const clientObj: Client = {
			identificationName: passport || identification,
			identificationData: dataForm.identificationData,
			name: dataForm.name,
			cellphoneNumber: dataForm.cellphoneNumber,
			email: dataForm.email,
			bornDate: dataForm.bornDate,
			gender: femenine || masculine,
			phoneNumber: dataForm.phoneNumber,
			addressStreet: dataForm.addressStreet,
			city: dataForm.city,
			sector: dataForm.sector,
			bloodType: dataForm.BloodType,
			company: dataForm.company,
		};

		DataStore.save(new Client(clientObj))
			.then((res) => {
				const insuranceData: Insurance = {
					clientID: res.id,
					name: dataForm.insuranceSelected,
					contractNumber: parseInt(dataForm.contractNumber),
					affiliateNumber: parseInt(dataForm.affiliateNumber),
					affiliateType: dataForm.affiliateType,
				};
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

	const fetchClients = async (filterText?: string) => {
		try {
			const hospitalDoctorClients = (await DataStore.query(HospitalDoctorCliente)).filter(hdc => hdc.hospitalDoctorID === relationsContext.actualHospitalDoctor?.id);
			let clients = (await DataStore.query(Client)).filter(cl => hospitalDoctorClients.filter(hdc => hdc.clientID === cl.id).length > 0);
			const filterTextValue = filterText ? filterText.trim() : '';
			if (filterTextValue.length) {
				clients = clients.filter((client) =>
					client.name?.toLowerCase().includes(filterTextValue.toLocaleLowerCase())
				);
			}
			setClients([]);
			clients.forEach(async (client) => {
				const hospitalDoctorCliente = hospitalDoctorClients.filter(hdc => hdc.clientID === client.id)[0];

				const healthInsurance = await DataStore.query(Insurance, hospitalDoctorCliente.lastHealthInsurranceID);
				const transformedClient: ClientType = {
					id: client.id,
					name: client.name,
					healthInsuranceId: hospitalDoctorCliente.lastHealthInsurranceID,
					healthInsurance: healthInsurance ? healthInsurance.name : '',
				};
				setClients((clients) => clients.concat(transformedClient));
			});
		} catch (error) {
			console.log(error);
		}
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
				clients: clients,
				actualClient: actualClient,
				createClient: createClient,
				fetchClients: fetchClients,
				deleteClient: deleteClient,
				updateClient: updateClient,
				setActualClient: setActualClient,
			}}
		>
			{props.children}
		</ClientsContext.Provider>
	);
};

export default ContextProvider;
