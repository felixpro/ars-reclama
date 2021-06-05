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

const { Client, Insurance, ClientDoctor, Doctor, HospitalDoctor, Hospital, WaitList } = initSchema(schema);

export {
  Client,
  Insurance,
  ClientDoctor,
  Doctor,
  HospitalDoctor,
  Hospital,
  WaitList,
  IdentificationTypes,
  SexType,
  AffiliateTypes,
  WaitListStatus
};