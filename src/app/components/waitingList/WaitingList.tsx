import React, { useContext, useEffect, useState } from 'react';
import SearchInput from '../../components/searchInput/SearchInput';
import WaitingListItemC from './waitingListItem/WaitingListItem';
import { WaitingListsContext } from '../../context/waiting-list-context';
import { DataStore } from '@aws-amplify/datastore';
import { WaitingList, WaitingListItem } from '../../../models';

const WaitingListC = () => {
	const waitingListsContext = useContext(WaitingListsContext);
	const [filterText, setFilterText] = useState('');
	const [loading, setLoading] = useState(true);

	const inProcessWaitingItems = waitingListsContext.waitingListItems
		.filter((waitingListItem) => waitingListItem.status === 'CONSULTA')
		.sort((a, b) => a.positionNumber - b.positionNumber);
	const pendingWaitingItems = waitingListsContext.waitingListItems
		.filter((waitingListItem) => waitingListItem.status === 'ESPERA')
		.sort((a, b) => a.positionNumber - b.positionNumber);

	const generateWaitingListTestData = async () => {
		await DataStore.save(
			new WaitingList({
				createdAt: new Date().toString(),
			})
		);
	};

	useEffect(() => {
		const timeOut = setTimeout(() => {
			waitingListsContext.getWaitingListItems(filterText);
			setLoading(false);
		}, 500);

		return () => {
			clearTimeout(timeOut);
		};

		//generateWaitingListTestData();
	}, [filterText]);

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

	const handleSearchInput = (value: string) => {
		setFilterText(value);
		setLoading(true);
	};

	const handleOnConsultaWaitingItem = (waitingListItemID: string) => {
		waitingListsContext.updateWaitingListItemStatus(waitingListItemID, 'CONSULTA');
	};

	const handleOnTerminadaWaitingItem = (waitingListItemID: string) => {
		waitingListsContext.updateWaitingListItemStatus(waitingListItemID, 'TERMINADA');
	};

	const inProcessItems: JSX.Element[] = inProcessWaitingItems.map((waitingListItem, index) => {
		return (
			<WaitingListItemC
				key={waitingListItem.id}
				waitingItemID={waitingListItem.id}
				status={waitingListItem.status}
				positionNumber={waitingListItem.positionNumber}
				clientName={waitingListItem.clientName}
				clientHealthInsurrance={waitingListItem.clientHealthInsurrance}
				includeLineSeparator={index + 1 !== inProcessWaitingItems.length}
				onConsulta={handleOnConsultaWaitingItem}
				onTerminada={handleOnTerminadaWaitingItem}
			/>
		);
	});

	const pendingItems: JSX.Element[] = pendingWaitingItems.map((waitingListItem, index) => {
		return (
			<WaitingListItemC
				key={waitingListItem.id}
				waitingItemID={waitingListItem.id}
				status={waitingListItem.status}
				positionNumber={waitingListItem.positionNumber}
				clientName={waitingListItem.clientName}
				clientHealthInsurrance={waitingListItem.clientHealthInsurrance}
				includeLineSeparator={index + 1 != pendingWaitingItems.length}
				onConsulta={handleOnConsultaWaitingItem}
				onTerminada={handleOnTerminadaWaitingItem}
			/>
		);
	});

	if (loading) {
		//inProcessItems = [<Spinner key={1} />];
		//pendingItems = [<Spinner key={1} />];
	}

	return (
		<div className="flex flex-col rounded-lg border-0 bg-white-section w-427 h-screen ml-9 mr-42 my-6 overflow-y-auto">
			<div className="section-cell border-b-2" style={{ borderBottomColor: '#EDF3F1' }}>
				<span
					className="mr-20 whitespace-nowrap"
					style={{ fontFamily: 'Raleway-Bold', fontSize: '19px' }}
				>
					Lista de Espera
				</span>
				<SearchInput onChange={handleSearchInput} />
			</div>
			<span
				className="section-cell"
				style={{
					fontFamily: 'Raleway-Bold',
					fontSize: '16px',
					color: '#676A6E',
					paddingTop: '32.27px',
					paddingBottom: '0px',
				}}
			>
				En consulta
			</span>
			{inProcessItems}
			<span
				className="section-cell"
				style={{
					fontFamily: 'Raleway-Bold',
					fontSize: '16px',
					color: '#676A6E',
					paddingBottom: '0px',
				}}
			>
				En espera
			</span>
			{pendingItems}
		</div>
	);
};

export default WaitingListC;
