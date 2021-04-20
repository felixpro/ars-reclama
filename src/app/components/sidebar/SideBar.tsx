import React from 'react';
import Dropdown from './Dropdown';
const SideBar = () => {
	return (
		<div>
			<div>
				<Dropdown />
			</div>
			<ul className="flex  justify-center flex-col ">
				<li className="">
					<a
						href="https://www.youtube.com/"
						className="text-base  block  transition duration-500 ease-in-out  hover:bg-gray-500  transform"
					>
						Inicio
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/"
						className="text-base  block  transition duration-500 ease-in-out  hover:bg-gray-500  transform"
					>
						Clientes
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/"
						className="text-base  block transition duration-500 ease-in-out  hover:bg-gray-500  transform"
					>
						Medicamentos
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/"
						className="text-base  block transition duration-500 ease-in-out  hover:bg-gray-500  transform"
					>
						Configuración
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/"
						className="text-base  block transition duration-500 ease-in-out  hover:bg-gray-500  transform"
					>
						Ayuda
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
