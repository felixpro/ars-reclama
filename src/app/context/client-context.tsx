import React, { useState, useContext } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Client, HealthInsurance, HospitalDoctorCliente } from '../../models';
import { Insurance } from '../../models';
import { ClientType } from './types';
import { ClientDoctor } from '../../models';
import { DoctorsContext } from './doctor-context';
import { RelationsContext } from './relations-context';

import { IdentificationTypes } from '../../models';
import { SexType } from '../../models';

interface ClientContextProps {
	clients: ClientType[];
	fetchClients: (filterText?: string) => void;
	createClient: (clientData: Record<string, unknown>) => void;
	deleteClient: (id: string) => void;
	updateClient: (id: string) => void;
	fetchClient: (id: string) => void;
}

export const ClientsContext = React.createContext<Partial<ClientContextProps>>({});

const ContextProvider: React.FC = (props) => {
	const [clients, setClients] = useState<ClientType[]>([]);

	const relationsContext = useContext(RelationsContext);

	const createInsurance = async (dataForm, clientID) => {
		const insuranceData = {
			clientID: clientID,
			name: dataForm.actualInsurance,
			contractNumber: dataForm.contractNumber,
			affiliateNumber: dataForm.affiliateNumber,
			affiliateType: dataForm.affiliateType,
		};
		DataStore.save(new Insurance(insuranceData))
			.then((res) => {
				console.log('Seguro creada correctamente', res);
			})
			.catch((error) => {
				console.log('Fallo al crear Seguro', error);
				// Delete client created withoutrelation
				deleteClient(clientID);
			});
	};

	const createClient = (dataForm): void => {
		const clientObj = {
			identificationName: dataForm.idCard
				? IdentificationTypes.CEDULA
				: IdentificationTypes.PASAPORTE,
			identificationData: dataForm.identificationData,
			actualInsurance: dataForm.actualInsurance,
			name: dataForm.name,
			cellphoneNumber: dataForm.cellphoneNumber,
			email: dataForm.email,
			bornDate: dataForm.bornDate,
			gender: dataForm.gender,
			phoneNumber: dataForm.phoneNumber,
			addressStreet: dataForm.addressStreet,
			city: dataForm.city,
			sector: dataForm.sector,
			bloodType: dataForm.bloodType,
			company: dataForm.company,
			profileImage: '',
		};

		DataStore.save(new Client(clientObj))
			.then((res) => {
				createInsurance(dataForm, res.id);

				console.log('Cliente creado correctamente', res);
				// Create relation between clients and doctors
			})
			.catch((error) => {
				console.log('Error al crear cliente', error);
			});
	};

	const fetchClients = async (filterText?: string) => {
		try {
			const hospitalDoctorClients = (await DataStore.query(HospitalDoctorCliente)).filter(
				(hdc) => hdc.hospitalDoctorID === relationsContext.actualHospitalDoctor?.id
			);
			let clients = (await DataStore.query(Client)).filter(
				(cl) => hospitalDoctorClients.filter((hdc) => hdc.clientID === cl.id).length > 0
			);
			const filterTextValue = filterText ? filterText.trim() : '';
			if (filterTextValue.length) {
				clients = clients.filter((client) =>
					client.name?.toLowerCase().includes(filterTextValue.toLocaleLowerCase())
				);
			}
			setClients([]);
			clients.forEach(async (client) => {
				const hospitalDoctorCliente = hospitalDoctorClients.filter(
					(hdc) => hdc.clientID === client.id
				)[0];

				const healthInsurance = await DataStore.query(
					Insurance,
					hospitalDoctorCliente.lastHealthInsurranceID
				);
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

	const updateClient = async (dataForm) => {
		if (relationsContext.actualClient) {
			await DataStore.query(Client, relationsContext.actualClient.id)
				.then((original) => {
					DataStore.save(
						Client.copyOf(original, (updated) => {
							updated.identificationName = dataForm.idCard
								? IdentificationTypes.CEDULA
								: IdentificationTypes.PASAPORTE;
							updated.identificationData = dataForm.identificationData;
							updated.name = dataForm.name;
							updated.cellphoneNumber = dataForm.cellphoneNumber;
							updated.actualInsurance = dataForm.actualInsurance;
							updated.addressStreet = dataForm.addressStreet;
							updated.bloodType = dataForm.bloodType;
							updated.bornDate = dataForm.bornDate;
							updated.city = dataForm.city;
							updated.company = dataForm.company;
							updated.email = dataForm.email;
							updated.gender = dataForm.gender;
							updated.profileImage = dataForm.profileImage;
							updated.sector = dataForm.sector;
							updated.bloodType = dataForm.bloodType;
						})
					).then(async (res) => {
						// Validate if the insurance submited already exist
						const insurance = await DataStore.query(Insurance, (Ins) =>
							Ins.clientID('contains', relationsContext.actualClient.id).name(
								'contains',
								dataForm.actualInsurance
							)
						);

						if (insurance.length >= 1) {
							// Update Insurance
							DataStore.save(
								Insurance.copyOf(insurance[0], (updated) => {
									updated.name = dataForm.actualInsurance;
									updated.contractNumber = dataForm.contractNumber;
									updated.affiliateNumber = dataForm.affiliateNumber;
									updated.affiliateType = dataForm.affiliateType;
								})
							)
								.then((res) => {
									console.log('Seguro Actualizado correctamente', res);
								})
								.catch((err) => {
									console.log(err, 'Error al actualizar seguro');
								});
						} else {
							// Create Insurance
							createInsurance(dataForm, relationsContext.actualClient.id);
							console.log('Hora de crear seguro');
						}

						console.log('Cliente actualizado correctamente', res);
					});
				})
				.catch((err) => {
					console.log('Error al buscar cliente', err);
				});
		} else {
			console.log('No hay un cliente seleccionado, error al actualizar cliente');
		}
	};

	const deleteClient = async (id: string): void => {
		const client = await DataStore.query(Client, id);
		DataStore.delete(client)
			.then((res) => {
				console.log('Cliente eliminado correctamente', res);
			})
			.catch((error) => console.log('No se encontro cliente para eliminar', error));
	};

	return (
		<ClientsContext.Provider
			value={{
				clients: clients,
				createClient: createClient,
				deleteClient: deleteClient,
				fetchClients: fetchClients,
				updateClient: updateClient,
			}}
		>
			{props.children}
		</ClientsContext.Provider>
	);
};

export default ContextProvider;
