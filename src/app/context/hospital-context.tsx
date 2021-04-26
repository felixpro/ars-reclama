import React from 'react';
import { Hospital } from '../../models';

interface HospitalContextProps {
	hospitals: Hospital[];
}

// Create interface for hospital object
const hospitalsData = [
	{ name: 'La trinidad', id: '0' },
	{ name: 'La altagracia', id: '1' },
	{ name: 'Los monglares', id: '2' },
	{ name: 'Los faroles', id: '3' },
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
