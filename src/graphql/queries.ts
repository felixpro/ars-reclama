/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncClients = /* GraphQL */ `
  query SyncClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
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
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWaitingLists = /* GraphQL */ `
  query SyncWaitingLists(
    $filter: ModelWaitingListFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWaitingLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        items {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getWaitingList = /* GraphQL */ `
  query GetWaitingList($id: ID!) {
    getWaitingList(id: $id) {
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
export const listWaitingLists = /* GraphQL */ `
  query ListWaitingLists(
    $filter: ModelWaitingListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWaitingLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        items {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWaitingListItems = /* GraphQL */ `
  query SyncWaitingListItems(
    $filter: ModelWaitingListItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWaitingListItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWaitingListItem = /* GraphQL */ `
  query GetWaitingListItem($id: ID!) {
    getWaitingListItem(id: $id) {
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
export const listWaitingListItems = /* GraphQL */ `
  query ListWaitingListItems(
    $filter: ModelWaitingListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWaitingListItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
