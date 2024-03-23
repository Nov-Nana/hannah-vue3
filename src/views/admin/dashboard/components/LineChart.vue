<template>
    <div id="myEcharts" :style="{ width: '100%', height: '350px' }"></div>
</template>

  
<script setup lang="ts">
import {  nextTick, watch } from 'vue'
import * as echarts from "echarts";
import { onMounted, onUnmounted } from "vue";
import resize from './mixins/resize'

let chart
let props = defineProps(['chartData'])
// 更换图标数据
watch(() => props.chartData, (newValue) => {
    setOptions(newValue)
});
// 初始化
const initChart = () => {
    chart = echarts.init(document.getElementById("myEcharts"));

    // 设置图表配置和数据
    setOptions(props.chartData)

    // 自适应大小
    window.onresize = () => {
        chart.resize();
    };
};
// 设置图标项
const setOptions = ({ expectedData, actualData }) => {
    chart.setOption({
        xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            boundaryGap: false,
            axisTick: {
                show: false
            }
        },
        grid: {
            left: 10,
            right: 10,
            bottom: 20,
            top: 30,
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            padding: [5, 10]
        },
        yAxis: {
            axisTick: {
                show: false
            }
        },
        legend: {
            data: ['expected', 'actual']
        },
        series: [{
            name: 'expected',
            lineStyle: {
                color: '#FF005A',
                width: 2
            },
            smooth: true,
            type: 'line',
            data: expectedData,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
        },
        {
            name: 'actual',
            smooth: true,
            type: 'line',
            lineStyle: {
                color: '#3888fa',
                width: 2
            },
            areaStyle: {
                color: '#f3f8ff'
            },
            data: actualData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
        }]
    })
}

onMounted(() => {
    nextTick(() => {
        initChart();
        // 解决自适应问题
        resize(chart)
    })

});

onUnmounted(() => {
    chart.dispose();
});
</script>

<style lang="scss" scoped></style>