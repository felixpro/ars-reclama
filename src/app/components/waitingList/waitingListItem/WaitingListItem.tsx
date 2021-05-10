import React from 'react';
import arrowDownIcon from '../../../../assets/images/arrow-down-icon.svg';
import removeICon from '../../../../assets/images/remove-icon.svg';

interface WaitingListItemProps {
	status: string;
	includeLineSeparator?: boolean;
}

const WaitingListItem: React.FC<WaitingListItemProps> = (props) => {
	let orderBackgroundColor = '';
	let buttonBackground = '';
	let buttonBorderWidth = '';
	let buttonBorderColor = '';
	let buttonTextColor = '';

	if (props.status === 'pending') {
		orderBackgroundColor = '#3F48AD';
		buttonBorderWidth = '2px';
		buttonTextColor = '#6E6D8C';
		buttonBorderColor = '#D6D6EB';
	} else {
		orderBackgroundColor = '#17CB9A';
		buttonBackground = 'linear-gradient(323.86deg, #7F00FF -23.29%, #E100FF 144.64%)';
		buttonTextColor = 'white';
	}

	return (
		<>
			<div className="section-cell items-center" style={{ paddingTop: '0px' }}>
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
						03
					</span>
					<img alt="" src={arrowDownIcon} />
				</div>
				<div className="flex flex-col mr-6">
					<span style={{ fontFamily: 'Raleway-Bold', fontSize: '16px' }}>
						Abbie Wilson
					</span>
					<span
						className=" whitespace-nowrap"
						style={{
							fontFamily: 'Raleway-Regular',
							fontSize: '14px',
							opacity: '59.15%',
						}}
					>
						ARS Humano
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
				>
					{props.status === 'pending' ? 'A Consulta' : 'Terminada'}
				</button>
				<img alt="" src={removeICon} />
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
