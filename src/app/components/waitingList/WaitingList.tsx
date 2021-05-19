import React, { useContext, useEffect } from 'react';
import SearchInput from '../../components/searchInput/SearchInput';
import WaitingListItem from './waitingListItem/WaitingListItem';
import { WaitingListsContext } from '../../context/waiting-list-context';

const WaitingList = () => {
	const waitingListsContext = useContext(WaitingListsContext);

	const inProcessWaitingLists = waitingListsContext.waitingLists.filter(
		(waitingList) => waitingList.status === 'CONSULTA'
	);
	const pendingWaitingLists = waitingListsContext.waitingLists.filter(
		(waitingList) => waitingList.status === 'ESPERA'
	);

	useEffect(() => {
		waitingListsContext.fetchWaitingLists();
	}, []);

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
			{inProcessWaitingLists.map((waitingList, index) => {
				return (
					<WaitingListItem
						key={waitingList.id}
						status={waitingList.status}
						positionNumber={waitingList.positionNumber}
						clientName={waitingList.client?.name}
						clientHealthInsurrance={waitingList.client?.healthInsurance?.name}
						includeLineSeparator={index + 1 != inProcessWaitingLists.length}
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
			{pendingWaitingLists.map((waitingList, index) => {
				return (
					<WaitingListItem
						key={waitingList.id}
						status={waitingList.status}
						positionNumber={waitingList.positionNumber}
						clientName={waitingList.client?.name}
						clientHealthInsurrance={waitingList.client?.healthInsurance?.name}
						includeLineSeparator={index + 1 != inProcessWaitingLists.length}
					/>
				);
			})}
		</div>
	);
};

export default WaitingList;
