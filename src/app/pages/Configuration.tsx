import React, { useContext } from 'react';
import { DoctorsContext } from '../context/doctor-context';
import { HospitalsContext } from '../context/hospital-context';
import { RelationsContext } from '../context/relations-context';

const Configuration = () => {
	const { createDoctor, actualDoctor } = useContext(DoctorsContext);
	const { createHospital, actualHospital } = useContext(HospitalsContext);
	const { createHospitalDoctor } = useContext(RelationsContext);


	return (
		<div>
			<button onClick={() => createHospital()}>Create hospital</button>
			<br />
			<br />
			<br />
			<button onClick={() => createDoctor()}>Create Doctor</button>
			<br />
			<br />
			<br />
			<button onClick={() => createHospitalDoctor()}>
				Create relation HospitalDoctor
			</button>
		</div>
	);
};

export default Configuration;
