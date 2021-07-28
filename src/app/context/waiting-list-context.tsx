import React, { useState, useContext } from 'react';
import { WaitingListItem, WaitList, Client, HealthInsurance, WaitingListItemStatus } from '../../models';
import { WaitingListItemType } from '../context/types';
import { DataStore } from '@aws-amplify/datastore';
import { RelationsContext } from './relations-context';
import { getDateString } from '../shared/dateUtils';

interface WaitingListContextProps {
	waitingListItems: WaitingListItemType[];
	getWaitingListItems: (clientFilter?: string) => void;
	addClientToCurrentWaitingList: (client: Client) => void;
	updateWaitingListItemStatus: (
		waitingListItemID: string,
		status: keyof typeof WaitingListItemStatus
	) => void;
	updateWaitingItemPositionNumber: (waitingListItemID: string, newPositionNumber: number) => void;
	upsertCurrentWaitingList: () => void;
}

export const WaitingListsContext = React.createContext<Partial<WaitingListContextProps>>({});

const ContextProvider: React.FC = (props) => {
	const [waitingListItems, setWaitingListItems] = useState<WaitingListItemType[]>([]);
	const [actualWaitingList, setActualWaitingList] = useState<WaitList>();
	const relationsContext = useContext(RelationsContext);

	const getWaitingListItems = async (
		clientFilter?: string
	) => {
		try {
			const waitingItems = (await DataStore.query(WaitingListItem)).filter(
				(wi) => wi.waitingListID === actualWaitingList?.id
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
		if (!actualWaitingList) return;
		const waitingItems = (await DataStore.query(WaitingListItem)).filter(
			(wi) => wi.waitingListID === actualWaitingList.id
		);
		const newWaitingItem = new WaitingListItem({
			waitingListID: actualWaitingList.id,
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
		const waitingListItem = await DataStore.query(WaitingListItem, waitingListItemID);
		if (waitingListItem) {
			await DataStore.save(
				WaitingListItem.copyOf(waitingListItem, (updated) => {
					updated.status = status;
				})
			);

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
		}
	};

	const updateWaitingItemPositionNumber = async (
		waitingListItemID: string,
		newPositionNumber: number
	) => {
		const waitingListItem = await DataStore.query(WaitingListItem, waitingListItemID);
		const currentItemWithPosition = waitingListItems.filter(
			(wi) => wi.positionNumber === newPositionNumber
		)[0];
		if (waitingListItem) {
			if (newPositionNumber < waitingListItem.positionNumber) {
				const newWaitingItems = waitingListItems.map((item) => {
					if (
						item.positionNumber >= newPositionNumber &&
						item.positionNumber < waitingListItem.positionNumber
					) {
						DataStore.query(WaitingListItem, item.id).then((itemToUpdate) => {
							if (itemToUpdate) {
								DataStore.save(
									WaitingListItem.copyOf(itemToUpdate, (updated) => {
										updated.positionNumber = item.positionNumber + 1;
									})
								);
							}
						});
						return {
							...item,
							positionNumber: item.positionNumber + 1,
						};
					}

					if (item.id === waitingListItemID) {
						DataStore.query(WaitingListItem, item.id).then((itemToUpdate) => {
							if (itemToUpdate) {
								DataStore.save(
									WaitingListItem.copyOf(itemToUpdate, (updated) => {
										(updated.positionNumber = newPositionNumber),
											(updated.status =
												currentItemWithPosition.status !== item.status
													? currentItemWithPosition.status
													: item.status);
									})
								);
							}
						});

						return {
							...item,
							positionNumber: newPositionNumber,
							status:
								currentItemWithPosition.status !== item.status
									? currentItemWithPosition.status
									: item.status,
						};
					}

					return item;
				});
				setWaitingListItems(newWaitingItems);
			}

			if (newPositionNumber > waitingListItem.positionNumber) {
				const newWaitingItems = waitingListItems.map((item) => {
					if (
						item.positionNumber > waitingListItem.positionNumber &&
						item.positionNumber <= newPositionNumber
					) {
						DataStore.query(WaitingListItem, item.id).then((itemToUpdate) => {
							if (itemToUpdate) {
								DataStore.save(
									WaitingListItem.copyOf(itemToUpdate, (updated) => {
										(updated.positionNumber = item.positionNumber - 1),
											(updated.status =
												currentItemWithPosition.status !== item.status
													? currentItemWithPosition.status
													: item.status);
									})
								);
							}
						});
						return {
							...item,
							positionNumber: item.positionNumber - 1,
						};
					}

					if (item.id === waitingListItemID) {
						DataStore.query(WaitingListItem, item.id).then((itemToUpdate) => {
							if (itemToUpdate) {
								DataStore.save(
									WaitingListItem.copyOf(itemToUpdate, (updated) => {
										updated.positionNumber = newPositionNumber;
									})
								);
							}
						});
						return {
							...item,
							positionNumber: newPositionNumber,
							status:
								currentItemWithPosition.status !== item.status
									? currentItemWithPosition.status
									: item.status,
						};
					}

					return item;
				});
				setWaitingListItems(newWaitingItems);
			}
		}
	};

	const upsertCurrentWaitingList = async () => {
		if (relationsContext.actualHospitalDoctor) {
			const currentWaitingList = await DataStore.query(WaitList, relationsContext.actualHospitalDoctor.lastWaitingListID);
			if (currentWaitingList && currentWaitingList.createdAt === getDateString(new Date())) {
				setActualWaitingList(currentWaitingList);
			} else {
				const newWaitingList = await DataStore.save(
					new WaitList({
						hospitalDoctorID: relationsContext.actualHospitalDoctor.id,
						createdAt: getDateString(new Date())
					})
				);
				setActualWaitingList(newWaitingList);
			}
		}
	}

	return (
		<WaitingListsContext.Provider
			value={{
				waitingListItems: waitingListItems,
				getWaitingListItems: getWaitingListItems,
				addClientToCurrentWaitingList: addClientToCurrentWaitingList,
				updateWaitingListItemStatus: updateWaitingListItemStatus,
				updateWaitingItemPositionNumber: updateWaitingItemPositionNumber,
				upsertCurrentWaitingList: upsertCurrentWaitingList
			}}
		>
			{props.children}
		</WaitingListsContext.Provider>
	);
};

export default ContextProvider;
