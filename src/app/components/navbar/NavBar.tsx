import React from 'react';
import Search from './Search';
import ModalNavbar from './ModalNavbar';

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
							pagePath.path1 !== null
								? 'border-b-2 border-green-500  text-mountainMeadow-default mb-1'
								: 'text-azulMarino-default '
						}   `}
					>
						{pagePath.principal}
					</p>

					{pagePath.path1 ? (
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
							</p>
						</div>
					) : null}
				</div>
			</div>
			<div className="flex ">
				<ModalNavbar />
				<Search />
			</div>
		</div>
	);
};

export default NavBar;
