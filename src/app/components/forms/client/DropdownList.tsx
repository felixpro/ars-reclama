import React, { useState, useEffect } from 'react';
import onClickOutside from 'react-onclickoutside';
import { Field, ErrorMessage } from 'formik';

const options = [
	{ name: 'Sin seguro' },
	{ name: 'ARS SENASA' },
	{ name: 'ARS UNIVERSAL' },
	{ name: 'MAPFRE SALUD' },
	{ name: 'ARS HUMANO' },
	{ name: 'ARS PALIC' },
	{ name: 'ARS RENACER' },
	{ name: 'Futuro' },
	{ name: 'APS' },
	{ name: 'ARS CMD' },
	{ name: 'ARS YUNEN' },
	{ name: 'ARS GMA' },
	{ name: 'META SALUD ARS' },
	{ name: 'ARS RESERVAS' },
];

const DropdownList = ({ SetFormsValues, formsValues }) => {
	const [optionSelected, SetOptionSelected] = useState({ name: 'Sin seguro' });
	const [toggleInput, SetToggleInput] = useState(false);

	const handleDropDown = () => {
		SetToggleInput(false);
	};

	const handleSelectAction = (data: string): void => {
		SetOptionSelected({ name: data });
		SetFormsValues({
			...formsValues,
			insuranceSelected: data,
		});
		handleDropDown();
	};

	useEffect(() => {
		SetFormsValues({
			...formsValues,
			insuranceSelected: optionSelected.name,
		});
	}, []);

	DropdownList.handleClickOutside = () => SetToggleInput(false);

	return (
		<div>
			<div className="">
				<div>
					<div className="border-2 border-green-content flex items-center justify-between rounded-lg w-44 h-14   text-base OpenSansRegular text-black-default">
						<div className="flex justify-center items-center w-32">
							<Field
								type="text"
								name="insuranceSelected"
								value={optionSelected.name}
								className=" w-40 absolute h-14 ml-6 pr-11 input_insurance text-center"
								onClick={() => SetToggleInput(toggleInput ? false : true)}
							/>
						</div>

						<div className="w-8 h-14 flex justify-center items-center border-l-2  border-green-content ">
							<svg
								width="11"
								height="7"
								viewBox="0 0 11 7"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1.59822 1.58224L5.51493 5.25879L9.43164 1.58224"
									stroke="#3F48AD"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
					<p className="text-red-default text-sm OpenSansRegular pt-1.5">
						<ErrorMessage name="insuranceSelected" />
					</p>
				</div>
			</div>
			<div className="relative right-12 z-10">
				{toggleInput ? (
					<div className="w-56 max-h-60 absolute rounded-lg border-2 border-harp-default bg-greyWhite-default pl-4 pr-4 pb-4 pt-4 mt-1.5 overflow-x-hidden overflow-y-scroll insurance_container ">
						{options.map((option) => (
							<div key={option.name}>
								<button
									className="flex items-center w-full justify-between hover:bg-white-section pl-3.5 h-11 flex items-centers rounded-lg"
									onClick={() => handleSelectAction(option.name)}
								>
									{option.name}
								</button>
							</div>
						))}
					</div>
				) : null}
			</div>
		</div>
	);
};

const clickOutsideConfig = {
	handleClickOutside: () => DropdownList.handleClickOutside,
};

export default onClickOutside(DropdownList, clickOutsideConfig);
