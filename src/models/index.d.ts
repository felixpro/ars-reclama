import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum IdentificationTypes {
  CEDULA = "CEDULA",
  PASAPORTE = "PASAPORTE"
}

export enum SexType {
  FEMENINO = "FEMENINO",
  MASCULINO = "MASCULINO"
}

export enum WaitingListItemStatus {
  CONSULTA = "CONSULTA",
  ESPERA = "ESPERA",
  TERMINADA = "TERMINADA"
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
  readonly actualInssurance?: string;
  readonly name: string;
  readonly cellphoneNumber?: string;
  readonly email?: string;
  readonly bornDate?: string;
  readonly gender?: SexType | keyof typeof SexType;
  readonly phoneNumber?: string;
  readonly addressStreet?: string;
  readonly addressNumber?: number;
  readonly city?: string;
  readonly sector?: string;
  readonly bloodType?: string;
  readonly company?: string;
  readonly profileImage?: string;
  constructor(init: ModelInit<Client>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
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
  constructor(init: ModelInit<Doctor>);
  static copyOf(source: Doctor, mutator: (draft: MutableModel<Doctor>) => MutableModel<Doctor> | void): Doctor;
}

export declare class Hospital {
  readonly id: string;
  readonly name: string;
  readonly phone?: string;
  readonly pssCode?: string;
  readonly rnc?: string;
  constructor(init: ModelInit<Hospital>);
  static copyOf(source: Hospital, mutator: (draft: MutableModel<Hospital>) => MutableModel<Hospital> | void): Hospital;
}

export declare class HospitalDoctor {
  readonly id: string;
  readonly doctorID: string;
  readonly hospitalID: string;
  readonly lastWaitingListID: string;
  constructor(init: ModelInit<HospitalDoctor>);
  static copyOf(source: HospitalDoctor, mutator: (draft: MutableModel<HospitalDoctor>) => MutableModel<HospitalDoctor> | void): HospitalDoctor;
}

export declare class HospitalDoctorCliente {
  readonly id: string;
  readonly clientID: string;
  readonly hospitalDoctorID: string;
  readonly lastHealthInsurranceID: string;
  constructor(init: ModelInit<HospitalDoctorCliente>);
  static copyOf(source: HospitalDoctorCliente, mutator: (draft: MutableModel<HospitalDoctorCliente>) => MutableModel<HospitalDoctorCliente> | void): HospitalDoctorCliente;
}

export declare class WaitList {
  readonly id: string;
  readonly hospitalDoctorID: string;
  readonly createdAt?: string;
  constructor(init: ModelInit<WaitList>);
  static copyOf(source: WaitList, mutator: (draft: MutableModel<WaitList>) => MutableModel<WaitList> | void): WaitList;
}

export declare class WaitingListItem {
  readonly id: string;
  readonly waitingListID: string;
  readonly clientID: string;
  readonly status: WaitingListItemStatus | keyof typeof WaitingListItemStatus;
  readonly positionNumber: number;
  constructor(init: ModelInit<WaitingListItem>);
  static copyOf(source: WaitingListItem, mutator: (draft: MutableModel<WaitingListItem>) => MutableModel<WaitingListItem> | void): WaitingListItem;
}

export declare class Insurance {
  readonly id: string;
  readonly name: string;
  readonly contractNumber?: number;
  readonly affiliateNumber?: number;
  readonly affiliateType?: AffiliateTypes | keyof typeof AffiliateTypes;
  readonly imageName?: string;
  constructor(init: ModelInit<Insurance>);
  static copyOf(source: Insurance, mutator: (draft: MutableModel<Insurance>) => MutableModel<Insurance> | void): Insurance;
}