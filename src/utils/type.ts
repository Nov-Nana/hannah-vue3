// Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。
import { isObject } from "lodash";

export function isString(p: any): p is string{
    return typeof p === "string";
}
export function isNumber(p: any): p is number{
    return typeof p === "number";
}
export function isBoolean(p: any): p is boolean{
    return typeof p === "boolean";
}
export function isUndefined(p: any): p is undefined{
    return typeof p === "undefined";
}
export function isNull(p: any): p is null{
    return p === null;
}
export function isArray(p: any): p is []{
    return Array.isArray(p);
}
export const toNumber = (number: number | string, toFixedNumber = 2) => {
    return isString(number) ? parseFloat(parseFloat(number).toFixed(toFixedNumber)) : number.toFixed(toFixedNumber);
}
export const toString = (str: string) => {
    return isNumber(str) ? `${str}` : (isObject(str) ? JSON.stringify(str) : str)
}