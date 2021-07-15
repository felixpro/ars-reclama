import React, { useState } from 'react';
import { Insurance } from '../../models';

interface InsuranceContextProps {
	Insurances: Insurance[];
	createHospitals: () => Promise<void>;
	fetchHospitals: () => Promise<void>;
	deleteHospitals: () => Promise<void>;
	updateHospitals: () => Promise<void>;
}

// Create interface for Insurance object
const InsurancesData = [
	{ label: 'La trinidad', value: '0' },
	{ label: 'La altagracia', value: '1' },
	{ label: 'Los monglares', value: '2' },
	{ label: 'Los faroles', value: '3' },
];

export const InsurancesContext = React.createContext<Partial<InsuranceContextProps>>({});

const InsurancesProvider: React.FC = (props) => {
	const [insurances, setInsurances] = useState<Insurance[]>([]);

	const createInsurance = async () => {
		return null;
	};
	const fetchInsurances = async () => {
		return null;
	};
	const deleteInsurance = async () => {
		return null;
	};
	const updateInsurance = async () => {
		return null;
	};

	return (
		<InsurancesContext.Provider
			value={{
				Insurances: InsurancesData,
				createInsurance: createInsurance,
				fetchInsurances: fetchInsurances,
				deleteInsurance: deleteInsurance,
				updateInsurance: updateInsurance,
			}}
		>
			{props.children}
		</InsurancesContext.Provider>
	);
};

export default InsurancesProvider;
