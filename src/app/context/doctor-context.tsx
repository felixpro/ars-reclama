import React from 'react';
import { Doctor } from '../../models';

interface DoctorContextProps {
	doctors: Doctor[];
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
	return (
		<DoctorsContext.Provider
			value={{
				doctors: doctorsData,
			}}
		>
			{props.children}
		</DoctorsContext.Provider>
	);
};

export default DoctorsProvider;
