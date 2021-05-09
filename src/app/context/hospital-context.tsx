import React from 'react';
import { Hospital } from '../../models';

export interface HospitalContextProps {
	hospitals: Hospital[];
}

// Create interface for hospital object
const hospitalsData = [
	{ label: 'La trinidad', value: '0' },
	{ label: 'La altagracia', value: '1' },
	{ label: 'Los monglares', value: '2' },
	{ label: 'Los faroles', value: '3' },
];

export const HospitalsContext = React.createContext<Partial<HospitalContextProps>>({});

const HospitalsProvider: React.FC = (props) => {
	return (
		<HospitalsContext.Provider
			value={{
				hospitals: hospitalsData,
			}}
		>
			{props.children}
		</HospitalsContext.Provider>
	);
};

export default HospitalsProvider;
