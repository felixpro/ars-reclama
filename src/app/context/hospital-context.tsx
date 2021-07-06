import React, { useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';

import { Hospital } from '../../models';

interface HospitalContextProps {
	hospitals: Hospital[];
	createHospital: () => void;
	actualHospital: Hospital ;
}

const hospitalsData = [
	{ label: 'La trinidad', value: '0' },
	{ label: 'La altagracia', value: '1' },
	{ label: 'Los monglares', value: '2' },
	{ label: 'Los faroles', value: '3' },
];

const exampleHospital = {
	name: 'Dario Contreras',
	phone: '829231846',
	pssCode: '455555',
	rnc: 'RNC456666',
};

export const HospitalsContext = React.createContext<Partial<HospitalContextProps>>({});

const HospitalsProvider: React.FC = (props) => {
	const [hospitals, setHospitals] = useState<Hospital[]>([]);
	const [actualHospital, setActualHospital] = useState<Hospital>();

	const createHospital = (): void => {
		DataStore.save(new Hospital(exampleHospital))
			.then((res) => {
				console.log('Hospital creado correctamente', res);
				setActualHospital(res);
			})
			.catch((error) => {
				console.log('Error al crear el Hospital', error);
			});
	};

	return (
		<HospitalsContext.Provider
			value={{
				hospitals: hospitalsData,
				createHospital: createHospital,
				actualHospital: actualHospital,
			}}
		>
			{props.children}
		</HospitalsContext.Provider>
	);
};

export default HospitalsProvider;
