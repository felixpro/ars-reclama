import React from 'react';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};
const ModalView = () => {
	let subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			<button
				className="raleway-font font-medium newCustomer-modal-btn flex items-center justify-center w-48  rounded-xl text-white-section pt-3 pb-3 mr-6 "
				onClick={openModal}
			>
				<svg width="17" height="17" className="fill-current mr-2.5">
					<path d="M1.98145 9.99072H6.72754V14.7466C6.72754 15.6548 7.46973 16.397 8.3877 16.397C9.30566 16.397 10.0479 15.6548 10.0479 14.7466V9.99072H14.7939C15.7021 9.99072 16.4443 9.2583 16.4443 8.34033C16.4443 7.42236 15.7021 6.68018 14.7939 6.68018H10.0479V1.93408C10.0479 1.01611 9.30566 0.273926 8.3877 0.273926C7.46973 0.273926 6.72754 1.01611 6.72754 1.93408V6.68018H1.98145C1.06348 6.68018 0.321289 7.42236 0.321289 8.34033C0.321289 9.2583 1.06348 9.99072 1.98145 9.99072Z" />
				</svg>
				NUEVO CLIENTE
			</button>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
				ariaHideApp={false}
			>
				<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
				<button onClick={closeModal}>close</button>
				<div>I am a modal</div>
				<form>
					<input />
					<button>tab navigation</button>
					<button>stays</button>
					<button>inside</button>
					<button>the modal</button>
				</form>
			</Modal>
		</div>
	);
};

export default ModalView;
