import React, { useState, useEffect } from 'react';
import onClickOutside from 'react-onclickoutside';
import MaskedInput from 'react-text-mask';

import SearchResult from './SearchResult';
import { Field } from 'formik';

const IdInput = ({ SetFormsValues, formsValues, untrackedValues }) => {
	const [inputFocus, setInputFocus] = useState(false);
	const [keyUpQuantity, SetKeyUpQuantity] = useState(0);

	IdInput.handleClickOutside = () => setInputFocus(false);

	const passportMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
	const idMask = [
		/\d/,
		/\d/,
		/\d/,
		'-',
		/\d/,
		/\d/,
		/\d/,
		/\d/,
		/\d/,
		/\d/,
		/\d/,
		'-',
		/\d/,
	];

	const handleKeyUp = (value) => {
		SetFormsValues({
			...formsValues,
			identificationData: value,
		});

		// Removing string mask from the value
		const realQuantity = [];
		const valueArray = value.split('');
		valueArray.map((value) => {
			const letter = parseInt(value);
			if (!isNaN(letter)) {
				realQuantity.push(1);
			}
		});

		SetKeyUpQuantity(realQuantity.length);
	};

   useEffect(() => {
	   
   }, [untrackedValues.idCard])

	return (
		<div>
			<div>
				<Field
					name="identificationData"
					render={({ field }) => (
						<MaskedInput
							{...field}
							mask={untrackedValues.idCard ? idMask : passportMask}
							placeholder="Ej: 453-4847840-5"
							type="text"
							onKeyUp={(e) => handleKeyUp(e.target.value)}
							onFocus={() => setInputFocus(true)}
							className="border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default bg-white-lilac"
						/>
					)}
				/>

				{inputFocus ? (
					<SearchResult
						idInputValue={formsValues.identificationData}
						keyUpQuantity={keyUpQuantity}
					/>
				) : null}
			</div>
		</div>
	);
};

const clickOutsideConfig = {
	handleClickOutside: () => IdInput.handleClickOutside,
};

export default onClickOutside(IdInput, clickOutsideConfig);
