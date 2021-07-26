import React, { useState, useContext } from 'react';
import { DataStore } from '@aws-amplify/datastore';

import { HospitalDoctor } from '../../models';
import { DoctorsContext } from './doctor-context';
import { HospitalsContext } from './hospital-context';

interface InsuranceContextProps {
	createHospitalDoctor: () => void;
	setActualHospitalDoctor: (hospitalDoctor: HospitalDoctor) => void;
	actualHospitalDoctor: HospitalDoctor;
}

export const RelationsContext = React.createContext<Partial<InsuranceContextProps>>({});

const RelationsProvider: React.FC = (props) => {
	const { actualDoctor } = useContext(DoctorsContext);
	const { actualHospital } = useContext(HospitalsContext);
	const [actualHospitalDoctor, setActualHospitalDoctor] = useState<HospitalDoctor>();

	const createHospitalDoctor = () => {
		if (actualDoctor && actualHospital) {
			DataStore.save(
				new HospitalDoctor({
					doctorID: actualDoctor.id,
					hospitalID: actualHospital.id,
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
				createHospitalDoctor: createHospitalDoctor,
				actualHospitalDoctor: actualHospitalDoctor,
				setActualHospitalDoctor: setActualHospitalDoctor
			}}
		>
			{props.children}
		</RelationsContext.Provider>
	);
};

export default RelationsProvider;
