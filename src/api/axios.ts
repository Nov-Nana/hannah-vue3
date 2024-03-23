import axios, { InternalAxiosRequestConfig, AxiosError,AxiosResponse } from "axios";
import { ResultEnum } from "../enums/httpEnum";
import { ErrorPageNameMap } from '../enums/pageEnum'
import {redirectErrorPage} from '../utils'

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: ResultEnum.TIMEOUT
})

// 请求拦截
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config
    },
    (err: AxiosError) => {
        Promise.reject(err)
    }
)

// 响应拦截
axiosInstance.interceptors.response.use(
    (res: AxiosResponse) => {
        const { code } = res.data as { code: number }
        if(code === undefined || code === null ) return Promise.resolve(res.data)
        if(code === ResultEnum.SUCCESS) return Promise.resolve(res.data)
        // 重定向
        if(ErrorPageNameMap.get(code)) redirectErrorPage(code)
        return Promise.reject(res.data)
    }
)

export default axiosInstance