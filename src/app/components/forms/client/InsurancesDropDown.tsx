import React, { useState, useEffect, useContext } from 'react';
import { DataStore } from '@aws-amplify/datastore';

import onClickOutside from 'react-onclickoutside';
import { Field, ErrorMessage } from 'formik';

import { Insurance } from '../../../../models';
import { RelationsContext } from '../../../context/relations-context';

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

const InsurancesDropDown = ({ setUntrackedValues, untrackedValues, updatingStatus, SetFormsValues, formsValues }) => {
	const { actualClient, actualInsurance, updateActualClientInsurance } = useContext(RelationsContext);

	const [optionSelected, SetOptionSelected] = useState({ name: 'Sin seguro' });
	const [toggleInput, SetToggleInput] = useState(false);

	const handleDropDown = () => {
		SetToggleInput(false);
	};

	const handleSelectAction = async (data: string): void => {
		SetOptionSelected({ name: data });
		handleDropDown();
	};

	useEffect( () => {
		(async () => {
			if (actualClient && updatingStatus) {

			const insurance = await DataStore.query(Insurance, (Ins) =>
				Ins.clientID('contains', actualClient.id).name('contains', optionSelected.name)
			);
			const dropdownInsurance = insurance[0];

			console.log("Actualizar inpust con este insurane", [dropdownInsurance])

			SetFormsValues({
				...formsValues,
				contractNumber: dropdownInsurance? dropdownInsurance.contractNumber : '',
				affiliateNumber: dropdownInsurance? dropdownInsurance.affiliateNumber : '',
			})

			// analizar si, la selecion no es sinCLiente.
			setUntrackedValues({
				...untrackedValues,
				actualInsurance: dropdownInsurance? dropdownInsurance.name : optionSelected.name,
				affiliateType: dropdownInsurance? dropdownInsurance.affiliateType : 'Ej: Principal',
			});
		} else {
			setUntrackedValues({
				...untrackedValues,
				actualInsurance: optionSelected.name,
			});

		}
		})();
	}, [optionSelected]);

	useEffect(() => {
		(async () => {
			if (actualClient && updatingStatus) {
				updateActualClientInsurance(actualClient.id);
				handleSelectAction(actualInsurance ? actualInsurance.name : 'Sin seguro');
			}
		})();
	}, []);

	InsurancesDropDown.handleClickOutside = () => SetToggleInput(false);

	return (
		<div>
			<div className="">
				<div>
					<div className="border-2 border-green-content flex items-center justify-between rounded-lg w-44 h-14   text-base OpenSansRegular text-black-default">
						<div className="flex justify-center items-center w-32">
							<Field
								type="text"
								name="actualInsurance"
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
						<ErrorMessage name="actualInsurance" />
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
	handleClickOutside: () => InsurancesDropDown.handleClickOutside,
};

export default onClickOutside(InsurancesDropDown, clickOutsideConfig);
