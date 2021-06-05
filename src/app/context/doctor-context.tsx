import React, { useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Doctor } from '../../models';

interface DoctorContextProps {
	doctors: Doctor[];
	actualDoctor: Doctor;
	createDoctor: () => void;
	fetchDoctors: () => void;
	deleteDoctor: (id: string) => void;
	updateDoctor: (id: string) => void;
	updateActualDoctor: (id: string) => void;
}

// Create interface for hospital object
const doctorsData = [
	{ label: 'Gustavo Me', value: '0' },
	{ label: 'Felix Pu', value: '1' },
	{ label: 'Juan', value: '2' },
	{ label: 'Lucas ban', value: '3' },
];

export const DoctorsContext = React.createContext<Partial<DoctorContextProps>>({});

const DoctorsProvider: React.FC = (props) => {
	const [doctors, setDoctors] = useState<Doctor[]>([]);
	const [actualDoctor, setActualDoctor] = useState<Doctor>();

	const createDoctor = (): void => {
		DataStore.save(
			new Doctor({
				name: 'Lucas Donelis',
				specialty: 'Cirujano',
				exequator: '4e744d7',
				email: 'Lucas@gmail.com',
				title: 'Neurologo Cirujano & proceneta',
				phone: '829231846',
				password: 'aerdsfgh48//ertg4',
			})
		)
			.then((res) => {
				console.log('Doctor creado correctamente', res);
			})
			.catch((error) => {
				console.log('Error al crear el doctor', error);
			});
	};

	const fetchDoctors = (): void => {
		DataStore.query(Doctor)
			.then((res) => {
				setDoctors(res);
				console.log('Doctores', res);
			})
			.catch((error) => {
				console.log('Error al buscar doctores', error);
			});
	};

	const deleteDoctor = (id): void => {
		DataStore.query(Doctor, id).then((res) => {
			DataStore.delete(res);
		});
	};

	const updateDoctor = (id: string): void => {
		console.log('Console doctor');
	};

	const updateActualDoctor = (doctorId: string): void => {
		DataStore.query(Doctor, doctorId)
			.then((res) => {
				setActualDoctor(res[0]);
				console.log('DoctoreActual', res);
			})
			.catch((error) => {
				console.log('Error al buscar doctores', error);
			});
	};
	return (
		<DoctorsContext.Provider
			value={{
				doctors: doctorsData,
				actualDoctor: actualDoctor,
				createDoctor: createDoctor,
				fetchDoctors: fetchDoctors,
				deleteDoctor: deleteDoctor,
				updateDoctor: updateDoctor,
				updateActualDoctor: updateActualDoctor,
			}}
		>
			{props.children}
		</DoctorsContext.Provider>
	);
};

export default DoctorsProvider;
