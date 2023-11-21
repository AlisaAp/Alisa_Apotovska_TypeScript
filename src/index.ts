//1
interface IUnionInterface {
    [key: string]: number | string;
}

//2
interface IFunctionInterface {
    [key: string]: (...args: any[]) => any;
}

//3
interface IArrayInterface {
    [key: number]: string;
}

//4
interface IInterface {
    name: string;

    [key: string]: any;
}

//5
interface ISomeInterface {
    [key: string]: number;
}

interface IExtendedInterface extends ISomeInterface {
    someProperty: number;
}

//6
interface Interface {
    [key: string]: number;
}

function checkObjValues(obj: Interface, checkValue: number): boolean {
    for (const key in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key) && typeof obj[key] !== "number") {
            return false;
        }
        if (obj[key] !== checkValue) {
            return false;
        }
    }
    return true;
}