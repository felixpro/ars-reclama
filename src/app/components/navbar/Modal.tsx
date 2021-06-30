import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import ClientForm from '../forms/client/ClientForm';

const ModalView = () => {
	const [open, setOpen] = useState(true);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);
	return (
		<div className="modal_clientForm_container">
			<button
				className="raleway-font font-medium newCustomer-modal-btn flex items-center justify-center w-48  rounded-xl text-white-section pt-3 pb-3 mr-6 "
				onClick={onOpenModal}
			>
				<svg width="17" height="17" className="fill-current mr-2.5">
					<path d="M1.98145 9.99072H6.72754V14.7466C6.72754 15.6548 7.46973 16.397 8.3877 16.397C9.30566 16.397 10.0479 15.6548 10.0479 14.7466V9.99072H14.7939C15.7021 9.99072 16.4443 9.2583 16.4443 8.34033C16.4443 7.42236 15.7021 6.68018 14.7939 6.68018H10.0479V1.93408C10.0479 1.01611 9.30566 0.273926 8.3877 0.273926C7.46973 0.273926 6.72754 1.01611 6.72754 1.93408V6.68018H1.98145C1.06348 6.68018 0.321289 7.42236 0.321289 8.34033C0.321289 9.2583 1.06348 9.99072 1.98145 9.99072Z" />
				</svg>
				NUEVO CLIENTE
			</button>
			<Modal
				open={open}
				onClose={onCloseModal}
				center
				classNames={{
					overlay: 'customOverlay',
					modal: 'customModal',
				}}
			>
				<ClientForm onCloseModal={onCloseModal} />
			</Modal>
		</div>
	);
};

export default ModalView;
