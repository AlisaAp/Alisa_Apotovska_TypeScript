interface IRequest {
    sum: number,
    from: number,
    to: number
}

interface ISuccessData extends IRequest {
    databaseId: number,
}

interface IFailedData {
    errorMessage: string,
    errorCode: number
}

interface ISuccessResponse {
    status: "success",
    data: ISuccessData,
}

interface IFailedResponse {
    status: "failed",
    data: IFailedData,
}

const request: IRequest = {
    "sum": 10000,
    "from": 2,
    "to": 4,
};
const successResponse: ISuccessResponse = {
    "status": "success",
    "data": {
        "databaseId": 567,
        "sum": 10000,
        "from": 2,
        "to": 4
    }
};

const failedResponse: IFailedResponse = {
    "status": "failed",
    "data": {
        "errorMessage": "Недостаточно средств",
        "errorCode": 4
    }
};


