import React, { useContext, useState } from 'react';
import Search from './Search';
import ModalClient from '../modalClient/ModalClient';
import { RelationsContext } from '../../context/relations-context';

interface Ipath {
	principal: string;
	path1: string | null;
}

interface INavbar {
	sidebarToggle: boolean;
	SetsidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
	pagePath: Ipath;
}
const NavBar: React.FC<INavbar> = ({ SetsidebarToggle, sidebarToggle, pagePath }) => {
	const handleToggle = (): void => {
		if (sidebarToggle === true) {
			SetsidebarToggle(false);
		} else {
			SetsidebarToggle(true);
		}
	};

	const { actualClient } = useContext(RelationsContext);
	const [modalState, setModalState] = useState(false);

	return (
		<div className="flex justify-between items-center pr-10 bg-white-section pt-3.5 pb-3.5 2sm:ml-0.5 mb-0.5">
			<div className="flex items-center">
				<button className="block 2sm:hidden pl-7" onClick={() => handleToggle()}>
					<svg width="26" height="17">
						<rect width="26" height="3" rx="1.5" fill="#3D4043" />
						<rect y="7" width="26" height="3" rx="1.5" fill="#3D4043" />
						<rect y="14" width="26" height="3" rx="1.5" fill="#3D4043" />
					</svg>
				</button>
				<div className="flex items-center">
					<p
						className={` ml-6 2sm:ml-10  h-6 text-lg  raleway-font font-bold ${
							pagePath.path1 !== null || actualClient
								? 'border-b-2 border-green-500  text-mountainMeadow-default mb-1'
								: 'text-azulMarino-default '
						}   `}
					>
						{pagePath.principal}
					</p>

					{pagePath.path1 || actualClient ? (
						<div className="flex items-center h-5 pt-0.5 pl-2.5">
							<svg
								width="6"
								height="11"
								viewBox="0 0 6 11"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.999966 9.41667L4.67651 5.49996L0.999967 1.58325"
									stroke="#3F48AD"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>

							<p className="pl-2.5 raleway-font font-bold text-azulMarino-default text-lg">
								{pagePath.path1}
								{actualClient ? actualClient.name : null}
							</p>
						</div>
					) : null}
				</div>
			</div>
			<div className="flex modal_clientForm_container">
				<button
					className="raleway-font font-medium newCustomer-modal-btn flex items-center justify-center w-48  rounded-xl text-white-section pt-3 pb-3 mr-6 "
					onClick={() => setModalState(true)}
				>
					<svg width="17" height="17" className="fill-current mr-2.5">
						<path d="M1.98145 9.99072H6.72754V14.7466C6.72754 15.6548 7.46973 16.397 8.3877 16.397C9.30566 16.397 10.0479 15.6548 10.0479 14.7466V9.99072H14.7939C15.7021 9.99072 16.4443 9.2583 16.4443 8.34033C16.4443 7.42236 15.7021 6.68018 14.7939 6.68018H10.0479V1.93408C10.0479 1.01611 9.30566 0.273926 8.3877 0.273926C7.46973 0.273926 6.72754 1.01611 6.72754 1.93408V6.68018H1.98145C1.06348 6.68018 0.321289 7.42236 0.321289 8.34033C0.321289 9.2583 1.06348 9.99072 1.98145 9.99072Z" />
					</svg>
					NUEVO CLIENTE
				</button>
				<ModalClient
					modalState={modalState}
					setModalState={setModalState}
					updateClient={false}
				/>
				<Search />
			</div>
		</div>
	);
};

export default NavBar;
