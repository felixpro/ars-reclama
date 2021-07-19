import React, { useState } from 'react';

interface IDropDown {
	setDropdownValue: () => void;
	options: [];
	inputName: string;
	placeholder: string;
	customWidth: string;
	setdropdownIconValue: () => void;
	effectFunction: () => void;
}

const Dropdown: React.FC<IDropDown> = ({
	setDropdownValue,
	inputName,
	options,
	placeholder,
	customWidth,
}) => {
	const [optionSelected, SetOptionSelected] = useState({ name: '' });
	const [toggleInput, SetToggleInput] = useState(false);

	const handleDropDown = () => {
		SetToggleInput(false);
	};

	const handleSelectAction = (data: string): void => {
		SetOptionSelected({ name: data });
		setDropdownValue(data);

		handleDropDown();
	};

	return (
		<div>
			<div
				tab-index="0"
				onBlur={() => {
					setTimeout(function () {
						handleDropDown();
					}, 400);
				}}
			>
				<div className="bg-white-lilac flex items-center justify-between border-2 border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default">
					<div className="flex justify-center items-center w-32">
						<input
							type="text"
							name={inputName}
							value={optionSelected.name}
							placeholder={placeholder}
							className=" w-40 absolute h-14 ml-6 pr-11 input_insurance text-center"
							onClick={() => SetToggleInput(toggleInput ? false : true)}
							onChange={() => null}
						/>
					</div>
					<div className="w-8 h-14 flex justify-center items-center bo ">
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
			<div className=" z-10">
				{toggleInput ? (
					<div className=" max-h-60 absolute rounded-lg border-2 border-harp-default bg-greyWhite-default pl-4 pr-4 pb-4 pt-4 mt-1.5 overflow-x-hidden overflow-y-scroll insurance_container ">
						{options.map((option) => (
							<div key={option.id}>
								<button
									className={`${customWidth} flex items-center justify-between hover:bg-white-section pl-3.5 pr-3.5 h-11 flex items-centers rounded-lg`}
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

export default Dropdown;
