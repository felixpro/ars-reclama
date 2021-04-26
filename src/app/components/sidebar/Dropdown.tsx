import React, { useState, useEffect, useContext } from 'react';
import { HospitalsContext } from '../../context/hospital-context';
import { DoctorsContext } from '../../context/doctor-context';

const loggedUser = {
	doctor: true,
};

interface IactualOption {
	name: string;
}

interface typeOption {
	name: string;
}
type ItypeOption = typeOption[];

const Dropdown = () => {
	const [actualOption, setActualOption] = useState<IactualOption>([]);
	const [options, setOptions] = useState<ItypeOption>([]);
	const HospitalsArray = useContext(HospitalsContext).hospitals;
	const DoctorsArray = useContext(DoctorsContext).doctors;

	useEffect(() => {
		// Validate logged user
		if (loggedUser.doctor === false) {
			setActualOption(DoctorsArray[0]);
			setOptions(DoctorsArray);
		} else {
			setActualOption(HospitalsArray[0]);
			setOptions(HospitalsArray);
		}
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();
		setActualOption({ name: (e.target as HTMLInputElement).value });

		// update context with new value
	};

	return (
		<div>
			<select value={actualOption.name} onChange={(e) => handleChange(e)}>
				{options.map((option) => {
					return (
						<option key={option.name} value={option.name}>
							{option.name}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Dropdown;
