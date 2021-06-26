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
                "bornDate": {
                    "name": "bornDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
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
                "doctors": {
                    "name": "doctors",
                    "isArray": true,
                    "type": {
                        "model": "ClientDoctor"
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
        "ClientDoctor": {
            "name": "ClientDoctor",
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
                "doctor": {
                    "name": "doctor",
                    "isArray": false,
                    "type": {
                        "model": "Doctor"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "doctorID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "ClientDoctors",
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
                            "doctorID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byDoctor",
                        "fields": [
                            "doctorID",
                            "clientID"
                        ]
                    }
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
                },
                "clients": {
                    "name": "clients",
                    "isArray": true,
                    "type": {
                        "model": "ClientDoctor"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "doctor"
                    }
                },
                "hospitals": {
                    "name": "hospitals",
                    "isArray": true,
                    "type": {
                        "model": "HospitalDoctor"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "doctor"
                    }
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
                "doctor": {
                    "name": "doctor",
                    "isArray": false,
                    "type": {
                        "model": "Doctor"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "hospitalID"
                    }
                },
                "hospital": {
                    "name": "hospital",
                    "isArray": false,
                    "type": {
                        "model": "Hospital"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "doctorID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "HospitalDoctors",
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
                        "name": "byDoctorhp",
                        "fields": [
                            "hospitalID",
                            "doctorID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byHospital",
                        "fields": [
                            "doctorID",
                            "hospitalID"
                        ]
                    }
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
                },
                "doctors": {
                    "name": "doctors",
                    "isArray": true,
                    "type": {
                        "model": "HospitalDoctor"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "hospital"
                    }
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
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "WaitListStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "positionNumber": {
                    "name": "positionNumber",
                    "isArray": false,
                    "type": "Int",
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
        "WaitListStatus": {
            "name": "WaitListStatus",
            "values": [
                "CONSULTA",
                "ESPERA"
            ]
        }
    },
    "nonModels": {},
    "version": "035f56c521bfa29ccf02dfe59f964e5e"
};