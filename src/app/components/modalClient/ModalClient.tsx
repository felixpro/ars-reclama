import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import ClientForm from '../forms/client/ClientForm';

const ModalClient = ({ modalState, setModalState, updatingStatus }) => {
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
				<ClientForm onCloseModal={onCloseModal} updatingStatus={updatingStatus} />
			</Modal>
		</div>
	);
};

export default ModalClient;
