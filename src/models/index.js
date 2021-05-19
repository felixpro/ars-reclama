// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SexType = {
  "FEMENINO": "FEMENINO",
  "MASCULINO": "MASCULINO"
};

const WaitingListStatus = {
  "CONSULTA": "CONSULTA",
  "ESPERA": "ESPERA",
  "TERMINADA": "TERMINADA"
};

const { Client, WaitingList, HealthInsurance } = initSchema(schema);

export {
  Client,
  WaitingList,
  SexType,
  WaitingListStatus,
  HealthInsurance
};