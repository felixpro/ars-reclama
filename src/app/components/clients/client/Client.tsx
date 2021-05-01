import React from 'react';
import { Client } from '../../../../models';

interface ClientProps {
	image: string;
	name: string;
	bloodType: string;
	onEdit: (client: Client) => void;
	onSend: (client: Client) => void;
}

const ClientFC: React.FC<ClientProps> = (props) => {
	return (
		<div>
			<img alt="" src={props.image} />
		</div>
	);
};

export default ClientFC;
