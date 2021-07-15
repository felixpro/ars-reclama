// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const IdentificationTypes = {
  "CEDULA": "CEDULA",
  "PASAPORTE": "PASAPORTE"
};

const SexType = {
  "FEMENINO": "FEMENINO",
  "MASCULINO": "MASCULINO"
};

const AffiliateTypes = {
  "PRINCIPAL": "PRINCIPAL",
  "TITULAR": "TITULAR",
  "DEPENDIENTE": "DEPENDIENTE",
  "PARENTESCO": "PARENTESCO"
};

const WaitListStatus = {
  "CONSULTA": "CONSULTA",
  "ESPERA": "ESPERA"
};

const { Client, Insurance, HospitalDoctorCliente, HospitalDoctor, Doctor, Hospital, WaitList } = initSchema(schema);

export {
  Client,
  Insurance,
  HospitalDoctorCliente,
  HospitalDoctor,
  Doctor,
  Hospital,
  WaitList,
  IdentificationTypes,
  SexType,
  AffiliateTypes,
  WaitListStatus
};