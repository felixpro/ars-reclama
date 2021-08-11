import React, { useState, useContext } from 'react';
import { DataStore } from '@aws-amplify/datastore';

import {
	HospitalDoctor,
	Hospital,
	Doctor,
	WaitList,
	Client,
	Insurance,
	AffiliateTypes,
} from '../../models';

interface InsuranceContextProps {
	createHospitalDoctor: () => void;
	setActualHospitalDoctor: (hospitalDoctor: HospitalDoctor) => void;
	actualHospitalDoctor: HospitalDoctor;
	setActualHospital: (hospital: Hospital) => void;
	setActualDoctor: (doctor: Doctor) => void;
	actualDoctor: Doctor;
	actualWaitingList: WaitList;
	setActualWaitingList: (waitingList: WaitList) => void;
	actualClient: Client;
	setActualClient: (client: Client) => void;
	actualInsurance: Insurance;
	setActualClientInsurance: (clientID: string) => void;
}

export const RelationsContext = React.createContext<Partial<InsuranceContextProps>>({});

const RelationsProvider: React.FC = (props) => {
	const [actualHospital, setActualHospital] = useState<Hospital>();
	const [actualDoctor, setActualDoctor] = useState<Doctor>();
	const [actualClient, setActualClient] = useState<Client>();
	const [actualInsurance, setActualInsurance] = useState<Insurance>({
		affiliateNumber: '111',
		affiliateType: 'TITULAR',
		clientID: '6fbea533-e136-4e5f-8774-beed3b152e47',
		contractNumber: '45645645645',
		id: '36346c72-5af6-4dcb-99a1-06f3d7af05e4',
		name: 'ARS GMA',
	});
	const [actualHospitalDoctor, setActualHospitalDoctor] = useState<HospitalDoctor>();
	const [actualWaitingList, setActualWaitingList] = useState<WaitList>();

	const createHospitalDoctor = () => {
		if (actualDoctor && actualHospital) {
			DataStore.save(
				new HospitalDoctor({
					doctorID: actualDoctor.id,
					hospitalID: actualHospital.id,
					lastWaitingListID: '',
				})
			)
				.then((res) => {
					setActualHospitalDoctor(res);
					console.log('Relacion HospitalDoctor Creada correctamente', res);
				})
				.catch((error) => {
					console.log('Error al crear relacion HospitalDoctor', error);
				});
		} else {
			console.log('actualDoctor o actualHospital esta vacio');
		}
	};

	const setActualClientInsurance = async (clientID) => {
		await DataStore.query(Client)
			.then((res) => {
				const client = res[0];
				setActualClient(client);
				DataStore.query(Insurance, (c) => c.clientID('contains', client.id)).then((res) => {
					console.log('Insurances del actualClient', res);
				});

				console.log('Cliente actualizado correctamente', client);
			})
			.catch((err) => {
				console.log('Error al actulizar cliente actual', err);
			});
	};

	return (
		<RelationsContext.Provider
			value={{
				actualClient: actualClient,
				actualInsurance: actualInsurance,
				actualHospitalDoctor: actualHospitalDoctor,
				actualWaitingList: actualWaitingList,
				actualDoctor: actualDoctor,
				setActualClient: setActualClient,
				setActualInsurance: setActualInsurance,
				createHospitalDoctor: createHospitalDoctor,
				setActualHospitalDoctor: setActualHospitalDoctor,
				setActualHospital: setActualHospital,
				setActualDoctor: setActualDoctor,
				setActualWaitingList: setActualWaitingList,
				setActualClientInsurance: setActualClientInsurance,
			}}
		>
			{props.children}
		</RelationsContext.Provider>
	);
};

export default RelationsProvider;
