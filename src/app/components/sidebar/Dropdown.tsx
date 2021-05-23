import React, { useState, useEffect, useContext } from 'react';
import Select from 'react-dropdown-select';
import { HospitalsContext } from '../../context/hospital-context';
import { DoctorsContext } from '../../context/doctor-context';

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
	const [doctorState, SetDoctorState] = useState<boolean>(true);


	const HospitalsArray = useContext(HospitalsContext).hospitals;
	const DoctorsArray = useContext(DoctorsContext).doctors;

	useEffect(() => {
		// Validate logged user
		if (doctorState === false) {
			setActualOption(DoctorsArray[0]);
			setOptions(DoctorsArray);
		} else {
			setActualOption(HospitalsArray[0]);
			setOptions(HospitalsArray);
		}
	}, []);



	const dropdownRenderer = ({ props, state, methods }) => {
		return (
			<div className="insideDropdown ">
				{props.options.map((option) => (
					<div  key={option.value} onClick={() => { setActualOption(option) return methods.addItem(option); }} className=" flex .w-48 pt-2 pb-2">
						<label htmlFor="inputIcon"> </label>
						<input
							type="checkbox"
							onChange={() => methods.addItem(option)}
							checked={state.values.indexOf(option) !== -1}
							className="checkmark text-azulMarino-default"
							id="inputIcon"
						/>

						<span className="iconContainer"> </span>
						<p className="text-azulMarino-default raleway-font">{option.label}</p>
					</div>
				))}
				<button className="pt-5 pb-4 raleway-font font-medium text-azulMarino-default">Cerrar Session</button>
			</div>
		);
	};


	return (
		<div className="sideBard-dropdown">
			<p className="text-center raleway-font font-medium text-sm text-neutralBlack-default">
				Selecciona {doctorState ? <span> hospital</span> : <span> el doctor</span>}
			</p>
			<div className="flex justify-center pt-1" >
				<div className="w-48 drop-button-container rounded-t-lg p-2.5" >
					<Select
						className="input-select raleway-font font-medium"
						placeholder="Sin selección"
						onChange={() => undefined}
						values={[actualOption]}
						options={options}
						dropdownRenderer={dropdownRenderer}
						searchable={false}
						
					/>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
