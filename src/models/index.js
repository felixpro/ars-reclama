// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SexType = {
  "FEMENINO": "FEMENINO",
  "MASCULINO": "MASCULINO"
};

const WaitingListItemStatus = {
  "CONSULTA": "CONSULTA",
  "ESPERA": "ESPERA",
  "TERMINADA": "TERMINADA"
};

const { Client, HealthInsurance, WaitingList, WaitingListItem } = initSchema(schema);

export {
  Client,
  HealthInsurance,
  WaitingList,
  WaitingListItem,
  SexType,
  WaitingListItemStatus
};