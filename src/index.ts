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
  [key: number]:  string;
}

//4
interface IInterface {
  name: string;
  [key: string]: any;
}
//5

//6
interface Interface {
  [key: string]:  number;
}
function checkValues(obj: Interface): boolean {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] !== "number") {
            return false;
        }
    }
    return true;
}