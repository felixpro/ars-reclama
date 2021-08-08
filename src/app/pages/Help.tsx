import React, { useState } from 'react';
import ModalClient from '../components/modalClient/ModalClient';

const Help = () => {
	const [modalState, setModalState] = useState(false);

	return (
		<div>
			<button className="" onClick={() => setModalState(true)}>
				edit
			</button>
			<ModalClient modalState={modalState} setModalState={setModalState} updateClient={true} />
		</div>
	);
};

export default Help;
