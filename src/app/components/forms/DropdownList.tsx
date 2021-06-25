import React, { useState } from 'react';
import { Insurance } from '../../../models';

type IDropdownList = {
	data: {
		label: string;
		id: string;
	};
};

const options = [
	{ name: 'felix Pujols' },
	{ name: 'Lucaes Daniel' },
	{ name: 'Luaqcas Daniel' },
	{ name: 'Lubcas Daniel' },
	{ name: 'Lucas Daniel' },
	{ name: 'Luccas Danytiel' },
	{ name: 'felix Pu6jols' },
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

	return (
		<div>
			<div className="">
				<div>
					<div className="border-2 border-green-content flex items-center justify-between rounded-lg w-44 h-14   text-base OpenSansRegular text-black-default">
						<div className="flex justify-center items-center w-32">
							<input
								type="text"
								name="insuranceSelected"
								value={optionSelected.name}
								className=" w-40 absolute h-14 ml-6 pr-11 input_insurance text-center"
								onClick={() => SetToggleInput(toggleInput ? false : true)}
								onBlur={() => {
									setTimeout(function () {
										handleDropDown();
									}, 400);
								}}
								onChange={() => null}
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
				</div>
			</div>
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
	);
};

export default DropdownList;
