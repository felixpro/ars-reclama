// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SexType = {
  "FEMENINO": "FEMENINO",
  "MASCULINO": "MASCULINO"
};

const WaitListStatus = {
  "CONSULTA": "CONSULTA",
  "ESPERA": "ESPERA"
};

const { Client, WaitList, Hospital, Doctor } = initSchema(schema);

export {
  Client,
  WaitList,
  Hospital,
  Doctor,
  SexType,
  WaitListStatus
};