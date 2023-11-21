"use strict";
function checkObjValues(obj, checkValue) {
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
