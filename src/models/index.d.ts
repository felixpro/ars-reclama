import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum IdentificationTypes {
  CEDULA = "CEDULA",
  PASAPORTE = "PASAPORTE"
}

export enum SexType {
  FEMENINO = "FEMENINO",
  MASCULINO = "MASCULINO"
}

export enum AffiliateTypes {
  PRINCIPAL = "PRINCIPAL",
  TITULAR = "TITULAR",
  DEPENDIENTE = "DEPENDIENTE",
  PARENTESCO = "PARENTESCO"
}

export enum WaitListStatus {
  CONSULTA = "CONSULTA",
  ESPERA = "ESPERA"
}



export declare class Client {
  readonly id: string;
  readonly identificationName?: IdentificationTypes | keyof typeof IdentificationTypes;
  readonly identificationData?: string;
  readonly name?: string;
  readonly cellphoneNumber?: string;
  readonly email?: string;
  readonly bornDate?: string;
  readonly sex?: SexType | keyof typeof SexType;
  readonly phoneNumber?: string;
  readonly addressStreet?: string;
  readonly city?: string;
  readonly sector?: string;
  readonly BloodType?: string;
  readonly company?: string;
  readonly Insurances?: (Insurance | null)[];
  readonly doctors?: (ClientDoctor | null)[];
  constructor(init: ModelInit<Client>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

export declare class Insurance {
  readonly id: string;
  readonly clientID?: string;
  readonly name: string;
  readonly contractNumber?: number;
  readonly affiliateNumber?: number;
  readonly affiliateType?: AffiliateTypes | keyof typeof AffiliateTypes;
  constructor(init: ModelInit<Insurance>);
  static copyOf(source: Insurance, mutator: (draft: MutableModel<Insurance>) => MutableModel<Insurance> | void): Insurance;
}

export declare class ClientDoctor {
  readonly id: string;
  readonly client: Client;
  readonly doctor: Doctor;
  constructor(init: ModelInit<ClientDoctor>);
  static copyOf(source: ClientDoctor, mutator: (draft: MutableModel<ClientDoctor>) => MutableModel<ClientDoctor> | void): ClientDoctor;
}

export declare class Doctor {
  readonly id: string;
  readonly name: string;
  readonly specialty?: string;
  readonly exequator?: string;
  readonly email?: string;
  readonly title?: string;
  readonly phone?: string;
  readonly password?: string;
  readonly clients?: (ClientDoctor | null)[];
  readonly hospitals?: (HospitalDoctor | null)[];
  constructor(init: ModelInit<Doctor>);
  static copyOf(source: Doctor, mutator: (draft: MutableModel<Doctor>) => MutableModel<Doctor> | void): Doctor;
}

export declare class HospitalDoctor {
  readonly id: string;
  readonly doctor: Doctor;
  readonly hospital: Hospital;
  constructor(init: ModelInit<HospitalDoctor>);
  static copyOf(source: HospitalDoctor, mutator: (draft: MutableModel<HospitalDoctor>) => MutableModel<HospitalDoctor> | void): HospitalDoctor;
}

export declare class Hospital {
  readonly id: string;
  readonly name: string;
  readonly phone?: string;
  readonly pssCode?: string;
  readonly rnc?: string;
  readonly doctors?: (HospitalDoctor | null)[];
  constructor(init: ModelInit<Hospital>);
  static copyOf(source: Hospital, mutator: (draft: MutableModel<Hospital>) => MutableModel<Hospital> | void): Hospital;
}

export declare class WaitList {
  readonly id: string;
  readonly status?: WaitListStatus | keyof typeof WaitListStatus;
  readonly positionNumber?: number;
  constructor(init: ModelInit<WaitList>);
  static copyOf(source: WaitList, mutator: (draft: MutableModel<WaitList>) => MutableModel<WaitList> | void): WaitList;
}