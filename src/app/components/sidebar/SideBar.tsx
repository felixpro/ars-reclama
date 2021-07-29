import React, { FC, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DoctorsContext } from '../../context/doctor-context';
import { HospitalsContext } from '../../context/hospital-context';
import { RelationsContext } from '../../context/relations-context';

import DropDownIcon from '../DropDownIcon';

import arsLogo from '../../../assets/images/logo_arsreclama.svg';

interface Ipath {
	principal: string;
	path1: string | null;
}

interface ISideBar {
	sidebarToggle: boolean;
	SetsidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
	SetPagePath: React.Dispatch<React.SetStateAction<Ipath>>;
	pagePath: Ipath;
}

const SideBar: FC<ISideBar> = ({ SetsidebarToggle, SetPagePath, pagePath }) => {
	const { doctors, fetchDoctors } = useContext(DoctorsContext);
	const { hospitals, fetchHospitals } = useContext(HospitalsContext);
	const { setActualDoctor, setActualHospital } = useContext(RelationsContext);

	const [dropdownIconValue, setdropdownIconValue] = useState();

	const [isDoctor, setIsDoctor] = useState(true);

	const handleClick = (path: React.SetStateAction<Ipath>): void => {
		SetPagePath(path);
		SetsidebarToggle(false);
	};

	// If the user resize the app close the sidebar if it's open
	window.onresize = function () {
		SetsidebarToggle(false);
	};

	useEffect(() => {
		isDoctor ? setActualHospital(dropdownIconValue) : setActualDoctor(dropdownIconValue);
	}, [dropdownIconValue]);

	return (
		<div className="relative min-h-screen flex sidebar-container ">
			<div className="bg-white-section text-blue w-60">
				<button
					className="block 2sm:hidden flex justify-end w-full pr-3.5 pt-3.5"
					onClick={() => SetsidebarToggle(false)}
				>
					<svg
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.78613 2.51651L5.05501 6.78539L0.78613 11.0543C0.292398 11.548 0.284802 12.3608 0.78613 12.8621C1.27986 13.3558 2.09262 13.3482 2.58635 12.8545L6.85523 8.58561L11.1241 12.8545C11.6102 13.3406 12.423 13.3482 12.9167 12.8545C13.4105 12.3608 13.4029 11.548 12.9167 11.0619L8.64786 6.79299L12.9167 2.52411C13.4029 2.03797 13.4105 1.22521 12.9167 0.731481C12.4154 0.230154 11.6027 0.23775 11.1165 0.723885L6.84764 4.99277L2.57876 0.723885C2.09262 0.23775 1.27986 0.230154 0.78613 0.723885C0.292398 1.21762 0.299994 2.03038 0.78613 2.51651Z"
							fill="#80868B"
						/>
					</svg>
				</button>

				<div className="flex justify-center">
					<Link
						to="/"
						className="  block pt-14 "
						onClick={() => handleClick({ principal: 'Inicio', path1: null })}
					>
						<img src={arsLogo} alt="arsreclama" />
					</Link>
				</div>
				<div className="pt-20 top-11 relative bottom">
					<p className="text-center">
						Selecciona el
						{isDoctor ? <span> hospital </span> : <span> doctor </span>}
					</p>
				</div>
				<nav>
					<div className=" pb-28">
						<div className="flex justify-center items-center">
							<DropDownIcon
								options={isDoctor ? hospitals : doctors}
								setdropdownIconValue={setdropdownIconValue}
								inputName="apellido"
								effectFunction={isDoctor ? fetchDoctors : fetchHospitals}
							/>
						</div>
					</div>
					<ul className="flex  justify-center flex-col ">
						<li className="">
							<Link
								to="/"
								onClick={() => handleClick({ principal: 'Inicio', path1: null })}
								className={`raleway-font not-italic font-normal  bgHoverLink  ${pagePath.principal === 'Inicio'
									? 'text-mountainMeadow-default font-medium sidebarBG'
									: 'text-black-default'
									}   hover:text-mountainMeadow-default  flex block transition duration-500 ease-in-out  hover:bg-gray-500  transform pb-6 pt-6 pl-10 `}
							>
								<svg
									width="26"
									height="21"
									fill="#17CB9A"
									className={` fill-current mr-5 ${pagePath.principal === 'Inicio'
										? 'text-mountainMeadow-default '
										: 'text-pigeonPost-default '
										}`}
								>
									<path d="M0.273682 10.0257C0.273682 10.6579 0.778564 11.1345 1.58423 11.1345C1.93872 11.1345 2.30396 10.9788 2.60474 10.7454L3.51782 10.0451V18.2928C3.51782 19.7615 4.52759 20.6563 6.21411 20.6563H19.9641C21.6614 20.6563 22.6604 19.7615 22.6604 18.2928V10.0062L23.6272 10.7454C23.928 10.9788 24.2825 11.1345 24.6477 11.1345C25.3997 11.1345 25.9475 10.7065 25.9475 10.0451C25.9475 9.67556 25.7649 9.33515 25.4319 9.092L22.6604 6.98145V2.89651C22.6604 2.46857 22.3596 2.19624 21.887 2.19624H20.0608C19.5881 2.19624 19.2766 2.46857 19.2766 2.89651V4.40405L14.8723 1.04856C13.8088 0.241304 12.4338 0.241304 11.3704 1.04856L0.789307 9.092C0.456299 9.3546 0.273682 9.69501 0.273682 10.0257ZM16.0217 12.4961C16.0217 12.0584 15.7102 11.7764 15.2268 11.7764H11.0159C10.5325 11.7764 10.2102 12.0584 10.2102 12.4961V18.3317H7.03052C6.42896 18.3317 6.08521 18.0205 6.08521 17.4661V8.09994L12.5627 3.17857C12.9172 2.90624 13.3147 2.90624 13.6799 3.17857L20.093 8.06104V17.4661C20.093 18.0205 19.76 18.3317 19.1477 18.3317H16.0217V12.4961Z" />
								</svg>
								Inicio
							</Link>
						</li>
						<li>
							<Link
								to="/Clients"
								onClick={() => handleClick({ principal: 'Clientes', path1: null })}
								className={`raleway-font not-italic font-normal  bgHoverLink ${pagePath.principal === 'Clientes'
									? 'text-mountainMeadow-default font-medium sidebarBG'
									: 'text-black-default'
									}   hover:text-mountainMeadow-default  flex block transition duration-500 ease-in-out  hover:bg-gray-500  transform pb-6 pt-6 pl-10 `}
							>
								<svg
									width="30"
									height="19"
									className={` fill-current mr-4 ${pagePath.principal === 'Clientes'
										? 'text-mountainMeadow-default'
										: 'text-pigeonPost-default '
										}`}
								>
									<path d="M20.5247 9.67734C23.092 9.67734 25.1438 7.67377 25.1438 5.17418C25.1438 2.73295 23.0706 0.739112 20.5247 0.739112C17.9895 0.739112 15.9055 2.74268 15.9163 5.17418C15.927 7.6835 17.9573 9.67734 20.5247 9.67734ZM8.54712 9.88158C10.7922 9.88158 12.5862 8.12117 12.5862 5.90364C12.5862 3.77363 10.76 2.0035 8.54712 2.0035C6.32349 2.0035 4.48657 3.79309 4.49731 5.91336C4.50806 8.1309 6.302 9.88158 8.54712 9.88158ZM20.5247 7.48898C19.3538 7.48898 18.3655 6.49692 18.3655 5.16446C18.3547 3.91953 19.3645 2.92747 20.5247 2.92747C21.6956 2.92747 22.6838 3.91953 22.6838 5.17418C22.6838 6.4872 21.717 7.48898 20.5247 7.48898ZM8.54712 7.73213C7.63403 7.73213 6.87134 6.95405 6.87134 5.91336C6.8606 4.95048 7.65552 4.16268 8.54712 4.16268C9.43872 4.16268 10.2122 4.95048 10.2122 5.90364C10.2122 6.95405 9.46021 7.73213 8.54712 7.73213ZM14.3264 18.3919H26.7229C28.6565 18.3919 29.6233 17.7791 29.6233 16.4953C29.6233 13.6456 25.7883 10.5916 20.5247 10.5916C15.261 10.5916 11.426 13.6456 11.426 16.4953C11.426 17.7791 12.3928 18.3919 14.3264 18.3919ZM3.11157 18.4016H10.7922C10.051 17.9834 9.67505 17.001 9.75024 16.2424H3.44458C3.28345 16.2424 3.24048 16.1646 3.24048 16.0673C3.24048 14.4334 5.58228 12.741 8.53638 12.741C9.28833 12.741 10.4163 12.9453 11.0071 13.1787C11.3831 12.5076 11.9524 11.9532 12.7795 11.5058C11.5657 10.9514 9.86841 10.6013 8.53638 10.6013C4.13208 10.6013 0.587158 13.3343 0.587158 16.3786C0.587158 17.6819 1.42505 18.4016 3.11157 18.4016ZM14.4553 16.2035C14.2834 16.2035 14.2297 16.1257 14.2297 16.0187C14.2297 14.9002 16.5608 12.7897 20.5247 12.7897C24.4993 12.7897 26.8196 14.9002 26.8196 16.0187C26.8196 16.1257 26.7659 16.2035 26.594 16.2035H14.4553Z" />
								</svg>
								Clientes
							</Link>
						</li>
						<li>
							<Link
								to="/Medicine"
								onClick={() =>
									handleClick({ principal: 'Medicamentos', path1: null })
								}
								className={`raleway-font not-italic font-normal  bgHoverLink ${pagePath.principal === 'Medicamentos'
									? 'text-mountainMeadow-default font-medium sidebarBG'
									: 'text-black-default'
									}   hover:text-mountainMeadow-default  flex block transition duration-500 ease-in-out  hover:bg-gray-500  transform pb-6 pt-6 pl-10 `}
							>
								<svg
									width="27"
									height="21"
									className={` fill-current mr-5 ${pagePath.principal === 'Medicamentos'
										? 'text-mountainMeadow-default'
										: 'text-pigeonPost-default '
										}`}
								>
									<path d="M24.551 15.2097C26.6672 13.3034 26.6672 10.6968 24.5618 8.79049L16.9885 1.93363C14.8723 0.0176053 12.0256 0.0176053 9.89868 1.93363C7.78247 3.83994 7.78247 6.45624 9.88794 8.36254L17.4612 15.2194C19.5774 17.1354 22.4133 17.1257 24.551 15.2097ZM11.8645 6.76747C10.7903 5.79487 10.7581 4.55966 11.7786 3.63569C12.7883 2.71172 14.1526 2.75062 15.2268 3.72322L17.9553 6.19364L14.593 9.23789L11.8645 6.76747ZM22.6711 13.5076C21.6614 14.4316 20.2971 14.4024 19.2229 13.4298L16.4729 10.9399L19.8352 7.89569L22.5852 10.3758C23.6594 11.3582 23.6917 12.5836 22.6711 13.5076ZM6.12817 20.8216C9.46899 20.8216 12.176 18.3609 12.176 15.3361C12.176 12.3308 9.45825 9.87981 6.12817 9.87981C2.78735 9.87981 0.0803223 12.3308 0.0803223 15.3361C0.0803223 18.3609 2.77661 20.8216 6.12817 20.8216ZM6.12817 12.2141C7.59985 12.2141 8.85669 13.0408 9.36157 14.2079H2.88403C3.38892 13.0408 4.65649 12.2141 6.12817 12.2141ZM6.12817 18.4776C4.64575 18.4776 3.38892 17.6509 2.88403 16.4741H9.36157C8.85669 17.6509 7.59985 18.4776 6.12817 18.4776Z" />
								</svg>
								Medicamentos
							</Link>
						</li>
						<li>
							<Link
								to="/Configuration"
								onClick={() =>
									handleClick({ principal: 'Configuracion', path1: null })
								}
								className={`raleway-font not-italic font-normal  bgHoverLink ${pagePath.principal === 'Configuracion'
									? 'text-mountainMeadow-default font-medium sidebarBG'
									: 'text-black-default'
									}   hover:text-mountainMeadow-default  flex block transition duration-500 ease-in-out  hover:bg-gray-500  transform pb-6 pt-6 pl-10 `}
							>
								<svg
									width="24"
									height="22"
									className={` fill-current mr-5 ${pagePath.principal === 'Configuracion'
										? 'text-mountainMeadow-default '
										: 'text-pigeonPost-default '
										}`}
								>
									<path d="M11.0686 21.8508H13.1526C14.1731 21.8508 14.9895 21.2672 15.2151 20.3919L15.5588 19.0497L15.6663 19.0108L16.9661 19.7305C17.8254 20.2071 18.8567 20.0806 19.5657 19.429L21.0051 18.1257C21.7249 17.4449 21.8538 16.5306 21.3274 15.772L20.5325 14.6146L20.5647 14.5173L22.0364 14.2061C22.9924 13.9824 23.637 13.2432 23.637 12.329V10.5394C23.637 9.62515 23.0032 8.87624 22.0364 8.66227L20.5754 8.34131L20.5325 8.24405L21.3381 7.08665C21.8645 6.32802 21.7356 5.41377 21.0051 4.72323L19.5657 3.42966C18.8674 2.77802 17.8254 2.64185 16.9768 3.11843L15.677 3.83816L15.5588 3.79925L15.2151 2.45706C14.9895 1.58172 14.1731 0.998154 13.1526 0.998154H11.0686C10.0481 0.998154 9.23169 1.59144 9.0061 2.45706L8.66235 3.79925L8.54419 3.83816L7.24438 3.11843C6.39575 2.65158 5.35376 2.77802 4.65552 3.42966L3.21606 4.72323C2.4856 5.41377 2.35669 6.32802 2.88306 7.08665L3.68872 8.24405L3.64575 8.34131L2.18481 8.66227C1.21802 8.88597 0.584229 9.62515 0.584229 10.5394V12.329C0.584229 13.2432 1.22876 13.9921 2.18481 14.2061L3.65649 14.5173L3.68872 14.6146L2.8938 15.772C2.35669 16.5306 2.4856 17.4449 3.21606 18.1257L4.65552 19.429C5.3645 20.0806 6.39575 20.2071 7.25513 19.7305L8.55493 19.0108L8.66235 19.0497L9.0061 20.3919C9.23169 21.2672 10.0481 21.8508 11.0686 21.8508ZM11.595 19.4873C11.4231 19.4873 11.3479 19.4095 11.3264 19.2831L10.7463 17.0753C10.0266 16.9586 9.29614 16.6765 8.63013 16.2778L6.49243 17.4741C6.36353 17.5519 6.24536 17.5421 6.13794 17.4449L5.40747 16.7835C5.28931 16.6862 5.30005 16.5793 5.37524 16.4723L6.70728 14.5173C6.28833 13.9241 5.99829 13.2821 5.85864 12.6402L3.40942 12.1247C3.26978 12.1053 3.18384 12.0372 3.18384 11.8816V10.9868C3.18384 10.8214 3.26978 10.7631 3.40942 10.7339L5.85864 10.2184C6.00903 9.56679 6.28833 8.91515 6.69653 8.33158L5.3645 6.38638C5.28931 6.27939 5.27856 6.1724 5.39673 6.06542L6.1272 5.41377C6.24536 5.31651 6.35278 5.30679 6.49243 5.3846L8.63013 6.57117C9.15649 6.23076 9.98364 5.91953 10.7356 5.77364L11.3264 3.56583C11.3479 3.43939 11.4231 3.36158 11.595 3.36158H12.6262C12.7981 3.36158 12.8733 3.42966 12.8948 3.56583L13.4856 5.78336C14.2375 5.91953 14.9573 6.20158 15.5911 6.57117L17.718 5.39432C17.8469 5.32624 17.9543 5.32624 18.0725 5.43323L18.803 6.08487C18.9211 6.19186 18.9104 6.29884 18.8352 6.40583L17.5247 8.33158C17.9221 8.90542 18.2122 9.56679 18.3518 10.2087L20.8118 10.7339C20.9514 10.7631 21.0374 10.8214 21.0374 10.9868V11.8816C21.0374 12.0372 20.9514 12.1053 20.8118 12.1247L18.3518 12.6499C18.2229 13.2821 17.9221 13.9435 17.5139 14.5173L18.8352 16.4528C18.8997 16.5598 18.9211 16.6668 18.803 16.7738L18.0725 17.4254C17.9436 17.5324 17.8362 17.5324 17.718 17.4546L15.6018 16.2778C14.9036 16.6765 14.2805 16.9294 13.4856 17.0753L12.8948 19.2831C12.8733 19.4193 12.7981 19.4873 12.6262 19.4873H11.595ZM12.1106 14.8772C14.1946 14.8772 15.9133 13.321 15.9133 11.4245C15.9133 9.53761 14.1946 8.0009 12.1106 8.0009C10.0159 8.0009 8.29712 9.53761 8.29712 11.4245C8.29712 13.3308 10.0159 14.8772 12.1106 14.8772ZM12.1106 12.8445C11.2512 12.8445 10.553 12.2025 10.553 11.4245C10.553 10.6561 11.262 10.0239 12.1106 10.0239C12.9485 10.0239 13.6467 10.6658 13.6467 11.4245C13.6467 12.2025 12.9485 12.8445 12.1106 12.8445Z" />
								</svg>
								Configuracion
							</Link>
						</li>
						<li>
							<Link
								to="/Help"
								onClick={() => handleClick({ principal: 'Ayuda', path1: null })}
								className={`raleway-font not-italic font-normal  bgHoverLink ${pagePath.principal === 'Ayuda'
									? 'text-mountainMeadow-default font-medium sidebarBG'
									: 'text-black-default'
									}   hover:text-mountainMeadow-default  flex block transition duration-500 ease-in-out  hover:bg-gray-500  transform pb-6 pt-6 pl-10 `}
							>
								<svg
									width="23"
									height="22"
									className={` fill-current mr-5 ${pagePath.principal === 'Ayuda'
										? 'text-mountainMeadow-default '
										: 'text-pigeonPost-default '
										}`}
								>
									<path d="M11.5 21.7545C17.376 21.7545 22.21 16.9205 22.21 11.0446C22.21 5.16858 17.376 0.345337 11.5 0.345337C5.62402 0.345337 0.790039 5.16858 0.790039 11.0446C0.790039 16.9205 5.62402 21.7545 11.5 21.7545ZM11.5 5.82385C10.6514 5.82385 9.8457 6.02795 9.12598 6.39319L7.03125 4.28772C8.30957 3.44983 9.8457 2.95569 11.5 2.95569C13.165 2.95569 14.7119 3.44983 16.001 4.3092L13.9062 6.40393C13.1865 6.02795 12.3701 5.82385 11.5 5.82385ZM3.41113 11.0446C3.41113 9.401 3.90527 7.86487 4.74316 6.58655L6.84863 8.69202C6.4834 9.401 6.2793 10.1959 6.2793 11.0446C6.2793 11.9039 6.49414 12.7203 6.87012 13.4401L4.76465 15.5455C3.91602 14.2672 3.41113 12.7203 3.41113 11.0446ZM16.7314 11.0446C16.7314 10.2067 16.5273 9.41174 16.1729 8.7135L18.2783 6.60803C19.1055 7.88635 19.5996 9.41174 19.5996 11.0446C19.5996 12.7096 19.1055 14.2457 18.2568 15.5348L16.1514 13.4293C16.5166 12.7096 16.7314 11.9039 16.7314 11.0446ZM11.5107 14.2565C9.72754 14.2565 8.28809 12.817 8.28809 11.0446C8.28809 9.25061 9.72754 7.8219 11.5107 7.8219C13.2939 7.8219 14.7227 9.25061 14.7227 11.0446C14.7227 12.817 13.2939 14.2565 11.5107 14.2565ZM11.5 19.1442C9.85645 19.1442 8.3418 18.6608 7.06348 17.8229L9.17969 15.7067C9.87793 16.0612 10.6729 16.2653 11.5107 16.2653C12.3486 16.2653 13.1436 16.0612 13.8525 15.7067L15.958 17.8121C14.6797 18.6608 13.1543 19.1442 11.5 19.1442Z" />
								</svg>
								Ayuda
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default SideBar;
