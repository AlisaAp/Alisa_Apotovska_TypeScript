"use strict";
const request = {
    "sum": 10000,
    "from": 2,
    "to": 4
};
const successResponse = {
    "status": "success",
    "data": {
        "databaseId": 567,
        "sum": 10000,
        "from": 2,
        "to": 4
    }
};
const failedResponse = {
    "status": "failed",
    "data": {
        "errorMessage": "Недостаточно средств",
        "errorCode": 4
    }
};
