/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
export const onCreateWaitingList = /* GraphQL */ `
  subscription OnCreateWaitingList {
    onCreateWaitingList {
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
export const onUpdateWaitingList = /* GraphQL */ `
  subscription OnUpdateWaitingList {
    onUpdateWaitingList {
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
export const onDeleteWaitingList = /* GraphQL */ `
  subscription OnDeleteWaitingList {
    onDeleteWaitingList {
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
export const onCreateWaitingListItem = /* GraphQL */ `
  subscription OnCreateWaitingListItem {
    onCreateWaitingListItem {
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
export const onUpdateWaitingListItem = /* GraphQL */ `
  subscription OnUpdateWaitingListItem {
    onUpdateWaitingListItem {
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
export const onDeleteWaitingListItem = /* GraphQL */ `
  subscription OnDeleteWaitingListItem {
    onDeleteWaitingListItem {
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
