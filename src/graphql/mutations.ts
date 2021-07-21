/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
      id
      identificationCard
      passport
      affiliateNumber
      name
      cellphoneNumber
      email
      contractNumber
      bornDate
      sex
      phoneNumber
      admissionDate
      addressStreet
      addressNumber
      neighborhood
      city
      bloodType
      healthInsurance {
        id
        name
        imageName
      }
      profileImage
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
      id
      identificationCard
      passport
      affiliateNumber
      name
      cellphoneNumber
      email
      contractNumber
      bornDate
      sex
      phoneNumber
      admissionDate
      addressStreet
      addressNumber
      neighborhood
      city
      bloodType
      healthInsurance {
        id
        name
        imageName
      }
      profileImage
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
      id
      identificationCard
      passport
      affiliateNumber
      name
      cellphoneNumber
      email
      contractNumber
      bornDate
      sex
      phoneNumber
      admissionDate
      addressStreet
      addressNumber
      neighborhood
      city
      bloodType
      healthInsurance {
        id
        name
        imageName
      }
      profileImage
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createWaitingList = /* GraphQL */ `
  mutation CreateWaitingList(
    $input: CreateWaitingListInput!
    $condition: ModelWaitingListConditionInput
  ) {
    createWaitingList(input: $input, condition: $condition) {
      id
      createdAt
      items {
        items {
          id
          waitingListID
          clientID
          status
          positionNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const updateWaitingList = /* GraphQL */ `
  mutation UpdateWaitingList(
    $input: UpdateWaitingListInput!
    $condition: ModelWaitingListConditionInput
  ) {
    updateWaitingList(input: $input, condition: $condition) {
      id
      createdAt
      items {
        items {
          id
          waitingListID
          clientID
          status
          positionNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const deleteWaitingList = /* GraphQL */ `
  mutation DeleteWaitingList(
    $input: DeleteWaitingListInput!
    $condition: ModelWaitingListConditionInput
  ) {
    deleteWaitingList(input: $input, condition: $condition) {
      id
      createdAt
      items {
        items {
          id
          waitingListID
          clientID
          status
          positionNumber
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const createWaitingListItem = /* GraphQL */ `
  mutation CreateWaitingListItem(
    $input: CreateWaitingListItemInput!
    $condition: ModelWaitingListItemConditionInput
  ) {
    createWaitingListItem(input: $input, condition: $condition) {
      id
      waitingListID
      clientID
      client {
        id
        identificationCard
        passport
        affiliateNumber
        name
        cellphoneNumber
        email
        contractNumber
        bornDate
        sex
        phoneNumber
        admissionDate
        addressStreet
        addressNumber
        neighborhood
        city
        bloodType
        healthInsurance {
          id
          name
          imageName
        }
        profileImage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      status
      positionNumber
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateWaitingListItem = /* GraphQL */ `
  mutation UpdateWaitingListItem(
    $input: UpdateWaitingListItemInput!
    $condition: ModelWaitingListItemConditionInput
  ) {
    updateWaitingListItem(input: $input, condition: $condition) {
      id
      waitingListID
      clientID
      client {
        id
        identificationCard
        passport
        affiliateNumber
        name
        cellphoneNumber
        email
        contractNumber
        bornDate
        sex
        phoneNumber
        admissionDate
        addressStreet
        addressNumber
        neighborhood
        city
        bloodType
        healthInsurance {
          id
          name
          imageName
        }
        profileImage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      status
      positionNumber
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteWaitingListItem = /* GraphQL */ `
  mutation DeleteWaitingListItem(
    $input: DeleteWaitingListItemInput!
    $condition: ModelWaitingListItemConditionInput
  ) {
    deleteWaitingListItem(input: $input, condition: $condition) {
      id
      waitingListID
      clientID
      client {
        id
        identificationCard
        passport
        affiliateNumber
        name
        cellphoneNumber
        email
        contractNumber
        bornDate
        sex
        phoneNumber
        admissionDate
        addressStreet
        addressNumber
        neighborhood
        city
        bloodType
        healthInsurance {
          id
          name
          imageName
        }
        profileImage
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      status
      positionNumber
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
