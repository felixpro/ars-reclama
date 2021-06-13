import React, { useState, useEffect } from 'react';

function ClientForm() {
	// Handle ID checkboxs
	const identificationRef: React.useRef<HTMLDivElement> = React.createRef();
	const passportRef: React.useRef<HTMLDivElement> = React.createRef();

	const handleCheckboxRef = (target: string) => {
		if (target === 'identification') {
			passportRef.current.checked = false;
		} else if (target === 'passport') {
			identificationRef.current.checked = false;
		}
	};

	// Handle gender checkboxs
	const masculineRef: React.useRef<HTMLDivElement> = React.createRef();
	const femenineRef: React.useRef<HTMLDivElement> = React.createRef();

	const handleCheckboxGenderRef = (target: string) => {
		if (target === 'M') {
			femenineRef.current.checked = false;
		} else if (target === 'F') {
			masculineRef.current.checked = false;
		}
	};

	useEffect(() => {
		identificationRef.current.checked = true;
	}, []);

	return (
		<div className="client-form">
			<form action="">
				<div className="pb-9">
					<div className="grid grid-cols-12">
						<div className="col-span-6">
							<h1 className="raleway-font font-medium text-blueLucki-default text-4xl ">
								Crear cliente
							</h1>
						</div>
						<div className="col-span-6">
							<p>Añadir a:</p>
							<input type="text" />
						</div>
					</div>
				</div>
				<div className="form-container">
					<div className="grid grid-cols-12 items-baseline">
						<div className="col-span-3 ">
							<div className="relative top-0.5">
								<div className="flex pb-2 ">
									<label htmlFor="identification" className="checkbox-label flex">
										<input
											type="checkbox"
											id="identification"
											name="identification"
											value="identification"
											className="input-id"
											ref={identificationRef}
											onClick={() => handleCheckboxRef('identification')}
										/>
										<span className="checkbox-custom"></span>
										<p className="pl-1.5 OpenSansRegular">
											Cédulas<span className="text-red-default">*</span>
										</p>
									</label>
									<label
										htmlFor="passport"
										className="checkbox-label flex pl-1.5"
									>
										<input
											type="checkbox"
											id="passport"
											name="passport"
											value="passport"
											className="input-id"
											ref={passportRef}
											onClick={() => handleCheckboxRef('passport')}
										/>
										<span className="checkbox-custom"></span>
										<p className="pl-1.5 OpenSansRegular">Pasaporte</p>
									</label>
								</div>
								<input
									list="clients"
									name="insurance"
									id="insurance"
									placeholder="Ej: 453-4847840-5"
									className="border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default"
								/>
								<datalist id="clients">
									<option>123-456</option>
									<option>583-456</option>
									<option>785-456</option>
									<option>9583-456</option>
									<option>203-456</option>
								</datalist>
							</div>
						</div>
						<div className="col-span-3 ">
							<div className="flex flex-col">
								<label htmlFor="Seguro" className="text-base OpenSansLight pb-1">
									Seguro
								</label>
								<select
									name="insurances"
									id="insurances"
									className="border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default"
								>
									<option value="volvo">Universal</option>
									<option value="saab">Senasa</option>
									<option value="opel">Pepin</option>
									<option value="audi">Humano</option>
								</select>
							</div>
						</div>

						<div className="col-span-3 ">
							<label>
								<p className="text-base OpenSansLight pb-1">Nombre*</p>
								<input
									type="text"
									name="name"
									placeholder="Ej: Jose Perez"
									className="border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default"
								/>
							</label>
						</div>

						<div className="col-span-3 ">
							<label>
								<p className="text-base OpenSansLight pb-1">Celular</p>
								<input
									type="text"
									name="name"
									placeholder="Ej: 829-279-5852"
									className="border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default"
								/>
							</label>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-12 pt-14">
					<div className="col-span-3 ">1</div>
					<div className="col-span-3 ">2</div>
					<div className="col-span-3 ">
						<div className="flex items-center">
							<label>
								<p className="text-base OpenSansLight pb-1">Nacimiento y sexo</p>
								<input
									type="date"
									name="name"
									className="border-2	border-summerGreen-default rounded-md w-32 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default"
								/>
							</label>
							<div className="flex pb-2 pl-4 pt-7">
								<label htmlFor="femenine" className="checkbox-label   flex">
									<input
										type="checkbox"
										id="femenine"
										name="femenine"
										value="femenine"
										className="input-id"
										ref={femenineRef}
										onClick={() => handleCheckboxGenderRef('F')}
									/>
									<span className="checkbox-custom"></span>
									<p className="pl-1.5 OpenSansRegular">F</p>
								</label>
								<label htmlFor="masculine" className="checkbox-label flex pl-1.5">
									<input
										type="checkbox"
										id="masculine"
										name="masculine"
										value="masculine"
										className="input-id"
										ref={masculineRef}
										onClick={() => handleCheckboxGenderRef('M')}
									/>
									<span className="checkbox-custom"></span>
									<p className="pl-1.5 OpenSansRegular">M</p>
								</label>
							</div>
						</div>
					</div>
					<div className="col-span-3 ">4</div>
				</div>
				<div className="grid grid-cols-12">
					<div className="col-span-3 ">1</div>
					<div className="col-span-3 ">2</div>
					<div className="col-span-3 ">3</div>
					<div className="col-span-3 ">4</div>
				</div>
				<div className="grid grid-cols-12">
					<div className="col-span-3 ">1</div>
					<div className="col-span-3 ">2</div>
					<div className="col-span-3 ">3</div>
					<div className="col-span-3 ">4</div>
				</div>
				<div className="flex justify-end">
					<button className="cancel border-2 border-greySnuff-default rounded-lg w-32 h-11 text-grayStorm-default raleway-font font-medium text-base">
						CANCELAR
					</button>
					<button className="ml-5 text-white-section cancel w-32 h-11 raleway-font font-medium text-base rounded-lg  bg-azulMarino-default flex items-center justify-center">
						<svg
							width="15"
							height="14"
							viewBox="0 0 15 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="mr-2.5"
						>
							<path
								d="M5.60938 13.9453C6.19531 13.9453 6.64844 13.7266 6.96094 13.2656L13.8047 2.9375C14.0234 2.60938 14.1172 2.28125 14.1172 1.98438C14.1172 1.16406 13.4844 0.554688 12.6406 0.554688C12.0703 0.554688 11.7031 0.765625 11.3516 1.3125L5.57812 10.375L2.67969 6.91406C2.375 6.54688 2.02344 6.38281 1.53906 6.38281C0.695312 6.38281 0.0703125 6.99219 0.0703125 7.82031C0.0703125 8.19531 0.179688 8.5 0.5 8.86719L4.30469 13.3438C4.65625 13.7578 5.07031 13.9453 5.60938 13.9453Z"
								fill="white"
							/>
						</svg>
						GUARDAR
					</button>
				</div>
			</form>
		</div>
	);
}

export default ClientForm;
