import React, { useState, useContext } from 'react';
import ModalClient from '../components/modalClient/ModalClient';
import { RelationsContext } from '../context/relations-context';

const Help = () => {
	const { setActualClientInsurance } = useContext(RelationsContext);

	const [modalState, setModalState] = useState(false);

	return (
		<div>
			<button className="" onClick={() => setModalState(true)}>
				edit
			</button>
			<ModalClient
				modalState={modalState}
				setModalState={setModalState}
				updatingStatus={true}
			/>

			<button onClick={() => setActualClientInsurance()}>Actualizar client state</button>
		</div>
	);
};

export default Help;
