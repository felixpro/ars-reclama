import React, { useState, useContext } from 'react';
import { DataStore } from '@aws-amplify/datastore';

import { HospitalDoctor, Hospital, Doctor, WaitList, Client } from '../../models';

interface InsuranceContextProps {
	createHospitalDoctor: () => void;
	setActualHospitalDoctor: (hospitalDoctor: HospitalDoctor) => void;
	actualHospitalDoctor: HospitalDoctor;
	setActualHospital: (hospital: Hospital) => void;
	setActualDoctor: (doctor: Doctor) => void;
	actualWaitingList: WaitList;
	setActualWaitingList: (waitingList: WaitList) => void;
	actualClient: Client;
	setActualClient: (client: Client) => void;
}

export const RelationsContext = React.createContext<Partial<InsuranceContextProps>>({});

const RelationsProvider: React.FC = (props) => {
	const [actualHospital, setActualHospital] = useState<Hospital>();
	const [actualDoctor, setActualDoctor] = useState<Doctor>();
	const [actualClient, setActualClient] = useState<Client>({
		actualInssurance: "Sin seguro",
       addressStreet: "Calle Primera",
       bloodType: "B+",
      bornDate: "2021-08-18",
cellphoneNumber: "(456) 789-4113",
city: "Santo Domingo",
company: "Tesla",
email: "felix@gmail.com",
gender: "MASCULINO",
id: "ee4bdfd9-8b8f-48fb-aadb-70122ac6103f",
identificationData: "454-646-5646-4",
identificationName: "CEDULA",
name: "Felix Pujols",
phoneNumber: "(825) 923-0184",
profileImage: "",
sector: "Cancino Adentro",
});

	const [actualHospitalDoctor, setActualHospitalDoctor] = useState<HospitalDoctor>();
	const [actualWaitingList, setActualWaitingList] = useState<WaitList>();

	const createHospitalDoctor = () => {
		if (actualDoctor && actualHospital) {
			DataStore.save(
				new HospitalDoctor({
					doctorID: actualDoctor.id,
					hospitalID: actualHospital.id,
					lastWaitingListID: ''
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
				actualHospitalDoctor: actualHospitalDoctor,
				actualWaitingList: actualWaitingList,
				setActualClient: setActualClient,
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
