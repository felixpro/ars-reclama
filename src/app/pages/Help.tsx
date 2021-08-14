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
      <br/>
			<button
				onClick={() => updateActualClientInsurance('00ef6ac3-1f05-4052-97bf-37ad483007d1')}
			>
				Dale click a un cliente
			</button>
		</div>
	);
};

export default Help;
