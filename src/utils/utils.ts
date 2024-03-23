import { excludeParseEventKeyList, excludeParseEventValueList } from '../enums/eventEnum'
import { h, customRef } from 'vue'
import { NIcon } from 'naive-ui'
/**
 * JSON序列化，支持 函数 和 undefined
 * @param data
 */
export const JSONStringify = <T>(data: T) => {
    // 使用JSON.stringify()方法将数据转换为JSON字符串
    return JSON.stringify(
        data,
        (_key, value) => {
            // 如果value的类型为function，则返回函数的字符串形式
            if (typeof value === 'function') {
                return `${value}`
            }
            // 如果value的类型为undefined，则返回null
            if (typeof value === 'undefined') {
                return null
            }
            // 否则返回value
            return value
        },
        // 设置缩进
        2
    )
}

/**
 * 解析JSON字符串，支持 函数 和 undefined
 * @param data
 */
export const JSONPare = (data: string) => {
    // 使用JSON.parse()方法解析JSON字符串，并传入一个回调函数
    return JSON.parse(data, (k, v) => {

        // 过滤函数字符串
        if (excludeParseEventKeyList.includes(k)) return v

        // 过滤函数值表达式
        if (typeof v === 'string') {
            const someValue = excludeParseEventValueList.some(excludeValue => v.indexOf(excludeValue) > -1)
            if (someValue) return v
        }

        // 还原函数值
        if (typeof v === 'string' && v.indexOf && (v.indexOf('function') > -1 || v.indexOf('=>') > -1)) {
            return evalFn(`(function(){return ${v}})()`)
        } else if (typeof v === 'string' && v.indexOf && v.indexOf('return ') > -1) {
            const baseLeftIndex = v.indexOf('(')
            if (baseLeftIndex > -1) {
                const newFn = `function ${v.substring(baseLeftIndex)}`
                return evalFn(`(function(){return ${newFn}})()`)
            }
        }
        return v

    })
}

// 将字符串转为函数
export const evalFn = (fn: string) => {
    var Fun = Function
    return new Fun('return ' + fn)
}

/**
 * render图标
 */
export const renderIcon = (icon: any, set = {}) => {
    return () => h(NIcon, set, { default: () => h(icon) })
}

/**
 * render 语言
 * @param lang 语言表示
 * @param set 设置项
 * @param tag 要渲染成的标签
 */
export const renderLang = (lang: string, set = {}, tag = 'span') => {
    return () => h(tag, set, { default: () => window['$t'](lang) })
}

// 防抖函数  触发事件后,n秒内只执行一次,若在n秒内又触发函数,则重新计算时间
export function debounce(func, delay = 1000, immediate = false) {
    //闭包
    let timer
    //不能用箭头函数
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        if (immediate && !timer) {
            //@ts-ignore
            func.apply(this, arguments)
        }
        timer = setTimeout(() => {
            //@ts-ignore
            func.apply(this, arguments)
        }, delay)
    }
}

/**
 * 
 * @param data 相应数据
 * @param delay 延迟时间
 * @returns 
 */
export function debounceRef(data, delay = 1000) {
    let timer
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return data
            },
            set(value) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    data = value
                    trigger()
                    timer = null
                }, delay)
            }
        }
    })
}


// 节流函数 函数在一定时间内只执行一次
export function throttle(fn, delay = 500) {
    let oldTime = Date.now()
    return function () {
        //@ts-ignore
        const _this = this
        let newTime = Date.now()
        if (newTime - oldTime >= delay) {
            fn.apply(_this, arguments)
            oldTime = Date.now()
        }
    }
}

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat?) {
    if (arguments.length === 0 || !time) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string')) {
            if ((/^[0-9]+$/.test(time))) {
                // support "1548221490638"
                time = parseInt(time)
            } else {
                // support safari
                // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
                time = time.replace(new RegExp(/-/gm), '/')
            }
        }

        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{([ymdhisa])+}/g, (_, key) => {
        const value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
        return value.toString().padStart(2, '0')
    })
    return time_str
}