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

const WaitingListItemStatus = {
  "CONSULTA": "CONSULTA",
  "ESPERA": "ESPERA",
  "TERMINADA": "TERMINADA"
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

const { Client, Doctor, Hospital, HospitalDoctor, HospitalDoctorCliente, WaitingListItem, Insurance, WaitList } = initSchema(schema);

export {
  Client,
  Doctor,
  Hospital,
  HospitalDoctor,
  HospitalDoctorCliente,
  WaitingListItem,
  Insurance,
  IdentificationTypes,
  SexType,
  WaitingListItemStatus,
  AffiliateTypes,
  WaitListStatus,
  WaitList
};