import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import ClientForm from '../forms/client/ClientForm';

const ModalClient = ({ modalState, setModalState, updateClient }) => {
	const onCloseModal = () => setModalState(false);
	return (
		<div className="">
			<Modal
				open={modalState}
				onClose={onCloseModal}
				center
				classNames={{
					overlay: 'customOverlay',
					modal: 'customModal',
				}}
			>
				<ClientForm onCloseModal={onCloseModal} updateClient={updateClient} />
			</Modal>
		</div>
	);
};

export default ModalClient;
