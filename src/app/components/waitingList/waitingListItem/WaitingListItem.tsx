import React, { useContext } from 'react';
import arrowDownIcon from '../../../../assets/images/arrow-down-icon.svg';
import removeICon from '../../../../assets/images/remove-icon.svg';
import { WaitingListItemStatus } from '../../../../models';
import { WaitingListsContext } from '../../../context/waiting-list-context';

interface WaitingListItemProps {
	waitingItemID: string;
	status: keyof typeof WaitingListItemStatus;
	includeLineSeparator?: boolean;
	positionNumber: number;
	clientName?: string;
	clientHealthInsurrance?: string;
	onConsulta: (waitingListItemID: string) => void;
	onTerminada: (waitingListItemID: string) => void;
}

const WaitingListItem: React.FC<WaitingListItemProps> = (props) => {
	let orderBackgroundColor = '';
	let buttonBackground = '';
	let buttonBorderWidth = '';
	let buttonBorderColor = '';
	let buttonTextColor = '';
	const waitingListsContext = useContext(WaitingListsContext);
	const totalItems = waitingListsContext.waitingListItems.filter(
		(waitingListItem) =>
			waitingListItem.status === 'CONSULTA' || waitingListItem.status === 'ESPERA'
	);

	if (props.status === 'ESPERA') {
		orderBackgroundColor = '#3F48AD';
		buttonBorderWidth = '2px';
		buttonTextColor = '#6E6D8C';
		buttonBorderColor = '#D6D6EB';
	} else {
		orderBackgroundColor = '#17CB9A';
		buttonBackground = 'linear-gradient(323.86deg, #7F00FF -23.29%, #E100FF 144.64%)';
		buttonTextColor = 'white';
	}

	const handleWaitingItemAction = (
		status: keyof typeof WaitingListItemStatus,
		waitingListItemID: string
	) => {
		if (status === 'ESPERA') {
			props.onConsulta(waitingListItemID);
		} else if (status === 'CONSULTA') {
			props.onTerminada(waitingListItemID);
		}
	};

	const get0PrefixValue = (value: number): string => {
		return `${value > 9 ? '' : 0}${value}`;
	};

	const generateOptions = (): JSX.Element[] => {
		const result: JSX.Element[] = [];
		totalItems.forEach((item) => {
			result.push(
				<option
					className="outline-none"
					key={item.id}
					value={get0PrefixValue(item.positionNumber)}
				>
					{get0PrefixValue(item.positionNumber)}
				</option>
			);
		});
		return result;
	};

	const handlePositionChange = (value: string) => {
		waitingListsContext.updateWaitingItemPositionNumber(
			props.waitingItemID,
			Number.parseInt(value)
		);
	};

	return (
		<>
			<div className="section-cell items-center">
				<div
					className="flex flex-row justify-center space-x-1.5 rounded mr-7"
					style={{ backgroundColor: orderBackgroundColor, width: '54px', height: '26px' }}
				>
					<span
						style={{
							fontFamily: 'Raleway-SemiBold',
							fontSize: '16px',
							color: '#FFFFFF',
						}}
					>
						<select
							style={{
								backgroundColor: orderBackgroundColor,
							}}
							value={get0PrefixValue(props.positionNumber)}
							onChange={(event) => handlePositionChange(event.target.value)}
						>
							{generateOptions()}
						</select>
					</span>
				</div>
				<div className="flex flex-col mr-6">
					<span
						className="w-24 truncate"
						title={props.clientName}
						style={{ fontFamily: 'Raleway-Bold', fontSize: '16px' }}
					>
						{props.clientName}
					</span>
					<span
						className=" whitespace-nowrap w-24"
						style={{
							fontFamily: 'Raleway-Regular',
							fontSize: '14px',
							opacity: '59.15%',
						}}
					>
						{props.clientHealthInsurrance}
					</span>
				</div>
				<button
					className="rounded-lg w-28 h-9 text-black mr-5"
					style={{
						background: buttonBackground,
						borderColor: buttonBorderColor,
						borderWidth: buttonBorderWidth,
						color: buttonTextColor,
						fontFamily: 'Raleway-SemiBold',
						fontSize: '16px',
					}}
					onClick={() => handleWaitingItemAction(props.status, props.waitingItemID)}
				>
					{props.status === 'ESPERA' ? 'A Consulta' : 'Terminada'}
				</button>
				<input
					type="image"
					alt=""
					src={removeICon}
					onClick={() => props.onTerminada(props.waitingItemID)}
				/>
			</div>
			{props.includeLineSeparator === false ? (
				''
			) : (
				<div className="border-b-2 ml-9" style={{ borderBottomColor: '#EDF3F1' }} />
			)}
		</>
	);
};

export default WaitingListItem;
