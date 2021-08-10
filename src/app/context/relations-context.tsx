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
		actualInsurance: 'ARS RESERVAS',
		addressStreet: 'dfgsdfg',
		bloodType: 'sdfgsdfgh',
		bornDate: '2021-08-11',
		cellphoneNumber: '(345) 345-345_',
		city: 'sdfg',
		company: 'sdfgsdfg',
		email: 'dfgs@gmail.com',
		gender: 'FEMENINO',
		id: 'c75fe50c-3d6d-43d8-8dcb-2864275bc1e2',
		identificationData: '456-456-4564-6',
		identificationName: 'CEDULA',
		name: 'rtdgesdrfghsdfh',
		phoneNumber: '(435) 353-53__',
		profileImage: '',
		sector: 'sdfgsdfg',
	});
	const [actualInsurance, setActualInsurance] = useState<Insurance>({
		affiliateNumber: '345345345345',
		affiliateType: 'PRINCIPAL',
		clientID: 'c75fe50c-3d6d-43d8-8dcb-2864275bc1e2',
		contractNumber: '345345345',
		id: 'b79d72b0-9d70-4129-9537-bd1776143171',
		name: 'ARS RESERVAS',
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
