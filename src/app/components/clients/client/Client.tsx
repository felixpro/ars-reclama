import React from 'react';
import editIcon from '../../../../assets/images/icono_editar.svg';
import shareIcon from '../../../../assets/images/icono_compartir.svg';
import { ClientType } from '../../../context/types';

interface ClientProps {
	image?: string;
	client: ClientType;
	onEdit: (client: ClientType) => void;
	onSend: (client: ClientType) => void;
}

const ClientFC: React.FC<ClientProps> = (props) => {
	return (
		<>
			<div className="section-cell" style={{ borderBottomColor: '#EDF3F1' }}>
				<img alt="" src={props.image} className="mr-6" />
				<div className="flex flex-col w-56">
					<span style={{ fontFamily: 'Raleway-Bold', fontSize: '16px' }}>
						{props.client.name}
					</span>
					<span
						className=" whitespace-nowrap"
						style={{
							fontFamily: 'Raleway-Regular',
							fontSize: '14px',
							opacity: '59.15%',
						}}
					>
						{props.client.healthInsurance}
					</span>
				</div>
				<img alt="" src={editIcon} className="mr-8" />
				<button></button>
				<input
					type="image"
					alt=""
					src={shareIcon}
					onClick={() => props.onSend.apply(null, [props.client])}
				/>
			</div>
			<div className="border-b-2 ml-9" style={{ borderBottomColor: '#EDF3F1' }} />
		</>
	);
};

export default ClientFC;
