import React, { useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { RelationsContext } from './relations-context';
import { Doctor } from '../../models';
import { useContext } from 'react';

interface DoctorContextProps {
	doctors: Doctor[];
	createDoctor: () => void;
	fetchDoctors: () => void;
	deleteDoctor: (id: string) => void;
	updateDoctor: (id: string) => void;
	updateActualDoctor: (id: string) => void;
}

export const DoctorsContext = React.createContext<Partial<DoctorContextProps>>({});

const ContextProvider: React.FC = (props) => {
	const [doctors, setDoctors] = useState<Doctor[]>([]);
	const { setActualDoctor } = useContext(RelationsContext);

	const createDoctor = () => {
		DataStore.save(
			new Doctor({
				name: 'Felix Daniel',
				specialty: 'Cirujano',
				exequator: '4e744d7',
				email: 'Robert@gmail.com',
				title: 'proceneta',
				phone: '829231846',
				password: 'aerdsfgh48//ertg4',
			})
		)
			.then((res) => {
				console.log('Doctor creado correctamente', res);
				setActualDoctor(res);
				fetchDoctors();
			})
			.catch((error) => {
				console.log('Error al crear el doctor', error);
			});
	};

	const fetchDoctors = (): void => {
		// fetch all the doctors that the secretary belongs
		DataStore.query(Doctor)
			.then((res) => {
				setDoctors(res);
				console.log('Doctores');
			})
			.catch((error) => {
				console.log('Error al buscar doctores', error);
			});
	};

	return (
		<DoctorsContext.Provider
			value={{
				doctors: doctors,
				createDoctor: createDoctor,
				fetchDoctors: fetchDoctors,
			}}
		>
			{props.children}
		</DoctorsContext.Provider>
	);
};

export default ContextProvider;
