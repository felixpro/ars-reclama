import React, { useContext, useEffect } from 'react';
import SearchInput from '../../components/searchInput/SearchInput';
import WaitingListItemC from './waitingListItem/WaitingListItem';
import { WaitingListsContext } from '../../context/waiting-list-context';
import { DataStore } from '@aws-amplify/datastore';
import { WaitingList, WaitingListItem } from '../../../models';

const WaitingListC = () => {
	const waitingListsContext = useContext(WaitingListsContext);

	const inProcessWaitingItems = waitingListsContext.waitingListItems.filter(
		(waitingListItem) => waitingListItem.status === 'CONSULTA'
	);
	console.log('inProcessWaitingItems', inProcessWaitingItems);
	const pendingWaitingItems = waitingListsContext.waitingListItems.filter(
		(waitingListItem) => waitingListItem.status === 'ESPERA'
	);

	const generateWaitingListTestData = async () => {
		await DataStore.save(
			new WaitingList({
				createdAt: new Date().toString(),
			})
		);
	};

	const generateWaitingItemsTestData = () => {
		DataStore.save(
			new WaitingListItem({
				waitingListID: '6a289135-e536-4aec-84b4-9cb495d46094',
				clientID: 'ac93cf93-fc8e-467d-8719-efca6308ab4a',
				status: 'CONSULTA',
				positionNumber: 1,
			})
		);
		DataStore.save(
			new WaitingListItem({
				waitingListID: '6a289135-e536-4aec-84b4-9cb495d46094',
				clientID: 'a14f73b0-9586-4e93-8844-1d2aee7b64f7',
				status: 'ESPERA',
				positionNumber: 2,
			})
		);
		DataStore.save(
			new WaitingListItem({
				waitingListID: '6a289135-e536-4aec-84b4-9cb495d46094',
				clientID: '4390521a-ae82-4814-9f5f-13733b003088',
				status: 'ESPERA',
				positionNumber: 3,
			})
		);
	};

	useEffect(() => {
		waitingListsContext.getWaitingListItemsByWaitingListId(
			'6a289135-e536-4aec-84b4-9cb495d46094'
		);
		//generateWaitingItemsTestData();
		//generateWaitingListTestData();
	}, []);

	const displayWaitingItems = (waitingItems: WaitingListItem[]) => {
		/*	return waitingItems.map((waitingList, index) => {
			const waitingItemClient = 

			return (
				<WaitingListItemC
					key={waitingList.id}
					status={waitingList.status}
					positionNumber={waitingList.positionNumber}
					clientName={waitingList.client?.name}
					clientHealthInsurrance={waitingList.client?.healthInsurance?.name}
					includeLineSeparator={index + 1 !== inProcessWaitingItems.length}
				/>
			);
		});*/
	};

	return (
		<div className="flex flex-col rounded-lg border-0 bg-white-section w-427 h-screen ml-9 mr-42 my-6">
			<div className="section-cell border-b-2" style={{ borderBottomColor: '#EDF3F1' }}>
				<span
					className="mr-20 whitespace-nowrap"
					style={{ fontFamily: 'Raleway-Bold', fontSize: '19px' }}
				>
					Lista de Espera
				</span>
				<SearchInput />
			</div>
			<span
				className="section-cell"
				style={{
					fontFamily: 'Raleway-Bold',
					fontSize: '16px',
					color: '#676A6E',
					paddingTop: '32.27px',
					paddingBottom: '24.21px',
				}}
			>
				En consulta
			</span>
			{inProcessWaitingItems.map((waitingList, index) => {
				return (
					<WaitingListItemC
						key={waitingList.id}
						status={waitingList.status}
						positionNumber={waitingList.positionNumber}
						clientName={waitingList.clientName}
						clientHealthInsurrance={waitingList.clientHealthInsurrance}
						includeLineSeparator={index + 1 !== inProcessWaitingItems.length}
					/>
				);
			})}
			<span
				className="section-cell"
				style={{
					fontFamily: 'Raleway-Bold',
					fontSize: '16px',
					color: '#676A6E',
					paddingBottom: '24.21px',
				}}
			>
				En espera
			</span>
			{pendingWaitingItems.map((waitingList, index) => {
				return (
					<WaitingListItemC
						key={waitingList.id}
						status={waitingList.status}
						positionNumber={waitingList.positionNumber}
						clientName={waitingList.clientName}
						clientHealthInsurrance={waitingList.clientHealthInsurrance}
						includeLineSeparator={index + 1 != pendingWaitingItems.length}
					/>
				);
			})}
		</div>
	);
};

export default WaitingListC;
