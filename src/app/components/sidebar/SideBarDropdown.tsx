import React, { useState, useEffect, useContext } from 'react';
import { HospitalsContext } from '../../context/hospital-context';
import { DoctorsContext } from '../../context/doctor-context';

import checked from '../../../assets/images/active_check.svg';
import check from '../../../assets/images/check.svg';

const SideBarDropdown = () => {
	const [optionSelected, SetOptionSelected] = useState({ name: 'Seleccionar...', id: '' });
	const [toggleInput, SetToggleInput] = useState(false);

	const { doctors, actualDoctor, fetchDoctors, setActualDoctor } = useContext(DoctorsContext);

	const handleDropDown = () => {
		SetToggleInput(false);
	};

	const handleSelectAction = (data: string, id: string): void => {
		const doctorSelected = doctors.filter((doctor) => doctor.id === optionSelected.id);
		handleDropDown();
		SetOptionSelected({ name: data, id: id });
		console.log('doctorSelected', doctorSelected[0]);

	};

	useEffect(() => {
		fetchDoctors();
	}, []);

	return (
		<div className="SideBarDropdown">
			<div
				tab-index="0"
				onBlur={() => {
					setTimeout(function () {
						SetToggleInput(false);
					}, 400);
				}}
			>
				<div className=" flex justify-center ">
					<div>
						<div className=" flex justify-between w-44 bg-white-lilac border-2	border-azulMarino-default rounded-lg h-9 pl-4 pr-3.5 text-base OpenSansRegular text-osloGray-default relative top-14 z-20 ">
							<div className="flex justify-center items-center">
								<input
									type="text"
									name="insuranceSelected"
									value={optionSelected.name}
									className="raleway-font font-bold text-azulMarino-default w-40 absolute h-9 ml-16 pl-4 pr-6 input_insurance "
									onClick={() => SetToggleInput(toggleInput ? false : true)}
								/>
							</div>

							<div className="flex items-center pt-1">
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
				<div className="flex justify-center">
					{toggleInput ? (
						<div className="w-48 z-10 absolute rounded-lg pl-4 pr-4 pb-4 pt-16 mt-1.5 bg-white-section shadow-sm drop-button-container">
							{doctors &&
								doctors.map((option) => (
									<div key={option.id}>
										<button
											className="flex items-center w-full  hover:bg-white-section pl-3.5 h-11 flex items-centers rounded-lg"
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

export default SideBarDropdown;
