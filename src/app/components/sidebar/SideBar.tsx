import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const SideBar = () => {
	return (
		<div className="relative min-h-screen flex">
			<div className="bg-white text-blue w-64">
				<Link
					to="/"
					className="text-base  block  transition duration-500 ease-in-out  hover:bg-glacier  transform"
				>
					LOGO
				</Link>
				<nav>
					<div>
						<Dropdown />
					</div>
					<ul className="flex  justify-center flex-col ">
						<li className="">
							<Link
								to="/"
								className="text-base  block  transition duration-500 ease-in-out  hover:bg-gray-500  transform pb-3 pt-3 pl-10"
							>
								Inicio
							</Link>
						</li>
						<li>
							<Link
								to="/Clients"
								className="text-base  block  transition duration-500 ease-in-out  hover:bg-gray-500  transform pb-3 pt-3 pl-10"
							>
								Clientes
							</Link>
						</li>
						<li>
							<Link
								to="/Medicine"
								className="text-base  block  transition duration-500 ease-in-out  hover:bg-gray-500  transform pb-3 pt-3 pl-10"
							>
								Medicamentos
							</Link>
						</li>
						<li>
							<Link
								to="/Configuration"
								className="text-base  block  transition duration-500 ease-in-out  hover:bg-gray-500  transform pb-3 pt-3 pl-10"
							>
								Configuracion
							</Link>
						</li>
						<li>
							<Link
								to="/Help"
								className="text-base  block  transition duration-500 ease-in-out  hover:bg-gray-500  transform pb-3 pt-3 pl-10"
							>
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
