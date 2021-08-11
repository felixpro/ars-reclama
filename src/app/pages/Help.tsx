import React, { useState, useContext } from 'react';
import ModalClient from '../components/modalClient/ModalClient';
import { RelationsContext } from '../context/relations-context';

const Help = () => {
	const { updateActualClientInsurance } = useContext(RelationsContext);

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

			<button
				onClick={() => updateActualClientInsurance('6fbea533-e136-4e5f-8774-beed3b152e47')}
			>
				Actualizar client state
			</button>
		</div>
	);
};

export default Help;
