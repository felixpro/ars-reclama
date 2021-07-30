import React, { FC, useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { IModalClientForm } from './types.ts';

import ClientForm from './ClientForm';

const ModalClientForm: FC<IModalClientForm> = ({ existingClient, modalStatus, setModalStatus }) => {
	const [open, setOpen] = useState(false);

	const onCloseModal = () => {
		setOpen(false);
		setModalStatus(false);
	};

	useEffect(() => {
		setOpen(modalStatus);
	}, [modalStatus]);

	return (
		<div className="modal_clientForm_container">
			<Modal
				open={open}
				onClose={onCloseModal}
				center
				classNames={{
					overlay: 'customOverlay',
					modal: 'customModal',
				}}
			>
				<ClientForm onCloseModal={onCloseModal} existingClient={existingClient} />
			</Modal>
		</div>
	);
};

export default ModalClientForm;
