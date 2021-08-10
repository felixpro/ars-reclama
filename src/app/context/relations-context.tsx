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
}

export const RelationsContext = React.createContext<Partial<InsuranceContextProps>>({});

const RelationsProvider: React.FC = (props) => {
	const [actualHospital, setActualHospital] = useState<Hospital>();
	const [actualDoctor, setActualDoctor] = useState<Doctor>();
	const [actualClient, setActualClient] = useState<Client>({
		actualInsurance: 'META SALUD ARS',
		addressStreet: 'wertygsdrtfghsd',
		bloodType: 'B+',
		bornDate: '2021-08-11',
		cellphoneNumber: '(645) 674-5764',
		city: 'sdfghdfghdfgh',
		company: 'Tesla',
		email: 'dgfhx@gmail.com',
		gender: 'FEMENINO',
		id: '6fbea533-e136-4e5f-8774-beed3b152e47',
		identificationData: '454-643-6465-4',
		identificationName: 'CEDULA',
		name: 'rytuirtyu',
		phoneNumber: '(435) 643-5634',
		profileImage: '',
		sector: 'sdfhgsgh',
	});
	const [actualInsurance, setActualInsurance] = useState<Insurance>({
		affiliateNumber: '4345645645',
		affiliateType: 'PRINCIPAL',
		clientID: '6fbea533-e136-4e5f-8774-beed3b152e47',
		contractNumber: '45645645645',
		id: '36346c72-5af6-4dcb-99a1-06f3d7af05e4',
		name: 'META SALUD ARS',
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
			}}
		>
			{props.children}
		</RelationsContext.Provider>
	);
};

export default RelationsProvider;
