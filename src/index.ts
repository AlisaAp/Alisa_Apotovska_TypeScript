interface ISuccessData {
    databaseId?: number,
    sum: number,
    from: number,
    to: number
}

interface IFailedData {
    errorMessage: string,
    errorCode: number
}

interface IResponse {
    status: "success" | "failed",
    data: ISuccessData | IFailedData
}

const request: ISuccessData = {
    "sum": 10000,
    "from": 2,
    "to": 4
};
const successResponse: IResponse = {
    "status": "success",
    "data": {
        "databaseId": 567,
        "sum": 10000,
        "from": 2,
        "to": 4
    }
};

const failedResponse: IResponse = {
    "status": "failed",
    "data": {
        "errorMessage": "Недостаточно средств",
        "errorCode": 4
    }
};


