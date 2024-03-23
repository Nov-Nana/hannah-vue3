<template>
  <div class="dashboard-container">
    <PanelGroup @handleSetLineChartData="handleSetLineChartData"></PanelGroup>
    <div class="dashboard-linechart">
      <LineChart :chart-data="lineChartData"></LineChart>
    </div>
    <n-grid :x-gap="24" cols="1 s:1 m:1 l:3 xl:3 2xl:3" responsive="screen">
      <n-grid-item>
        <div class="chart-wrapper">
          <RaddarChart></RaddarChart>
        </div>
      </n-grid-item>
      <n-grid-item>
        <div class="chart-wrapper">
          <PieChart></PieChart>
        </div>
      </n-grid-item>
      <n-grid-item>
        <div class="chart-wrapper">
          <BarChart></BarChart>
        </div>
      </n-grid-item>
    </n-grid>

    <n-grid :x-gap="12" :y-gap="24" cols="1 s:2 m:2 l:4 xl:4 2xl:4 " responsive="screen">
      <n-grid-item :span="2">
        <transaction-table />
      </n-grid-item>
      <n-grid-item>
        <TodoList></TodoList>
      </n-grid-item>
      <n-grid-item>
        <BoxCard></BoxCard>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import PanelGroup from './components/PanelGroup.vue'
import LineChart from './components/LineChart.vue'
import RaddarChart from './components/RaddarChart.vue'
import PieChart from './components/PieChart.vue'
import BarChart from './components/BarChart.vue'
import TransactionTable from './components/TransactionTable.vue'
import TodoList from './components/TodoList/index.vue'
import BoxCard from './components/BoxCard.vue'

const lineChartDataAll = {
  newVisits: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
const lineChartData = ref()
lineChartData.value = lineChartDataAll.newVisits

onBeforeUnmount(() => {
  console.log('DASHBOARD')
})

const handleSetLineChartData = (type) => {
  lineChartData.value = lineChartDataAll[type]
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.dashboard-container {
  width: 100%;
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .dashboard-linechart {
    width: 100%;
    background-color: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
    margin-top: 20px;
  }

  .chart-wrapper{
    background-color: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
@media (max-width: 1024px) {
  .chart-wrapper{
    padding: 8px;
  }
}
</style>