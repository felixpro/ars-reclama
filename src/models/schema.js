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
                "actualInsurance": {
                    "name": "actualInsurance",
                    "isArray": false,
                    "type": "String",
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
                "addressStreet": {
                    "name": "addressStreet",
                    "isArray": false,
                    "type": "String",
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
                "bloodType": {
                    "name": "bloodType",
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
                "lastWaitingListID": {
                    "name": "lastWaitingListID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
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
                "clientID": {
                    "name": "clientID",
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
                "lastHealthInsurranceID": {
                    "name": "lastHealthInsurranceID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "HospitalDoctorClientes",
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
                }
            },
            "syncable": true,
            "pluralName": "WaitLists",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
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
                "clientID": {
                    "name": "clientID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
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
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "affiliateNumber": {
                    "name": "affiliateNumber",
                    "isArray": false,
                    "type": "String",
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
                }
            },
            "syncable": true,
            "pluralName": "Insurances",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
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
        "WaitingListItemStatus": {
            "name": "WaitingListItemStatus",
            "values": [
                "CONSULTA",
                "ESPERA",
                "TERMINADA"
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
        "WaitListStatus": {
            "name": "WaitListStatus",
            "values": [
                "CONSULTA",
                "ESPERA"
            ]
        }
    },
    "nonModels": {},
    "version": "b0c799ca6ec8fe599c29e9419a974438"
};