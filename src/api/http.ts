import axiosInstance from "./axios";

/**
 * 通过get方法发送请求
 * @param {String} url 
 * @param {Object} params 
 * @returns 
 */
export const get = (url: string, params?: object) => {
    return axiosInstance.get(url, {params})
}
/**
 * 通过post方法发送请求
 * @param url 
 * @param data 
 * @param headerType 
 * @returns 
 */
export const post = (url: string, data?: object, headerType?: string) => {
    return axiosInstance.post(url, data, { headers: { 'Content-Type': headerType || 'application/json;charset=UTF-8' } })
}
