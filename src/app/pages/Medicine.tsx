import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import DropDownIcon from '../components/DropDownIcon';

const options = [
	{ id: 45764, name: 'Felix Pujols', insurance: '402-263-6462-4' },
	{ id: 45864, name: 'Javi Rudoz', insurance: '268-998-789-2' },
	{ id: 45654, name: 'Denis  Lutors', insurance: '458-9847-4' },
	{ id: 45264, name: 'Rauld mendez', insurance: '235-5865-6' },
	{ id: 45614, name: 'Lucas Deibi ', insurance: '402-263-65462-4' },
	{ id: 45064, name: 'Randy Duffer ', insurance: '486-998-789-2' },
	{ id: 4564, name: 'Perris Chan', insurance: '268-947-4' },
	{ id: 46564, name: 'Brandis Do', insurance: '285-5865-6' },
];

function Medicine({ handlePath }) {
	const [dropdownValue, setDropdownValue] = useState();

	const [dropdownIconValue, setdropdownIconValue] = useState();

	return (
		<div>
			<button onClick={() => handlePath(null, 'Lucas Jhon')}>add client path</button>
			<h1>Medicine</h1>
			<br />
			<br />

			<Dropdown
				inputName="name"
				placeholder="Seleccionar.."
				options={options}
				customWidth="w-48"
				setDropdownValue={setDropdownValue}
			/>

			<DropDownIcon
				options={options}
				setdropdownIconValue={setdropdownIconValue}
				inputName="apellido"
				effectFunction={() => console.log('From the use effect')}
			/>
		</div>
	);
}

export default Medicine;
