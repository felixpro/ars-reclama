import { WaitingListItemStatus } from '../../models';

export type WaitingListItemType = {
	id: string;
	status: WaitingListItemStatus | keyof typeof WaitingListItemStatus;
	positionNumber: number;
	clientName: string;
	clientHealthInsurrance: string;
};
