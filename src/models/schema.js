export const schema = {
    "models": {
        "Client": {
            "name": "Client",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "identificationName": {
                    "name": "identificationName",
                    "isArray": false,
                    "type": {
                        "enum": "IdentificationTypes"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "identificationData": {
                    "name": "identificationData",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "affiliateNumber": {
                    "name": "affiliateNumber",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "cellphoneNumber": {
                    "name": "cellphoneNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "contractNumber": {
                    "name": "contractNumber",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "bornDate": {
                    "name": "bornDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "gender": {
                    "name": "gender",
                    "isArray": false,
                    "type": {
                        "enum": "SexType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "phoneNumber": {
                    "name": "phoneNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "admissionDate": {
                    "name": "admissionDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "addressStreet": {
                    "name": "addressStreet",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "addressNumber": {
                    "name": "addressNumber",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sector": {
                    "name": "sector",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "BloodType": {
                    "name": "BloodType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "company": {
                    "name": "company",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "profileImage": {
                    "name": "profileImage",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Insurances": {
                    "name": "Insurances",
                    "isArray": true,
                    "type": {
                        "model": "Insurance"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "clientID"
                    }
                },
                "HospitalDoctors": {
                    "name": "HospitalDoctors",
                    "isArray": true,
                    "type": {
                        "model": "HospitalDoctorCliente"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "client"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Clients",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Insurance": {
            "name": "Insurance",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "clientID": {
                    "name": "clientID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "contractNumber": {
                    "name": "contractNumber",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "affiliateNumber": {
                    "name": "affiliateNumber",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "affiliateType": {
                    "name": "affiliateType",
                    "isArray": false,
                    "type": {
                        "enum": "AffiliateTypes"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "imageName": {
                    "name": "imageName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Insurances",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byInsurance",
                        "fields": [
                            "clientID"
                        ]
                    }
                }
            ]
        },
        "HospitalDoctorCliente": {
            "name": "HospitalDoctorCliente",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "client": {
                    "name": "client",
                    "isArray": false,
                    "type": {
                        "model": "Client"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "clientID"
                    }
                },
                "hospitalDoctor": {
                    "name": "hospitalDoctor",
                    "isArray": false,
                    "type": {
                        "model": "HospitalDoctor"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "hospitalDoctorID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "HospitalDoctorClientes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "queries": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byClient",
                        "fields": [
                            "clientID",
                            "hospitalDoctorID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byHospitalDoctor",
                        "fields": [
                            "hospitalDoctorID",
                            "clientID"
                        ]
                    }
                }
            ]
        },
        "HospitalDoctor": {
            "name": "HospitalDoctor",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "doctorID": {
                    "name": "doctorID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "hospitalID": {
                    "name": "hospitalID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "doctor": {
                    "name": "doctor",
                    "isArray": false,
                    "type": {
                        "model": "Doctor"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "id",
                        "targetName": "doctorID"
                    }
                },
                "hospital": {
                    "name": "hospital",
                    "isArray": false,
                    "type": {
                        "model": "Hospital"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "id",
                        "targetName": "doctorID"
                    }
                },
                "waitLists": {
                    "name": "waitLists",
                    "isArray": true,
                    "type": {
                        "model": "WaitList"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "hospitalDoctorID"
                    }
                },
                "clients": {
                    "name": "clients",
                    "isArray": true,
                    "type": {
                        "model": "HospitalDoctorCliente"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "hospitalDoctor"
                    }
                }
            },
            "syncable": true,
            "pluralName": "HospitalDoctors",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Doctor": {
            "name": "Doctor",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "specialty": {
                    "name": "specialty",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "exequator": {
                    "name": "exequator",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "password": {
                    "name": "password",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Doctors",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Hospital": {
            "name": "Hospital",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pssCode": {
                    "name": "pssCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rnc": {
                    "name": "rnc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Hospitals",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "WaitList": {
            "name": "WaitList",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "hospitalDoctorID": {
                    "name": "hospitalDoctorID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "model": "WaitingListItem"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "waitingListID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "WaitLists",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byWaitList",
                        "fields": [
                            "hospitalDoctorID"
                        ]
                    }
                }
            ]
        },
        "WaitingListItem": {
            "name": "WaitingListItem",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "waitingListID": {
                    "name": "waitingListID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "client": {
                    "name": "client",
                    "isArray": false,
                    "type": {
                        "model": "Client"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "clientID"
                    }
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "WaitingListItemStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "positionNumber": {
                    "name": "positionNumber",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "WaitingListItems",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byWaitingList",
                        "fields": [
                            "waitingListID"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "IdentificationTypes": {
            "name": "IdentificationTypes",
            "values": [
                "CEDULA",
                "PASAPORTE"
            ]
        },
        "SexType": {
            "name": "SexType",
            "values": [
                "FEMENINO",
                "MASCULINO"
            ]
        },
        "AffiliateTypes": {
            "name": "AffiliateTypes",
            "values": [
                "PRINCIPAL",
                "TITULAR",
                "DEPENDIENTE",
                "PARENTESCO"
            ]
        },
        "WaitingListItemStatus": {
            "name": "WaitingListItemStatus",
            "values": [
                "CONSULTA",
                "ESPERA",
                "TERMINADA"
            ]
        },
        "WaitListStatus": {
            "name": "WaitListStatus",
            "values": [
                "CONSULTA",
                "ESPERA"
            ]
        }
    },
    "nonModels": {},
    "version": "70b66940f69742de3e062cff60ec9fc0"
};