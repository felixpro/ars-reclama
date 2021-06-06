import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum SexType {
  FEMENINO = "FEMENINO",
  MASCULINO = "MASCULINO"
}

export enum WaitingListItemStatus {
  CONSULTA = "CONSULTA",
  ESPERA = "ESPERA",
  TERMINADA = "TERMINADA"
}



export declare class Client {
  readonly id: string;
  readonly identificationCard?: string;
  readonly passport?: string;
  readonly affiliateNumber?: number;
  readonly name: string;
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
  readonly bloodType?: string;
  readonly healthInsuranceId: string;
  readonly healthInsurance?: HealthInsurance;
  readonly profileImage?: string;
  constructor(init: ModelInit<Client>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

export declare class HealthInsurance {
  readonly id: string;
  readonly name: string;
  readonly imageName?: string;
  constructor(init: ModelInit<HealthInsurance>);
  static copyOf(source: HealthInsurance, mutator: (draft: MutableModel<HealthInsurance>) => MutableModel<HealthInsurance> | void): HealthInsurance;
}

export declare class WaitingList {
  readonly id: string;
  readonly createdAt?: string;
  readonly items?: (WaitingListItem | null)[];
  constructor(init: ModelInit<WaitingList>);
  static copyOf(source: WaitingList, mutator: (draft: MutableModel<WaitingList>) => MutableModel<WaitingList> | void): WaitingList;
}

export declare class WaitingListItem {
  readonly id: string;
  readonly waitingListID: string;
  readonly clientID: string;
  readonly client?: Client;
  readonly status: WaitingListItemStatus | keyof typeof WaitingListItemStatus;
  readonly positionNumber: number;
  constructor(init: ModelInit<WaitingListItem>);
  static copyOf(source: WaitingListItem, mutator: (draft: MutableModel<WaitingListItem>) => MutableModel<WaitingListItem> | void): WaitingListItem;
}