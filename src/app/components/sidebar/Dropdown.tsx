import React, { useState, useEffect } from 'react';

const loggedUser = {
	doctor: true,
};

const hospitals = [
	{ name: 'La altagracia' },
	{ name: 'Villa nueva' },
	{ name: 'Los monglares' },
	{ name: 'Los faroles' },
];

const doctors = [
	{ name: 'Gustavo mejia' },
	{ name: 'Felix Pujols' },
	{ name: 'Juan de la cruz' },
	{ name: 'Lucas bandorti' },
];

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

	useEffect(() => {
		// Validate logged user
		if (loggedUser.doctor === false) {
			setActualOption(doctors[0]);
			setOptions(doctors);
		} else {
			setActualOption(hospitals[0]);
			setOptions(hospitals);
		}
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();
		// update Actual option
		setActualOption({ name: (e.target as HTMLInputElement).value });

		// update context
	};

	return (
		<div>
			<select value={actualOption.name} onBlur={(e) => handleChange(e)}>
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
