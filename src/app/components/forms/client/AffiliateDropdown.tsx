import React, { useState, useEffect, useContext } from 'react';
import { Field } from 'formik';
import classNames from 'classnames';

import { AffiliateTypes } from '../../../../models';
import { RelationsContext } from '../../../context/relations-context';

import styles from './ClientForm.module.css';

interface IAffiliateDropdown {
	setUntrackedValues: React.Dispatch<
		React.SetStateAction<{
			idCard: boolean;
			bornDate: string;
			actualInsurance: string;
			affiliateType: string;
		}>
	>;
	untrackedValues: {
		idCard: boolean;
		bornDate: string;
		actualInsurance: string;
		affiliateType: string;
	};
	updatingStatus: boolean;
}

const AffiliateDropdown: React.FC<IAffiliateDropdown> = ({
	setUntrackedValues,
	untrackedValues,
	updatingStatus,
}) => {
	const [optionSelected, SetOptionSelected] = useState({ name: 'Ej: Principal' });
	const [toggleInput, SetToggleInput] = useState(false);

	const { actualInsurance } = useContext(RelationsContext);

	const handleDropDown = () => {
		SetToggleInput(false);
	};

	const handleSelectAction = (data: string): void => {
		SetOptionSelected({ name: data });
		setUntrackedValues({
			...untrackedValues,
			affiliateType: data,
		});
		handleDropDown();
	};

	function capitalizeFirstLetter(string: string) {
		return string[0].toUpperCase() + string.slice(1);
	}

	useEffect(() => {
		if (updatingStatus && actualInsurance) {
			SetOptionSelected({
				name: actualInsurance.affiliateType,
			});
		}
	}, []);

	return (
		<div>
			<div className="">
				<div>
					<div className="bg-white-lilac flex items-center justify-between border-2 border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default">
						<div className="flex justify-center items-center w-32">
							<Field
								type="text"
								name="affiliateType"
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
			</div>
			<div className=" z-10">
				{toggleInput ? (
					<div className="w-56 max-h-60 absolute rounded-lg border-2 border-harp-default insurance_container bg-greyWhite-default pl-4 pr-2 pb-4 pt-4 mt-1.5 overflow-x-hidden overflow-y-scroll">
						<button
							className="flex items-center w-full justify-between hover:bg-white-section pl-3.5 h-11 flex items-centers rounded-lg"
							onClick={() => handleSelectAction(AffiliateTypes.PRINCIPAL)}
						>
							{capitalizeFirstLetter(AffiliateTypes.PRINCIPAL.toLowerCase())}
						</button>
						<button
							className="flex items-center w-full justify-between hover:bg-white-section pl-3.5 h-11 flex items-centers rounded-lg"
							onClick={() => handleSelectAction(AffiliateTypes.TITULAR)}
						>
							{capitalizeFirstLetter(AffiliateTypes.TITULAR.toLowerCase())}
						</button>
						<button
							className="flex items-center w-full justify-between hover:bg-white-section pl-3.5 h-11 flex items-centers rounded-lg"
							onClick={() => handleSelectAction(AffiliateTypes.DEPENDIENTE)}
						>
							{capitalizeFirstLetter(AffiliateTypes.DEPENDIENTE.toLowerCase())}
						</button>
						<button
							className="flex items-center w-full justify-between hover:bg-white-section pl-3.5 h-11 flex items-centers rounded-lg"
							onClick={() => handleSelectAction(AffiliateTypes.PARENTESCO)}
						>
							{capitalizeFirstLetter(AffiliateTypes.PARENTESCO.toLowerCase())}
						</button>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default AffiliateDropdown;
