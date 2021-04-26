import React from 'react';
import { Doctor } from '../../models';

interface DoctorContextProps {
	doctors: Doctor[];
}

// Create interface for hospital object
const doctorsData = [
	{ name: 'Gustavo mejia', id: '0' },
	{ name: 'Felix Pujols', id: '1' },
	{ name: 'Juan de la cruz', id: '2' },
	{ name: 'Lucas bandorti', id: '3' },
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
