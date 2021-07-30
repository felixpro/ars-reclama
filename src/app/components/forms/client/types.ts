import { SexType } from '../../../../models';
import { Client } from '../../../../models';

export interface IclientForm {
	onCloseModal: boolean;
	existingClient: Client | false;
}

export interface Iclient {
	identificationName: string;
	identificationData: string;
	name: string;
	cellphoneNumber: string;
	email: string;
	addressStreet: string;
	bloodType: undefined;
	bornDate: string;
	city: string;
	company: string;
	gender: SexType;
	id: string;
	phoneNumber: string;
	sector: string;
}

export interface IModalClientForm {
	existingClient: Client | false;
}
