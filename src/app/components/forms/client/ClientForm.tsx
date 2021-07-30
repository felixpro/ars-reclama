import React, { FC,  useState, useEffect, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';

import { ClientsContext } from '../../../context/client-context';
import { DoctorsContext } from '../../../context/doctor-context';

import DropdownList from './DropdownList';
import AffiliateDropdown from './AffiliateDropdown';
import IdInput from './IdInput';

import { IclientForm } from './types.ts'

const ClientForm: FC<IclientForm> = ({ onCloseModal, existingClient }) => {
	const { createClient } = useContext(ClientsContext);
	const { actualDoctor } = useContext(DoctorsContext);

	const [untrackedValues, SetUntrackedValues] = useState({
		identification: { passport: false, id: true },
		gender: { femenine: false, masculine: false },
		bornDate: '',
		insuranceSelected: '',
		affiliateType: '',
	});

	const [formsValues, SetFormsValues] = useState({
		identificationData: '',
		name: '',
		cellphoneNumber: '',
		email: '',
		phoneNumber: '',
		addressStreet: '',
		city: '',
		sector: '',
		bloodType: '',
		company: '',
		affiliateNumber: '',
		contractNumber: '',
	});

	// Handle ID checkboxs
	const identificationRef: React.useRef<HTMLDivElement> = React.createRef();
	const passportRef: React.useRef<HTMLDivElement> = React.createRef();
	const handleCheckboxRef = (target: string) => {
		if (target === 'identification') {
			passportRef.current.checked = false;
			SetUntrackedValues({
				...untrackedValues,
				identification: { passport: false, id: true },
			});
		} else if (target === 'passport') {
			identificationRef.current.checked = false;
			SetUntrackedValues({
				...untrackedValues,
				identification: { passport: true, id: false },
			});
		}
	};

	// Handle gender checkboxs
	const masculineRef: React.useRef<HTMLDivElement> = React.createRef();
	const femenineRef: React.useRef<HTMLDivElement> = React.createRef();
	const handleCheckboxGenderRef = (target: string) => {
		if (target === 'M') {
			femenineRef.current.checked = false;
			SetUntrackedValues({
				...untrackedValues,
				gender: { femenine: false, masculine: true },
			});
		} else if (target === 'F') {
			masculineRef.current.checked = false;
			SetUntrackedValues({
				...untrackedValues,
				gender: { femenine: true, masculine: false },
			});
		}
	};

	const phoneNumberMask = [
		'(',
		/[1-9]/,
		/\d/,
		/\d/,
		')',
		' ',
		/\d/,
		/\d/,
		/\d/,
		'-',
		/\d/,
		/\d/,
		/\d/,
		/\d/,
	];

	useEffect(() => {
		// identification true as default
		identificationRef.current.checked = true;
	}, []);

	const validationSchema = Yup.object({
		name: Yup.string()
			.required('Campo requerido')
			.matches(/^[a-z0-9 ]+$/i, 'Solo Alfabetos permitidos A-W'),
		identificationData: Yup.string()
			.required('Campo requerido')
			.matches(/^[a-zA-Z0-9\s,._'-]{3,}$/, 'Solo puntos, comas y guiones permitidos'),
		cellphoneNumber: Yup.string().matches(
			/^[a-zA-Z0-9 \s,._ )('-]{3,}$/,
			'Solo puntos, comas y guiones permitidos'
		),
		email: Yup.string()
			.email()
			.matches(/^[a-zA-Z0-9\s,._)(@'-]{3,}$/, 'Solo puntos, comas y guiones permitidos'),
		phoneNumber: Yup.string().matches(
			/^[a-zA-Z0-9 \s,._ )('-]{3,}$/,
			'Solo puntos y comas permitidos'
		),
		addressStreet: Yup.string().matches(
			/^[a-zA-Z0-9 \s,._ )('-]{3,}$/,
			'Solo punto y coma permitidos'
		),
		city: Yup.string().matches(
			/^[a-zA-Z0-9 \s,._ )('-]{3,}$/,
			'Solo puntos, comas y guiones permitidos'
		),
		sector: Yup.string().matches(
			/^[a-zA-Z0-9 \s,._ )('-]{3,}$/,
			'Solo puntos, comas y guiones permitidos'
		),
		company: Yup.string().matches(
			/^[a-zA-Z0-9 \s,._ )('-]{3,}$/,
			'Solo puntos, comas y guiones permitidos'
		),
		affiliateNumber: Yup.string().matches(
			/^[a-zA-Z0-9 \s,._ )('-]{3,}$/,
			'Solo puntos y comas permitidos'
		),
		contractNumber: Yup.string().matches(
			/^[a-zA-Z0-9 \s,._ )('-]{3,}$/,
			'Solo puntos y comas permitidos'
		),
	});

	return (
		<Formik
			initialValues={formsValues}
			validationSchema={validationSchema}
			onSubmit={(values, { resetForm }) => {
				// update inputs that Formik cannot extract values
				const objValue = JSON.parse(JSON.stringify(values));
				const formValue = { ...JSON.parse(JSON.stringify(values)), ...untrackedValues };
				createClient(formValue);
			}}
		>
			<div className="client-form  pr-0 pl-24 pt-14 pb-14 2lg:pr-11 2lg:pl-20  1/2xl:pr-16 1/2xl:pl-24 ">
				<Form>
					<div className="pb-9">
						<div className="grid grid-cols-12">
							<div className="col-span-6">
								<h1 className="raleway-font font-medium text-blueLucki-default text-4xl">
									Crear cliente
								</h1>
							</div>
							<div className="col-span-6">
								<div className="flex justify-end">
									<DropdownList
										SetFormsValues={SetUntrackedValues}
										formsValues={untrackedValues}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="form-container">
						<div className="grid  grid-cols-9 gap-x-0 gap-y-0 2lg:grid-cols-12 items-baseline">
							<div className="col-span-3  pt-8 2lg:pt-14 ">
								<div className="relative top-0.5">
									<div className="flex pb-2">
										<label
											htmlFor="identification"
											className="checkbox-label flex"
										>
											<input
												type="checkbox"
												id="identification"
												name="identification"
												className="input-id "
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
												className="input-id"
												ref={passportRef}
												onClick={() => handleCheckboxRef('passport')}
											/>
											<span className="checkbox-custom"></span>
											<p className="pl-1.5 OpenSansRegular">Pasaporte</p>
										</label>
									</div>
									<IdInput
										SetFormsValues={SetFormsValues}
										formsValues={formsValues}
										untrackedValues={untrackedValues}
									/>
									<p className="text-red-default text-sm OpenSansRegular pt-1.5">
										<ErrorMessage name="identificationData" />
									</p>
								</div>
							</div>
							<div className="col-span-3  pt-8 2lg:pt-14 ">
								<div className="control">
									<p className="text-base OpenSansLight pb-1">Nombre*</p>
									<Field
										type="text"
										name="name"
										onKeyUp={(e) =>
											SetFormsValues({
												...formsValues,
												name: e.target.value,
											})
										}
										placeholder="Ej: Jose Perez"
										className="border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default bg-white-lilac"
									/>
									<p className="text-red-default text-sm OpenSansRegular">
										<ErrorMessage name="name" />
									</p>
								</div>
							</div>
							<div className="col-span-3  pt-8 2lg:pt-14 ">
								<div className="flex items-center">
									<div className="">
										<div className="date_input">
											<p className="text-base OpenSansLight pb-1">
												Nacimiento y sexo
											</p>
											<div className=" bg-white-lilac flex items-center  border-2 border-summerGreen-default rounded-md w-32 h-11 pl-2 pr-1 text-base OpenSansRegular text-osloGray-default">
												<svg
													width="19"
													height="18"
													viewBox="0 0 19 18"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="mr-2"
												>
													<path
														d="M3.30273 17.8945H15.959C17.9121 17.8945 18.8984 16.9082 18.8984 14.9746V3.70508C18.8984 1.78125 17.9121 0.794922 15.959 0.794922H3.30273C1.34961 0.794922 0.353516 1.77148 0.353516 3.70508V14.9746C0.353516 16.9082 1.34961 17.8945 3.30273 17.8945ZM3.21484 16.2832C2.4043 16.2832 1.96484 15.8633 1.96484 15.0137V6.38086C1.96484 5.54102 2.4043 5.11133 3.21484 5.11133H16.0371C16.8379 5.11133 17.2969 5.54102 17.2969 6.38086V15.0137C17.2969 15.8633 16.8379 16.2832 16.0371 16.2832H3.21484ZM7.83398 8.39258H8.37109C8.70312 8.39258 8.81055 8.29492 8.81055 7.96289V7.42578C8.81055 7.10352 8.70312 6.99609 8.37109 6.99609H7.83398C7.50195 6.99609 7.39453 7.10352 7.39453 7.42578V7.96289C7.39453 8.29492 7.50195 8.39258 7.83398 8.39258ZM10.8809 8.39258H11.4277C11.75 8.39258 11.8574 8.29492 11.8574 7.96289V7.42578C11.8574 7.10352 11.75 6.99609 11.4277 6.99609H10.8809C10.5586 6.99609 10.4512 7.10352 10.4512 7.42578V7.96289C10.4512 8.29492 10.5586 8.39258 10.8809 8.39258ZM13.9375 8.39258H14.4746C14.8066 8.39258 14.9141 8.29492 14.9141 7.96289V7.42578C14.9141 7.10352 14.8066 6.99609 14.4746 6.99609H13.9375C13.6055 6.99609 13.498 7.10352 13.498 7.42578V7.96289C13.498 8.29492 13.6055 8.39258 13.9375 8.39258ZM4.77734 11.3906H5.32422C5.64648 11.3906 5.75391 11.293 5.75391 10.9707V10.4238C5.75391 10.1016 5.64648 10.0039 5.32422 10.0039H4.77734C4.45508 10.0039 4.34766 10.1016 4.34766 10.4238V10.9707C4.34766 11.293 4.45508 11.3906 4.77734 11.3906ZM7.83398 11.3906H8.37109C8.70312 11.3906 8.81055 11.293 8.81055 10.9707V10.4238C8.81055 10.1016 8.70312 10.0039 8.37109 10.0039H7.83398C7.50195 10.0039 7.39453 10.1016 7.39453 10.4238V10.9707C7.39453 11.293 7.50195 11.3906 7.83398 11.3906ZM10.8809 11.3906H11.4277C11.75 11.3906 11.8574 11.293 11.8574 10.9707V10.4238C11.8574 10.1016 11.75 10.0039 11.4277 10.0039H10.8809C10.5586 10.0039 10.4512 10.1016 10.4512 10.4238V10.9707C10.4512 11.293 10.5586 11.3906 10.8809 11.3906ZM13.9375 11.3906H14.4746C14.8066 11.3906 14.9141 11.293 14.9141 10.9707V10.4238C14.9141 10.1016 14.8066 10.0039 14.4746 10.0039H13.9375C13.6055 10.0039 13.498 10.1016 13.498 10.4238V10.9707C13.498 11.293 13.6055 11.3906 13.9375 11.3906ZM4.77734 14.3984H5.32422C5.64648 14.3984 5.75391 14.3008 5.75391 13.9785V13.4316C5.75391 13.1094 5.64648 13.0117 5.32422 13.0117H4.77734C4.45508 13.0117 4.34766 13.1094 4.34766 13.4316V13.9785C4.34766 14.3008 4.45508 14.3984 4.77734 14.3984ZM7.83398 14.3984H8.37109C8.70312 14.3984 8.81055 14.3008 8.81055 13.9785V13.4316C8.81055 13.1094 8.70312 13.0117 8.37109 13.0117H7.83398C7.50195 13.0117 7.39453 13.1094 7.39453 13.4316V13.9785C7.39453 14.3008 7.50195 14.3984 7.83398 14.3984ZM10.8809 14.3984H11.4277C11.75 14.3984 11.8574 14.3008 11.8574 13.9785V13.4316C11.8574 13.1094 11.75 13.0117 11.4277 13.0117H10.8809C10.5586 13.0117 10.4512 13.1094 10.4512 13.4316V13.9785C10.4512 14.3008 10.5586 14.3984 10.8809 14.3984Z"
														fill="#80868B"
													/>
												</svg>

												<input
													type="date"
													name="bornDate"
													onChange={(e) =>
														SetUntrackedValues({
															...untrackedValues,
															bornDate: e.target.value,
														})
													}
													className="bg-white-lilac h-full w-full flex justify-center OpenSansRegular text-sm"
												/>
											</div>
										</div>
									</div>

									<div className="flex pb-2 pl-3 pt-7">
										<label htmlFor="femenine" className="checkbox-label   flex">
											<input
												type="checkbox"
												name="femenine"
												id="femenine"
												value="femenine"
												className="input-id "
												ref={femenineRef}
												onClick={() => handleCheckboxGenderRef('F')}
											/>
											<span className="checkbox-custom"></span>
											<p className="pl-1.5 OpenSansRegular">F</p>
										</label>
										<label
											htmlFor="masculine"
											className="checkbox-label flex pl-1.5"
										>
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
							<div className="col-span-3  pt-8 2lg:pt-14 ">
								<label>
									<p className="text-base OpenSansLight pb-1">Celular</p>
									<Field
										name="cellphoneNumber"
										render={({ field }) => (
											<MaskedInput
												{...field}
												mask={phoneNumberMask}
												placeholder="Ej: (829) 230-1846"
												onKeyUp={(e) =>
													SetFormsValues({
														...formsValues,
														cellphoneNumber: e.target.value,
													})
												}
												className="bg-white-lilac border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default"
											/>
										)}
									/>
									<p className="text-red-default text-sm OpenSansRegular pt-1.5">
										<ErrorMessage name="cellphoneNumber" />
									</p>
								</label>
							</div>

							{untrackedValues.insuranceSelected === 'Sin seguro' ? null : (
								<div className="col-span-3  pt-8 2lg:pt-14 control">
									<label>
										<p className="text-base OpenSansLight pb-1">
											No. de Afiliado*
										</p>
										<Field
											type="number"
											name="affiliateNumber"
											onKeyUp={(e) =>
												SetFormsValues({
													...formsValues,
													affiliateNumber: e.target.value,
												})
											}
											placeholder="Ej: 4563523"
											className="bg-white-lilac border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default"
										/>
										<p className="text-red-default text-sm OpenSansRegular pt-1.5">
											<ErrorMessage name="affiliateNumber" />
										</p>
									</label>
								</div>
							)}
							{untrackedValues.insuranceSelected === 'Sin seguro' ? null : (
								<div className="col-span-3  pt-8 2lg:pt-14 ">
									<div>
										<p className="text-base OpenSansLight pb-1">
											Tipo de Afiliado
										</p>
										<AffiliateDropdown
											SetFormsValues={SetUntrackedValues}
											formsValues={untrackedValues}
										/>
										<p className="text-red-default text-sm OpenSansRegular pt-1.5">
											<ErrorMessage name="affiliateType" />
										</p>
									</div>
								</div>
							)}
							{untrackedValues.insuranceSelected === 'Sin seguro' ? null : (
								<div className="col-span-3  pt-8 2lg:pt-14 ">
									<div>
										<label>
											<p className="text-base OpenSansLight pb-1">
												No. de Contrato*
											</p>
											<Field
												type="number"
												name="contractNumber"
												onKeyUp={(e) =>
													SetFormsValues({
														...formsValues,
														contractNumber: e.target.value,
													})
												}
												placeholder="Ej: 829-279-5852"
												className="bg-white-lilac border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default"
											/>
										</label>
										<p className="text-red-default text-sm OpenSansRegular pt-1.5">
											<ErrorMessage name="contractNumber" />
										</p>
									</div>
								</div>
							)}
							<div className="col-span-3  pt-8 2lg:pt-14 ">
								<div>
									<label>
										<p className="text-base OpenSansLight pb-1">Corréo</p>
										<Field
											type="email"
											name="email"
											onKeyUp={(e) =>
												SetFormsValues({
													...formsValues,
													email: e.target.value,
												})
											}
											placeholder="Ej: jose@gmail.com"
											className="bg-white-lilac border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default"
										/>
									</label>
									<p className="text-red-default text-sm OpenSansRegular pt-1.5">
										<ErrorMessage name="email" />
									</p>
								</div>
							</div>
							<div className="col-span-3  pt-8 2lg:pt-14 ">
								<div>
									<label>
										<p className="text-base OpenSansLight pb-1">
											Calle y número
										</p>
										<Field
											type="text"
											name="addressStreet"
											onKeyUp={(e) =>
												SetFormsValues({
													...formsValues,
													addressStreet: e.target.value,
												})
											}
											placeholder="Ej: Calle Primera, No. 23"
											className="bg-white-lilac border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default"
										/>
									</label>
									<p className="text-red-default text-sm OpenSansRegular pt-1.5">
										<ErrorMessage name="addressStreet" />
									</p>
								</div>
							</div>
							<div className="col-span-3  pt-8 2lg:pt-14 ">
								<div>
									<label>
										<p className="text-base OpenSansLight pb-1">Sector</p>
										<Field
											type="text"
											name="sector"
											onKeyUp={(e) =>
												SetFormsValues({
													...formsValues,
													sector: e.target.value,
												})
											}
											placeholder="Ej: Cancino Adentro"
											className="bg-white-lilac border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default"
										/>
									</label>
									<p className="text-red-default text-sm OpenSansRegular pt-1.5">
										<ErrorMessage name="sector" />
									</p>
								</div>
							</div>
							<div className="col-span-3  pt-8 2lg:pt-14 ">
								<div>
									<label>
										<p className="text-base OpenSansLight pb-1">Ciudad</p>
										<Field
											type="text"
											name="city"
											onKeyUp={(e) =>
												SetFormsValues({
													...formsValues,
													city: e.target.value,
												})
											}
											placeholder="Ej: Santo Domingo"
											className="bg-white-lilac border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default"
										/>
									</label>
									<p className="text-red-default text-sm OpenSansRegular pt-1.5">
										<ErrorMessage name="city" />
									</p>
								</div>
							</div>
							<div className="col-span-3  pt-8 2lg:pt-14 ">
								<div>
									<label>
										<p className="text-base OpenSansLight pb-1">Teléfono</p>
										<Field
											name="phoneNumber"
											render={({ field }) => (
												<MaskedInput
													{...field}
													mask={phoneNumberMask}
													placeholder="Ej: (829) 230-1846"
													onKeyUp={(e) =>
														SetFormsValues({
															...formsValues,
															phoneNumber: e.target.value,
														})
													}
													className="bg-white-lilac border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default"
												/>
											)}
										/>
									</label>
									<p className="text-red-default text-sm OpenSansRegular pt-1.5">
										<ErrorMessage name="phoneNumber" />
									</p>
								</div>
							</div>
							<div className="col-span-3  pt-8 2lg:pt-14 ">
								<div>
									<label>
										<p className="text-base OpenSansLight pb-1">
											Tipo de Sangre
										</p>
										<Field
											type="text"
											name="BloodType"
											onKeyUp={(e) =>
												SetFormsValues({
													...formsValues,
													bloodType: e.target.value,
												})
											}
											placeholder="Ej: B+"
											className="bg-white-lilac border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default"
										/>
									</label>
									<p className="text-red-default text-sm OpenSansRegular pt-1.5">
										<ErrorMessage name="BloodType" />
									</p>
								</div>
							</div>
							<div className="col-span-3  pt-8 2lg:pt-14 ">
								<div>
									<label>
										<p className="text-base OpenSansLight pb-1">Empresa</p>
										<Field
											type="text"
											name="company"
											onKeyUp={(e) =>
												SetFormsValues({
													...formsValues,
													company: e.target.value,
												})
											}
											placeholder="Ej: Tesla"
											className="bg-white-lilac border-2	border-summerGreen-default rounded-md w-56 h-11 pl-4 pr-7 text-base OpenSansRegular text-osloGray-default"
										/>
									</label>
									<p className="text-red-default text-sm OpenSansRegular pt-1.5">
										<ErrorMessage name="company" />
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between pt-16">
						<div className="flex items-center">
							<p className="raleway-font text-base">
								<b>Agregando a:</b> {actualDoctor && actualDoctor.name}
							</p>
						</div>
						<div className="flex">
							<button
								className="cancel border-2 border-greySnuff-default rounded-lg w-32 h-11 text-grayStorm-default raleway-font font-medium text-base"
								onClick={() => onCloseModal(false)}
							>
								CANCELAR
							</button>
							<button
								type="submit"
								className="ml-5 text-white-section cancel w-32 h-11 raleway-font font-medium text-base rounded-lg  bg-azulMarino-default flex items-center justify-center"
							>
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
					</div>
				</Form>
			</div>
		</Formik>
	);
};

export default ClientForm;
