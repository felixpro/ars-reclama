import React, { useState } from 'react';
import { WaitingList } from '../../models';
import { DataStore } from '@aws-amplify/datastore';

interface WaitingListContextProps {
	waitingLists: WaitingList[];
	fetchWaitingLists: () => void;
}

export const WaitingListsContext = React.createContext<WaitingListContextProps>({
	waitingLists: [],
	fetchWaitingLists: () => null,
});

const ContextProvider: React.FC = (props) => {
	const [waitingLists, setWaitingLists] = useState<WaitingList[]>([]);

	const fetchWaitingLists = async () => {
		try {
			const waitingLists = await DataStore.query(WaitingList);
			setWaitingLists(waitingLists);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<WaitingListsContext.Provider
			value={{ waitingLists: waitingLists, fetchWaitingLists: fetchWaitingLists }}
		>
			{props.children}
		</WaitingListsContext.Provider>
	);
};

export default ContextProvider;
