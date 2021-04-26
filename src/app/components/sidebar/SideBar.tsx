import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
const SideBar = () => {
	return (
		<div>
			<div>
				<Dropdown />
			</div>
			<ul className="flex  justify-center flex-col ">
				<li className="">
					<Link
						to="/"
						className="text-base  block  transition duration-500 ease-in-out  hover:bg-gray-500  transform"
					>
						Inicio
					</Link>
				</li>
				<li>
					<Link
						to="/Clients"
						className="text-base  block  transition duration-500 ease-in-out  hover:bg-gray-500  transform"
					>
						Clientes
					</Link>
				</li>
				<li>
					<Link
						to="/Medicine"
						className="text-base  block  transition duration-500 ease-in-out  hover:bg-gray-500  transform"
					>
						Medicamentos
					</Link>
				</li>
				<li>
					<Link
						to="/Configuration"
						className="text-base  block  transition duration-500 ease-in-out  hover:bg-gray-500  transform"
					>
						Configuracion
					</Link>
				</li>
				<li>
					<Link
						to="/Help"
						className="text-base  block  transition duration-500 ease-in-out  hover:bg-gray-500  transform"
					>
						Ayuda
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
