import React, { useState } from 'react';
import { Hospital } from '../../models';

interface HospitalContextProps {
	hospitals: Hospital[];
	createHospitals: () => Promise<void>;
	fetchHospitals: () => Promise<void>;
	deleteHospitals: () => Promise<void>;
	updateHospitals: () => Promise<void>;
}

const hospitalsData = [
	{ label: 'La trinidad', value: '0' },
	{ label: 'La altagracia', value: '1' },
	{ label: 'Los monglares', value: '2' },
	{ label: 'Los faroles', value: '3' },
];

export const HospitalsContext = React.createContext<Partial<HospitalContextProps>>({});

const HospitalsProvider: React.FC = (props) => {
	const [hospitals, setHospitals] = useState<Hospital[]>([]);


	const createHospitals = async (): Promise<void> => {
		console.log('Console doctor');
	};
	const fetchHospitals = async (): Promise<void> => {
		console.log('Console doctor');
	};
	const deleteHospitals = async (): Promise<void> => {
		console.log('Console doctor');
	};
	const updateHospitals = async (): Promise<void> => {
		console.log('Console doctor');
	};

	return (
		<HospitalsContext.Provider
			value={{
				hospitals: hospitalsData,
				createHospitals: createHospitals,
				fetchHospitals: fetchHospitals,
				deleteHospitals: deleteHospitals,
				updateHospitals: updateHospitals,
			}}
		>
			{props.children}
		</HospitalsContext.Provider>
	);
};

export default HospitalsProvider;
