import React, { useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { RelationsContext } from './relations-context';

import { Hospital } from '../../models';
import { useContext } from 'react';

interface HospitalContextProps {
	hospitals: Hospital[];
	createHospital: () => void;
	fetchHospitals: () => void;
}

const exampleHospital = {
	name: 'Dario Contreras',
	phone: '829231846',
	pssCode: '455555',
	rnc: 'RNC456666',
};

export const HospitalsContext = React.createContext<Partial<HospitalContextProps>>({});

const HospitalsProvider: React.FC = (props) => {
	const [hospitals, setHospitals] = useState<Hospital[]>([]);
	const { setActualHospital } = useContext(RelationsContext);

	const createHospital = (): void => {
		DataStore.save(new Hospital(exampleHospital))
			.then((res) => {
				console.log('Hospital creado correctamente', res);
				setActualHospital(res);
				fetchHospitals();
			})
			.catch((error) => {
				console.log('Error al crear el Hospital', error);
			});
	};

	const fetchHospitals = (): void => {
		// fetch all the doctors that the secretary belongs
		DataStore.query(Hospital)
			.then((res) => {
				setHospitals(res);
				console.log('Hospitales');
			})
			.catch((error) => {
				console.log('Error al buscar hospitales', error);
			});
	};

	return (
		<HospitalsContext.Provider
			value={{
				hospitals: hospitals,
				createHospital: createHospital,
				fetchHospitals: fetchHospitals,
			}}
		>
			{props.children}
		</HospitalsContext.Provider>
	);
};

export default HospitalsProvider;
