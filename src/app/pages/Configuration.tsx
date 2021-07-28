import React, { useContext } from 'react';
import { DoctorsContext } from '../context/doctor-context';
import { HospitalsContext } from '../context/hospital-context';
import { RelationsContext } from '../context/relations-context';
import { WaitingListsContext } from '../context/waiting-list-context';
import { DataStore } from '@aws-amplify/datastore';
import { HospitalDoctor } from '../../models';

const Configuration = () => {
	const { createDoctor, actualDoctor } = useContext(DoctorsContext);
	const { createHospital, actualHospital } = useContext(HospitalsContext);
	const { createHospitalDoctor, setActualHospitalDoctor } = useContext(RelationsContext);
	const { upsertCurrentWaitingList } = useContext(WaitingListsContext);

	const handleLogin = async () => {
		const firstHospitalDoctor = (await DataStore.query(HospitalDoctor))[0];
		setActualHospitalDoctor(firstHospitalDoctor);
		upsertCurrentWaitingList();
	}

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
			<button onClick={() => createHospitalDoctor()}>Create relation HospitalDoctor</button>
			<br />
			<br />
			<br />
			<button onClick={() => handleLogin()}>Login (First Hospital Doctor)</button>
		</div>
	);
};

export default Configuration;
