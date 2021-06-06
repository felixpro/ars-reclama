import React, { useState } from 'react';
import { WaitingList, WaitingListItem, Client, HealthInsurance } from '../../models';
import { WaitingListItemType } from '../context/types';
import { DataStore } from '@aws-amplify/datastore';

interface WaitingListContextProps {
	waitingListItems: WaitingListItemType[];
	getWaitingListItemsByWaitingListId: (waitingListId: string) => void;
}

export const WaitingListsContext = React.createContext<WaitingListContextProps>({
	waitingListItems: [],
	getWaitingListItemsByWaitingListId: () => null,
});

const ContextProvider: React.FC = (props) => {
	const [waitingListItems, setWaitingListItems] = useState<WaitingListItemType[]>([]);

	const getWaitingListItemsByWaitingListId = async (waitingListId: string) => {
		try {
			const waitingItems = (await DataStore.query(WaitingListItem)).filter(
				(wi) => wi.waitingListID === waitingListId
			);
			waitingItems.forEach(async (waitingItem) => {
				const client = await DataStore.query(Client, waitingItem.clientID);
				const healthInsurance = client
					? await DataStore.query(HealthInsurance, client.healthInsuranceId)
					: null;
				if (healthInsurance && client) {
					const transformedWaitingItem: WaitingListItemType = {
						id: waitingItem.id,
						status: waitingItem.status,
						positionNumber: waitingItem.positionNumber,
						clientHealthInsurrance: healthInsurance.name,
						clientName: client.name,
					};
					console.log('transformedWaitingItem', transformedWaitingItem);
					console.log('waitingListItems', waitingListItems);
					setWaitingListItems((waitingItems) =>
						waitingItems.concat(transformedWaitingItem)
					);
				}
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<WaitingListsContext.Provider
			value={{
				waitingListItems: waitingListItems,
				getWaitingListItemsByWaitingListId: getWaitingListItemsByWaitingListId,
			}}
		>
			{props.children}
		</WaitingListsContext.Provider>
	);
};

export default ContextProvider;
