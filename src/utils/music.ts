import { customRef } from "vue"

// 处理 歌手格式 周杰伦/温岚
export const parseSinger = (artists) => {
    let result = ''
    if (artists.length === 0) return result
    artists.forEach(singer => {
        result += singer.name + '/'
    })
    result = result.slice(0, result.length - 1)
    return result
}
// 处理时长 124321ms => 00:00
export const getDuration = (duration): string => {
    // 230870ms => 03:50:87
    let result = ''
    let hour: number | string = Math.floor(duration / (60 * 60 * 1000))
    let minute: number | string = Math.floor((duration % (60 * 60 * 1000)) / (1000 * 60))
    let second: number | string = Math.floor((duration % (1000 * 60)) / 1000)
    hour = hour < 10 && hour ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    second = second < 10 ? '0' + second : second
    if (hour) {
        console.log(hour)
        result = hour + ':' + minute + ':' + second
        return result
    } else {
        result = minute + ':' + second
        return result
    }
}

// 处理歌词
export function parseLyric(lyric) {
    // { time: word}
    let arr = lyric.split('\n')
    let result = []
    arr.forEach((line) => {
        let obj = { time: "", word: "" }
        // 处理时间 03:32.110 => xxx s
        let time = line.split(']')[0].substring(1)
        let m = +time.split(':')[0] * 60
        let s = +time.split(':')[1]
        time = m + s
        // 处理歌词
        let word = line.split(']')[1]
        obj.time = time
        obj.word = word
        //@ts-ignore
        result.push(obj)
    })
    return result
}

// 处理数字 < 10 补 0 
export function parseIndex(index) {
    if (index < 10) return '0' + index
    else return index
}

// 时间戳转日期 transToTime(1701320045546) ===> '2023-11-30 12:54:05'
export function transToTime(time) {//时间戳转日期
    let date = new Date(time);
    let y = date.getFullYear();
    let MM: number | string = date.getMonth() + 1;
    MM = MM < 10 ? ('0' + MM) : MM;
    let d: number | string = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    let h: number | string = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    let m: number | string = date.getMinutes();
    m = m < 10 ? ('0' + m) : m;
    let s: number | string = date.getSeconds();
    s = s < 10 ? ('0' + s) : s;
    return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
}

// 自定义ref实现防抖
export function debounceRef(value, duration = 1000){
	let timer
    //@ts-ignore
	return customRef((track,trigger)=>{
		return {
			get value(){
				track();
				return value
			},
			set value(val){
				clearTimeout(timer)
				timer = setTimeout(()=>{
					trigger();
					value = val
					timer = null
				},duration)
			}
		}
	})
}