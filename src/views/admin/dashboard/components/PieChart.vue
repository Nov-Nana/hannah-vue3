<template>
    <div id="pieChart" :style="{ width: '100%', height: '300px' }"></div>
</template>

  
<script setup lang="ts">
import { nextTick } from 'vue'
import * as echarts from "echarts";
import { onMounted, onUnmounted } from "vue";
import resize from './mixins/resize'

let chart
// 初始化
const initChart = () => {
    chart = echarts.init(document.getElementById("pieChart"));

    // 设置图表配置和数据
    setOptions()

    // 自适应大小
    window.onresize = () => {
        chart.resize();
    };
};
// 设置图标项
const setOptions = () => {
    chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
        },
        series: [
          {
            name: 'WEEKLY WRITE ARTICLES',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              { value: 320, name: 'Industries' },
              { value: 240, name: 'Technology' },
              { value: 149, name: 'Forex' },
              { value: 100, name: 'Gold' },
              { value: 59, name: 'Forecasts' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
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