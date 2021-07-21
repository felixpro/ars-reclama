import { WaitingListItemStatus } from '../../models';

export type WaitingListItemType = {
	id: string;
	status: WaitingListItemStatus | keyof typeof WaitingListItemStatus;
	positionNumber: number;
	clientName: string;
	clientHealthInsurrance: string;
};

export type ClientType = {
	id: string;
	name: string;
	healthInsuranceId: string;
	healthInsurance: string;
};
