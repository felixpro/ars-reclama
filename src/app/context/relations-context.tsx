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
	updateActualClientInsurance: (clientID: string) => void;
	setActualInsurance: (Insurance: Insurance) => void;
}

export const RelationsContext = React.createContext<Partial<InsuranceContextProps>>({});

const RelationsProvider: React.FC = (props) => {
	const [actualHospital, setActualHospital] = useState<Hospital>();
	const [actualDoctor, setActualDoctor] = useState<Doctor>();
	const [actualClient, setActualClient] = useState<Client>();
	const [actualInsurance, setActualInsurance] = useState<Insurance>();
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

	const updateActualClientInsurance = async (clientID) => {
		DataStore.query(Client, clientID)
			.then(async (client) => {
				setActualClient(client);
				// Get the insurance that the client is using
				const insurance = await DataStore.query(Insurance, (Ins) =>
					Ins.clientID('contains', clientID).name('contains', client.actualInsurance)
				)
				const clientInsurance = insurance[0];

				setActualInsurance(clientInsurance);
				console.log('ActualInsurance actualizado', [clientInsurance]);
				console.log('ActualClient actualizado', [client]);
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
				updateActualClientInsurance: updateActualClientInsurance,
			}}
		>
			{props.children}
		</RelationsContext.Provider>
	);
};

export default RelationsProvider;
