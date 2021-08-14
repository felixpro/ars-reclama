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
				onClick={() => updateActualClientInsurance('f5d1a879-522d-456e-84e2-50f306a4113f')}
			>
				Actualizar client state
			</button>
		</div>
	);
};

export default Help;
