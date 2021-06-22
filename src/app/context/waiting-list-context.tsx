import React, { useState } from 'react';
import { WaitingListItem, Client, HealthInsurance, WaitingListItemStatus } from '../../models';
import { WaitingListItemType } from '../context/types';
import { DataStore } from '@aws-amplify/datastore';

interface WaitingListContextProps {
	waitingListItems: WaitingListItemType[];
	getWaitingListItemsByWaitingListId: (waitingListId: string, clientFilter?: string) => void;
	addClientToCurrentWaitingList: (client: Client) => void;
	updateWaitingListItemStatus: (
		waitingListItemID: string,
		status: keyof typeof WaitingListItemStatus
	) => void;
}

export const WaitingListsContext = React.createContext<WaitingListContextProps>({
	waitingListItems: [],
	getWaitingListItemsByWaitingListId: () => null,
	addClientToCurrentWaitingList: () => null,
	updateWaitingListItemStatus: () => null,
});

const ContextProvider: React.FC = (props) => {
	const [waitingListItems, setWaitingListItems] = useState<WaitingListItemType[]>([]);

	const getWaitingListItemsByWaitingListId = async (
		waitingListId: string,
		clientFilter?: string
	) => {
		try {
			const waitingItems = (await DataStore.query(WaitingListItem)).filter(
				(wi) => wi.waitingListID === waitingListId
			);
			setWaitingListItems([]);
			waitingItems.forEach(async (waitingItem) => {
				const client = await DataStore.query(Client, waitingItem.clientID);
				const healthInsurance = client
					? await DataStore.query(HealthInsurance, client.healthInsuranceId)
					: null;
				if (healthInsurance && client) {
					if (
						clientFilter &&
						!client.name?.toLowerCase().includes(clientFilter.toLocaleLowerCase())
					) {
						return;
					}
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

	const addClientToCurrentWaitingList = async (client: Client) => {
		const waitingItems = (await DataStore.query(WaitingListItem)).filter(
			(wi) => wi.waitingListID === '6a289135-e536-4aec-84b4-9cb495d46094'
		);
		const newWaitingItem = new WaitingListItem({
			waitingListID: '6a289135-e536-4aec-84b4-9cb495d46094',
			clientID: client.id,
			status: 'ESPERA',
			positionNumber: waitingItems.length + 1,
		});
		await DataStore.save(newWaitingItem);
		const clientHealthInsurance = await DataStore.query(
			HealthInsurance,
			client.healthInsuranceId
		);
		const transformedWaitingItem: WaitingListItemType = {
			id: newWaitingItem.id,
			status: newWaitingItem.status,
			positionNumber: newWaitingItem.positionNumber,
			clientHealthInsurrance: clientHealthInsurance ? clientHealthInsurance.name : '',
			clientName: client.name,
		};
		setWaitingListItems((waitingItems) => waitingItems.concat(transformedWaitingItem));
	};

	const updateWaitingListItemStatus = async (
		waitingListItemID: string,
		status: keyof typeof WaitingListItemStatus
	) => {
		const newWaitingItems = waitingListItems.map((item) => {
			if (item.id !== waitingListItemID) {
				return item;
			}

			return {
				...item,
				status: status,
			};
		});
		setWaitingListItems(newWaitingItems);
	};

	return (
		<WaitingListsContext.Provider
			value={{
				waitingListItems: waitingListItems,
				getWaitingListItemsByWaitingListId: getWaitingListItemsByWaitingListId,
				addClientToCurrentWaitingList: addClientToCurrentWaitingList,
				updateWaitingListItemStatus: updateWaitingListItemStatus,
			}}
		>
			{props.children}
		</WaitingListsContext.Provider>
	);
};

export default ContextProvider;
