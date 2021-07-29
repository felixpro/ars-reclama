import React, { useState, useEffect } from 'react';

import checked from '../../../assets/images/active_check.svg';
import check from '../../../assets/images/check.svg';
import arroUp from '../../../assets/images/arrow_upBlue.svg';
import arroDown from '../../../assets/images/arrow_downBlue.svg';

import classnames from 'classnames';

import styles from './DropDownIcon.module.css';

interface IDropDownIcon {
	inputName: string;
	options: [];
	setdropdownIconValue: () => void;
	effectFunction: () => void;
}

const DropDownIcon: React.FC<IDropDownIcon> = ({
	inputName,
	options,
	setdropdownIconValue,
	effectFunction,
}) => {
	const [optionSelected, SetOptionSelected] = useState({ name: 'Seleccionar...', id: '' });
	const [toggleInput, setToggleInput] = useState(false);

	const handleDropDown = () => {
		setToggleInput(false);
	};

	const handleSelectAction = (data: string, id: string): void => {
		const doctorSelected = options.filter((option) => option.id === optionSelected.id);
		SetOptionSelected({ name: data, id: id });
		setdropdownIconValue(doctorSelected[0]);
		handleDropDown();
	};

	useEffect(() => {
		setdropdownIconValue(optionSelected);
	}, [optionSelected]);

	useEffect(() => {
		effectFunction();
	}, []);

	return (
		<div className="SideBarDropdown">
			<div
				tab-index="0"
				onBlur={() => {
					setTimeout(function () {
						setToggleInput(false);
					}, 400);
				}}
				onChange={() => null}
			>
				<div className=" flex justify-center ">
					<div>
						<div className=" flex justify-between w-44 bg-white-lilac border-2	border-azulMarino-default rounded-lg h-9 pl-4 pr-3.5 text-base OpenSansRegular text-osloGray-default relative top-14 z-20 ">
							<div className="flex justify-center items-center">
								<input
									type="text"
									name={inputName}
									value={optionSelected.name}
									className="raleway-font font-bold text-azulMarino-default w-40 absolute h-9 ml-16 pl-4 pr-6 input_insurance "
									onClick={() => setToggleInput(toggleInput ? true : true)}
									onChange={() => null}
								/>
							</div>
							<div className="flex items-center ">
								<img src={toggleInput ? arroUp : arroDown} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					{toggleInput ? (
						<div className="w-48 z-10 absolute rounded-lg pl-4 pr-4 pb-4 pt-16 mt-1.5 bg-white-section shadow-sm drop-button-container">
							{options &&
								options.map((option) => (
									<div key={option.id}>
										<button
											className={classnames(
												' flex items-center w-full  hover:bg-white-section pl-3.5 h-11 flex items-centers rounded-lg',
												styles.dialog
											)}
											onClick={() =>
												handleSelectAction(option.name, option.id)
											}
										>
											<img
												src={
													optionSelected.id === option.id
														? checked
														: check
												}
												alt=""
												className="mr-5"
											/>
											{option.name}
										</button>
									</div>
								))}
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default DropDownIcon;
