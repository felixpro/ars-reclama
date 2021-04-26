import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum SexType {
  FEMENINO = "FEMENINO",
  MASCULINO = "MASCULINO"
}

export enum WaitListStatus {
  CONSULTA = "CONSULTA",
  ESPERA = "ESPERA"
}



export declare class Client {
  readonly id: string;
  readonly identificationCard?: string;
  readonly passport?: string;
  readonly affiliateNumber?: number;
  readonly name?: string;
  readonly cellphoneNumber?: string;
  readonly email?: string;
  readonly contractNumber?: number;
  readonly bornDate?: string;
  readonly sex?: SexType | keyof typeof SexType;
  readonly phoneNumber?: string;
  readonly admissionDate?: string;
  readonly addressStreet?: string;
  readonly addressNumber?: number;
  readonly neighborhood?: string;
  readonly city?: string;
  constructor(init: ModelInit<Client>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

export declare class WaitList {
  readonly id: string;
  readonly status?: WaitListStatus | keyof typeof WaitListStatus;
  readonly positionNumber?: number;
  constructor(init: ModelInit<WaitList>);
  static copyOf(source: WaitList, mutator: (draft: MutableModel<WaitList>) => MutableModel<WaitList> | void): WaitList;
}

export declare class Hospital {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<Hospital>);
  static copyOf(source: Hospital, mutator: (draft: MutableModel<Hospital>) => MutableModel<Hospital> | void): Hospital;
}

export declare class Doctor {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<Doctor>);
  static copyOf(source: Doctor, mutator: (draft: MutableModel<Doctor>) => MutableModel<Doctor> | void): Doctor;
}