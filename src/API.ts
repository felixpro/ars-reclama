/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateClientInput = {
  id?: string | null,
  identificationCard?: string | null,
  passport?: string | null,
  affiliateNumber?: number | null,
  name?: string | null,
  cellphoneNumber?: string | null,
  email?: string | null,
  contractNumber?: number | null,
  bornDate?: string | null,
  sex?: SexType | null,
  phoneNumber?: string | null,
  admissionDate?: string | null,
  addressStreet?: string | null,
  addressNumber?: number | null,
  neighborhood?: string | null,
  city?: string | null,
  bloodType?: string | null,
  healthInsurance?: HealthInsuranceInput | null,
  profileImage?: string | null,
  _version?: number | null,
};

export enum SexType {
  FEMENINO = "FEMENINO",
  MASCULINO = "MASCULINO",
}


export type HealthInsuranceInput = {
  id: string,
  name?: string | null,
  imageName?: string | null,
};

export type ModelClientConditionInput = {
  identificationCard?: ModelStringInput | null,
  passport?: ModelStringInput | null,
  affiliateNumber?: ModelIntInput | null,
  name?: ModelStringInput | null,
  cellphoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  contractNumber?: ModelIntInput | null,
  bornDate?: ModelStringInput | null,
  sex?: ModelSexTypeInput | null,
  phoneNumber?: ModelStringInput | null,
  admissionDate?: ModelStringInput | null,
  addressStreet?: ModelStringInput | null,
  addressNumber?: ModelIntInput | null,
  neighborhood?: ModelStringInput | null,
  city?: ModelStringInput | null,
  bloodType?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  and?: Array< ModelClientConditionInput | null > | null,
  or?: Array< ModelClientConditionInput | null > | null,
  not?: ModelClientConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelSexTypeInput = {
  eq?: SexType | null,
  ne?: SexType | null,
};

export type Client = {
  __typename: "Client",
  id: string,
  identificationCard?: string | null,
  passport?: string | null,
  affiliateNumber?: number | null,
  name?: string | null,
  cellphoneNumber?: string | null,
  email?: string | null,
  contractNumber?: number | null,
  bornDate?: string | null,
  sex?: SexType | null,
  phoneNumber?: string | null,
  admissionDate?: string | null,
  addressStreet?: string | null,
  addressNumber?: number | null,
  neighborhood?: string | null,
  city?: string | null,
  bloodType?: string | null,
  healthInsurance?: HealthInsurance | null,
  profileImage?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type HealthInsurance = {
  __typename: "HealthInsurance",
  id: string,
  name?: string | null,
  imageName?: string | null,
};

export type UpdateClientInput = {
  id: string,
  identificationCard?: string | null,
  passport?: string | null,
  affiliateNumber?: number | null,
  name?: string | null,
  cellphoneNumber?: string | null,
  email?: string | null,
  contractNumber?: number | null,
  bornDate?: string | null,
  sex?: SexType | null,
  phoneNumber?: string | null,
  admissionDate?: string | null,
  addressStreet?: string | null,
  addressNumber?: number | null,
  neighborhood?: string | null,
  city?: string | null,
  bloodType?: string | null,
  healthInsurance?: HealthInsuranceInput | null,
  profileImage?: string | null,
  _version?: number | null,
};

export type DeleteClientInput = {
  id: string,
  _version?: number | null,
};

export type CreateWaitingListInput = {
  id?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type ModelWaitingListConditionInput = {
  createdAt?: ModelStringInput | null,
  and?: Array< ModelWaitingListConditionInput | null > | null,
  or?: Array< ModelWaitingListConditionInput | null > | null,
  not?: ModelWaitingListConditionInput | null,
};

export type WaitingList = {
  __typename: "WaitingList",
  id: string,
  createdAt?: string | null,
  items?: ModelWaitingListItemConnection | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  updatedAt: string,
};

export type ModelWaitingListItemConnection = {
  __typename: "ModelWaitingListItemConnection",
  items?:  Array<WaitingListItem | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type WaitingListItem = {
  __typename: "WaitingListItem",
  id: string,
  waitingListID: string,
  clientID: string,
  client?: Client | null,
  status: WaitingListItemStatus,
  positionNumber: number,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export enum WaitingListItemStatus {
  CONSULTA = "CONSULTA",
  ESPERA = "ESPERA",
  TERMINADA = "TERMINADA",
}


export type UpdateWaitingListInput = {
  id: string,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteWaitingListInput = {
  id: string,
  _version?: number | null,
};

export type CreateWaitingListItemInput = {
  id?: string | null,
  waitingListID: string,
  clientID: string,
  status: WaitingListItemStatus,
  positionNumber: number,
  _version?: number | null,
};

export type ModelWaitingListItemConditionInput = {
  waitingListID?: ModelIDInput | null,
  clientID?: ModelIDInput | null,
  status?: ModelWaitingListItemStatusInput | null,
  positionNumber?: ModelIntInput | null,
  and?: Array< ModelWaitingListItemConditionInput | null > | null,
  or?: Array< ModelWaitingListItemConditionInput | null > | null,
  not?: ModelWaitingListItemConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelWaitingListItemStatusInput = {
  eq?: WaitingListItemStatus | null,
  ne?: WaitingListItemStatus | null,
};

export type UpdateWaitingListItemInput = {
  id: string,
  waitingListID?: string | null,
  clientID?: string | null,
  status?: WaitingListItemStatus | null,
  positionNumber?: number | null,
  _version?: number | null,
};

export type DeleteWaitingListItemInput = {
  id: string,
  _version?: number | null,
};

export type ModelClientFilterInput = {
  id?: ModelIDInput | null,
  identificationCard?: ModelStringInput | null,
  passport?: ModelStringInput | null,
  affiliateNumber?: ModelIntInput | null,
  name?: ModelStringInput | null,
  cellphoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  contractNumber?: ModelIntInput | null,
  bornDate?: ModelStringInput | null,
  sex?: ModelSexTypeInput | null,
  phoneNumber?: ModelStringInput | null,
  admissionDate?: ModelStringInput | null,
  addressStreet?: ModelStringInput | null,
  addressNumber?: ModelIntInput | null,
  neighborhood?: ModelStringInput | null,
  city?: ModelStringInput | null,
  bloodType?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  and?: Array< ModelClientFilterInput | null > | null,
  or?: Array< ModelClientFilterInput | null > | null,
  not?: ModelClientFilterInput | null,
};

export type ModelClientConnection = {
  __typename: "ModelClientConnection",
  items?:  Array<Client | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWaitingListFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelWaitingListFilterInput | null > | null,
  or?: Array< ModelWaitingListFilterInput | null > | null,
  not?: ModelWaitingListFilterInput | null,
};

export type ModelWaitingListConnection = {
  __typename: "ModelWaitingListConnection",
  items?:  Array<WaitingList | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWaitingListItemFilterInput = {
  id?: ModelIDInput | null,
  waitingListID?: ModelIDInput | null,
  clientID?: ModelIDInput | null,
  status?: ModelWaitingListItemStatusInput | null,
  positionNumber?: ModelIntInput | null,
  and?: Array< ModelWaitingListItemFilterInput | null > | null,
  or?: Array< ModelWaitingListItemFilterInput | null > | null,
  not?: ModelWaitingListItemFilterInput | null,
};

export type CreateClientMutationVariables = {
  input: CreateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type CreateClientMutation = {
  createClient?:  {
    __typename: "Client",
    id: string,
    identificationCard?: string | null,
    passport?: string | null,
    affiliateNumber?: number | null,
    name?: string | null,
    cellphoneNumber?: string | null,
    email?: string | null,
    contractNumber?: number | null,
    bornDate?: string | null,
    sex?: SexType | null,
    phoneNumber?: string | null,
    admissionDate?: string | null,
    addressStreet?: string | null,
    addressNumber?: number | null,
    neighborhood?: string | null,
    city?: string | null,
    bloodType?: string | null,
    healthInsurance?:  {
      __typename: "HealthInsurance",
      id: string,
      name?: string | null,
      imageName?: string | null,
    } | null,
    profileImage?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClientMutationVariables = {
  input: UpdateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type UpdateClientMutation = {
  updateClient?:  {
    __typename: "Client",
    id: string,
    identificationCard?: string | null,
    passport?: string | null,
    affiliateNumber?: number | null,
    name?: string | null,
    cellphoneNumber?: string | null,
    email?: string | null,
    contractNumber?: number | null,
    bornDate?: string | null,
    sex?: SexType | null,
    phoneNumber?: string | null,
    admissionDate?: string | null,
    addressStreet?: string | null,
    addressNumber?: number | null,
    neighborhood?: string | null,
    city?: string | null,
    bloodType?: string | null,
    healthInsurance?:  {
      __typename: "HealthInsurance",
      id: string,
      name?: string | null,
      imageName?: string | null,
    } | null,
    profileImage?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClientMutationVariables = {
  input: DeleteClientInput,
  condition?: ModelClientConditionInput | null,
};

export type DeleteClientMutation = {
  deleteClient?:  {
    __typename: "Client",
    id: string,
    identificationCard?: string | null,
    passport?: string | null,
    affiliateNumber?: number | null,
    name?: string | null,
    cellphoneNumber?: string | null,
    email?: string | null,
    contractNumber?: number | null,
    bornDate?: string | null,
    sex?: SexType | null,
    phoneNumber?: string | null,
    admissionDate?: string | null,
    addressStreet?: string | null,
    addressNumber?: number | null,
    neighborhood?: string | null,
    city?: string | null,
    bloodType?: string | null,
    healthInsurance?:  {
      __typename: "HealthInsurance",
      id: string,
      name?: string | null,
      imageName?: string | null,
    } | null,
    profileImage?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWaitingListMutationVariables = {
  input: CreateWaitingListInput,
  condition?: ModelWaitingListConditionInput | null,
};

export type CreateWaitingListMutation = {
  createWaitingList?:  {
    __typename: "WaitingList",
    id: string,
    createdAt?: string | null,
    items?:  {
      __typename: "ModelWaitingListItemConnection",
      items?:  Array< {
        __typename: "WaitingListItem",
        id: string,
        waitingListID: string,
        clientID: string,
        status: WaitingListItemStatus,
        positionNumber: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type UpdateWaitingListMutationVariables = {
  input: UpdateWaitingListInput,
  condition?: ModelWaitingListConditionInput | null,
};

export type UpdateWaitingListMutation = {
  updateWaitingList?:  {
    __typename: "WaitingList",
    id: string,
    createdAt?: string | null,
    items?:  {
      __typename: "ModelWaitingListItemConnection",
      items?:  Array< {
        __typename: "WaitingListItem",
        id: string,
        waitingListID: string,
        clientID: string,
        status: WaitingListItemStatus,
        positionNumber: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type DeleteWaitingListMutationVariables = {
  input: DeleteWaitingListInput,
  condition?: ModelWaitingListConditionInput | null,
};

export type DeleteWaitingListMutation = {
  deleteWaitingList?:  {
    __typename: "WaitingList",
    id: string,
    createdAt?: string | null,
    items?:  {
      __typename: "ModelWaitingListItemConnection",
      items?:  Array< {
        __typename: "WaitingListItem",
        id: string,
        waitingListID: string,
        clientID: string,
        status: WaitingListItemStatus,
        positionNumber: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type CreateWaitingListItemMutationVariables = {
  input: CreateWaitingListItemInput,
  condition?: ModelWaitingListItemConditionInput | null,
};

export type CreateWaitingListItemMutation = {
  createWaitingListItem?:  {
    __typename: "WaitingListItem",
    id: string,
    waitingListID: string,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      identificationCard?: string | null,
      passport?: string | null,
      affiliateNumber?: number | null,
      name?: string | null,
      cellphoneNumber?: string | null,
      email?: string | null,
      contractNumber?: number | null,
      bornDate?: string | null,
      sex?: SexType | null,
      phoneNumber?: string | null,
      admissionDate?: string | null,
      addressStreet?: string | null,
      addressNumber?: number | null,
      neighborhood?: string | null,
      city?: string | null,
      bloodType?: string | null,
      healthInsurance?:  {
        __typename: "HealthInsurance",
        id: string,
        name?: string | null,
        imageName?: string | null,
      } | null,
      profileImage?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: WaitingListItemStatus,
    positionNumber: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWaitingListItemMutationVariables = {
  input: UpdateWaitingListItemInput,
  condition?: ModelWaitingListItemConditionInput | null,
};

export type UpdateWaitingListItemMutation = {
  updateWaitingListItem?:  {
    __typename: "WaitingListItem",
    id: string,
    waitingListID: string,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      identificationCard?: string | null,
      passport?: string | null,
      affiliateNumber?: number | null,
      name?: string | null,
      cellphoneNumber?: string | null,
      email?: string | null,
      contractNumber?: number | null,
      bornDate?: string | null,
      sex?: SexType | null,
      phoneNumber?: string | null,
      admissionDate?: string | null,
      addressStreet?: string | null,
      addressNumber?: number | null,
      neighborhood?: string | null,
      city?: string | null,
      bloodType?: string | null,
      healthInsurance?:  {
        __typename: "HealthInsurance",
        id: string,
        name?: string | null,
        imageName?: string | null,
      } | null,
      profileImage?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: WaitingListItemStatus,
    positionNumber: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWaitingListItemMutationVariables = {
  input: DeleteWaitingListItemInput,
  condition?: ModelWaitingListItemConditionInput | null,
};

export type DeleteWaitingListItemMutation = {
  deleteWaitingListItem?:  {
    __typename: "WaitingListItem",
    id: string,
    waitingListID: string,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      identificationCard?: string | null,
      passport?: string | null,
      affiliateNumber?: number | null,
      name?: string | null,
      cellphoneNumber?: string | null,
      email?: string | null,
      contractNumber?: number | null,
      bornDate?: string | null,
      sex?: SexType | null,
      phoneNumber?: string | null,
      admissionDate?: string | null,
      addressStreet?: string | null,
      addressNumber?: number | null,
      neighborhood?: string | null,
      city?: string | null,
      bloodType?: string | null,
      healthInsurance?:  {
        __typename: "HealthInsurance",
        id: string,
        name?: string | null,
        imageName?: string | null,
      } | null,
      profileImage?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: WaitingListItemStatus,
    positionNumber: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncClientsQueryVariables = {
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncClientsQuery = {
  syncClients?:  {
    __typename: "ModelClientConnection",
    items?:  Array< {
      __typename: "Client",
      id: string,
      identificationCard?: string | null,
      passport?: string | null,
      affiliateNumber?: number | null,
      name?: string | null,
      cellphoneNumber?: string | null,
      email?: string | null,
      contractNumber?: number | null,
      bornDate?: string | null,
      sex?: SexType | null,
      phoneNumber?: string | null,
      admissionDate?: string | null,
      addressStreet?: string | null,
      addressNumber?: number | null,
      neighborhood?: string | null,
      city?: string | null,
      bloodType?: string | null,
      healthInsurance?:  {
        __typename: "HealthInsurance",
        id: string,
        name?: string | null,
        imageName?: string | null,
      } | null,
      profileImage?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetClientQueryVariables = {
  id: string,
};

export type GetClientQuery = {
  getClient?:  {
    __typename: "Client",
    id: string,
    identificationCard?: string | null,
    passport?: string | null,
    affiliateNumber?: number | null,
    name?: string | null,
    cellphoneNumber?: string | null,
    email?: string | null,
    contractNumber?: number | null,
    bornDate?: string | null,
    sex?: SexType | null,
    phoneNumber?: string | null,
    admissionDate?: string | null,
    addressStreet?: string | null,
    addressNumber?: number | null,
    neighborhood?: string | null,
    city?: string | null,
    bloodType?: string | null,
    healthInsurance?:  {
      __typename: "HealthInsurance",
      id: string,
      name?: string | null,
      imageName?: string | null,
    } | null,
    profileImage?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClientsQueryVariables = {
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientsQuery = {
  listClients?:  {
    __typename: "ModelClientConnection",
    items?:  Array< {
      __typename: "Client",
      id: string,
      identificationCard?: string | null,
      passport?: string | null,
      affiliateNumber?: number | null,
      name?: string | null,
      cellphoneNumber?: string | null,
      email?: string | null,
      contractNumber?: number | null,
      bornDate?: string | null,
      sex?: SexType | null,
      phoneNumber?: string | null,
      admissionDate?: string | null,
      addressStreet?: string | null,
      addressNumber?: number | null,
      neighborhood?: string | null,
      city?: string | null,
      bloodType?: string | null,
      healthInsurance?:  {
        __typename: "HealthInsurance",
        id: string,
        name?: string | null,
        imageName?: string | null,
      } | null,
      profileImage?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWaitingListsQueryVariables = {
  filter?: ModelWaitingListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWaitingListsQuery = {
  syncWaitingLists?:  {
    __typename: "ModelWaitingListConnection",
    items?:  Array< {
      __typename: "WaitingList",
      id: string,
      createdAt?: string | null,
      items?:  {
        __typename: "ModelWaitingListItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWaitingListQueryVariables = {
  id: string,
};

export type GetWaitingListQuery = {
  getWaitingList?:  {
    __typename: "WaitingList",
    id: string,
    createdAt?: string | null,
    items?:  {
      __typename: "ModelWaitingListItemConnection",
      items?:  Array< {
        __typename: "WaitingListItem",
        id: string,
        waitingListID: string,
        clientID: string,
        status: WaitingListItemStatus,
        positionNumber: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type ListWaitingListsQueryVariables = {
  filter?: ModelWaitingListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWaitingListsQuery = {
  listWaitingLists?:  {
    __typename: "ModelWaitingListConnection",
    items?:  Array< {
      __typename: "WaitingList",
      id: string,
      createdAt?: string | null,
      items?:  {
        __typename: "ModelWaitingListItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWaitingListItemsQueryVariables = {
  filter?: ModelWaitingListItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWaitingListItemsQuery = {
  syncWaitingListItems?:  {
    __typename: "ModelWaitingListItemConnection",
    items?:  Array< {
      __typename: "WaitingListItem",
      id: string,
      waitingListID: string,
      clientID: string,
      client?:  {
        __typename: "Client",
        id: string,
        identificationCard?: string | null,
        passport?: string | null,
        affiliateNumber?: number | null,
        name?: string | null,
        cellphoneNumber?: string | null,
        email?: string | null,
        contractNumber?: number | null,
        bornDate?: string | null,
        sex?: SexType | null,
        phoneNumber?: string | null,
        admissionDate?: string | null,
        addressStreet?: string | null,
        addressNumber?: number | null,
        neighborhood?: string | null,
        city?: string | null,
        bloodType?: string | null,
        profileImage?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      status: WaitingListItemStatus,
      positionNumber: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWaitingListItemQueryVariables = {
  id: string,
};

export type GetWaitingListItemQuery = {
  getWaitingListItem?:  {
    __typename: "WaitingListItem",
    id: string,
    waitingListID: string,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      identificationCard?: string | null,
      passport?: string | null,
      affiliateNumber?: number | null,
      name?: string | null,
      cellphoneNumber?: string | null,
      email?: string | null,
      contractNumber?: number | null,
      bornDate?: string | null,
      sex?: SexType | null,
      phoneNumber?: string | null,
      admissionDate?: string | null,
      addressStreet?: string | null,
      addressNumber?: number | null,
      neighborhood?: string | null,
      city?: string | null,
      bloodType?: string | null,
      healthInsurance?:  {
        __typename: "HealthInsurance",
        id: string,
        name?: string | null,
        imageName?: string | null,
      } | null,
      profileImage?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: WaitingListItemStatus,
    positionNumber: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWaitingListItemsQueryVariables = {
  filter?: ModelWaitingListItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWaitingListItemsQuery = {
  listWaitingListItems?:  {
    __typename: "ModelWaitingListItemConnection",
    items?:  Array< {
      __typename: "WaitingListItem",
      id: string,
      waitingListID: string,
      clientID: string,
      client?:  {
        __typename: "Client",
        id: string,
        identificationCard?: string | null,
        passport?: string | null,
        affiliateNumber?: number | null,
        name?: string | null,
        cellphoneNumber?: string | null,
        email?: string | null,
        contractNumber?: number | null,
        bornDate?: string | null,
        sex?: SexType | null,
        phoneNumber?: string | null,
        admissionDate?: string | null,
        addressStreet?: string | null,
        addressNumber?: number | null,
        neighborhood?: string | null,
        city?: string | null,
        bloodType?: string | null,
        profileImage?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      status: WaitingListItemStatus,
      positionNumber: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateClientSubscription = {
  onCreateClient?:  {
    __typename: "Client",
    id: string,
    identificationCard?: string | null,
    passport?: string | null,
    affiliateNumber?: number | null,
    name?: string | null,
    cellphoneNumber?: string | null,
    email?: string | null,
    contractNumber?: number | null,
    bornDate?: string | null,
    sex?: SexType | null,
    phoneNumber?: string | null,
    admissionDate?: string | null,
    addressStreet?: string | null,
    addressNumber?: number | null,
    neighborhood?: string | null,
    city?: string | null,
    bloodType?: string | null,
    healthInsurance?:  {
      __typename: "HealthInsurance",
      id: string,
      name?: string | null,
      imageName?: string | null,
    } | null,
    profileImage?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClientSubscription = {
  onUpdateClient?:  {
    __typename: "Client",
    id: string,
    identificationCard?: string | null,
    passport?: string | null,
    affiliateNumber?: number | null,
    name?: string | null,
    cellphoneNumber?: string | null,
    email?: string | null,
    contractNumber?: number | null,
    bornDate?: string | null,
    sex?: SexType | null,
    phoneNumber?: string | null,
    admissionDate?: string | null,
    addressStreet?: string | null,
    addressNumber?: number | null,
    neighborhood?: string | null,
    city?: string | null,
    bloodType?: string | null,
    healthInsurance?:  {
      __typename: "HealthInsurance",
      id: string,
      name?: string | null,
      imageName?: string | null,
    } | null,
    profileImage?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClientSubscription = {
  onDeleteClient?:  {
    __typename: "Client",
    id: string,
    identificationCard?: string | null,
    passport?: string | null,
    affiliateNumber?: number | null,
    name?: string | null,
    cellphoneNumber?: string | null,
    email?: string | null,
    contractNumber?: number | null,
    bornDate?: string | null,
    sex?: SexType | null,
    phoneNumber?: string | null,
    admissionDate?: string | null,
    addressStreet?: string | null,
    addressNumber?: number | null,
    neighborhood?: string | null,
    city?: string | null,
    bloodType?: string | null,
    healthInsurance?:  {
      __typename: "HealthInsurance",
      id: string,
      name?: string | null,
      imageName?: string | null,
    } | null,
    profileImage?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWaitingListSubscription = {
  onCreateWaitingList?:  {
    __typename: "WaitingList",
    id: string,
    createdAt?: string | null,
    items?:  {
      __typename: "ModelWaitingListItemConnection",
      items?:  Array< {
        __typename: "WaitingListItem",
        id: string,
        waitingListID: string,
        clientID: string,
        status: WaitingListItemStatus,
        positionNumber: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnUpdateWaitingListSubscription = {
  onUpdateWaitingList?:  {
    __typename: "WaitingList",
    id: string,
    createdAt?: string | null,
    items?:  {
      __typename: "ModelWaitingListItemConnection",
      items?:  Array< {
        __typename: "WaitingListItem",
        id: string,
        waitingListID: string,
        clientID: string,
        status: WaitingListItemStatus,
        positionNumber: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnDeleteWaitingListSubscription = {
  onDeleteWaitingList?:  {
    __typename: "WaitingList",
    id: string,
    createdAt?: string | null,
    items?:  {
      __typename: "ModelWaitingListItemConnection",
      items?:  Array< {
        __typename: "WaitingListItem",
        id: string,
        waitingListID: string,
        clientID: string,
        status: WaitingListItemStatus,
        positionNumber: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnCreateWaitingListItemSubscription = {
  onCreateWaitingListItem?:  {
    __typename: "WaitingListItem",
    id: string,
    waitingListID: string,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      identificationCard?: string | null,
      passport?: string | null,
      affiliateNumber?: number | null,
      name?: string | null,
      cellphoneNumber?: string | null,
      email?: string | null,
      contractNumber?: number | null,
      bornDate?: string | null,
      sex?: SexType | null,
      phoneNumber?: string | null,
      admissionDate?: string | null,
      addressStreet?: string | null,
      addressNumber?: number | null,
      neighborhood?: string | null,
      city?: string | null,
      bloodType?: string | null,
      healthInsurance?:  {
        __typename: "HealthInsurance",
        id: string,
        name?: string | null,
        imageName?: string | null,
      } | null,
      profileImage?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: WaitingListItemStatus,
    positionNumber: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWaitingListItemSubscription = {
  onUpdateWaitingListItem?:  {
    __typename: "WaitingListItem",
    id: string,
    waitingListID: string,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      identificationCard?: string | null,
      passport?: string | null,
      affiliateNumber?: number | null,
      name?: string | null,
      cellphoneNumber?: string | null,
      email?: string | null,
      contractNumber?: number | null,
      bornDate?: string | null,
      sex?: SexType | null,
      phoneNumber?: string | null,
      admissionDate?: string | null,
      addressStreet?: string | null,
      addressNumber?: number | null,
      neighborhood?: string | null,
      city?: string | null,
      bloodType?: string | null,
      healthInsurance?:  {
        __typename: "HealthInsurance",
        id: string,
        name?: string | null,
        imageName?: string | null,
      } | null,
      profileImage?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: WaitingListItemStatus,
    positionNumber: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWaitingListItemSubscription = {
  onDeleteWaitingListItem?:  {
    __typename: "WaitingListItem",
    id: string,
    waitingListID: string,
    clientID: string,
    client?:  {
      __typename: "Client",
      id: string,
      identificationCard?: string | null,
      passport?: string | null,
      affiliateNumber?: number | null,
      name?: string | null,
      cellphoneNumber?: string | null,
      email?: string | null,
      contractNumber?: number | null,
      bornDate?: string | null,
      sex?: SexType | null,
      phoneNumber?: string | null,
      admissionDate?: string | null,
      addressStreet?: string | null,
      addressNumber?: number | null,
      neighborhood?: string | null,
      city?: string | null,
      bloodType?: string | null,
      healthInsurance?:  {
        __typename: "HealthInsurance",
        id: string,
        name?: string | null,
        imageName?: string | null,
      } | null,
      profileImage?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: WaitingListItemStatus,
    positionNumber: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
