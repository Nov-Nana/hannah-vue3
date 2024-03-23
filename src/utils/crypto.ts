/**
 * CryptoJS是一个JavaScript的加解密的工具包。
 */
import CryptoJS from 'crypto-js'
import { isString } from './type'

const KEY = 'mt'

/**
 * 加密
 * @param data {string}
 * @returns
 */
export const crytoEncode = (data: string): string =>{
    if(!isString(data)) return ''
    const encryptedData = CryptoJS.AES.encrypt(data, KEY, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString()
    return encryptedData 
}

/**
 * 解密
 * @parma data {string}
 * @returns
 */
export const cryptoDecode = (data: string): string =>{
    if(!isString(data)) return ''
    // 解密
    const decrptedData = CryptoJS.AES.decrypt(data, KEY,{
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8)
    return decrptedData
}