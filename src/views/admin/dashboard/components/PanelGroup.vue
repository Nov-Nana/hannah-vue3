<template>
    <n-grid :x-gap="24" :y-gap="12" cols="2 s:2 m:2 l:4 xl:4 2xl:4" responsive="screen">
        <n-grid-item>
            <div class="card-panel" @click="handleSetLineChartData('newVisits')">
                <div class="card-panel-icon-wrapper icon-people">
                    <n-icon>
                        <PersonIcon></PersonIcon>
                    </n-icon>
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">New Visits</div>
                    <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
                </div>
            </div>
        </n-grid-item>
        <n-grid-item>
            <div class="card-panel" @click="handleSetLineChartData('messages')">
                <div class="card-panel-icon-wrapper icon-message">
                    <n-icon>
                        <MessageOutlined></MessageOutlined>
                    </n-icon>
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">Messages</div>
                    <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num" />
                </div>
            </div>
        </n-grid-item>
        <n-grid-item>
            <div class="card-panel" @click="handleSetLineChartData('shoppings')">
                <div class="card-panel-icon-wrapper icon-money">
                    <n-icon>
                        <AccountBookOutlined></AccountBookOutlined>
                    </n-icon>
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">Purchases</div>
                    <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num" />
                </div>
            </div>
        </n-grid-item>
        <n-grid-item>
            <div class="card-panel" @click="handleSetLineChartData('messages')">
                <div class="card-panel-icon-wrapper icon-shopping">
                    <n-icon>
                        <ShoppingCartOutlined></ShoppingCartOutlined>
                    </n-icon>
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">Shoppings</div>
                    <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />
                </div>
            </div>
        </n-grid-item>

    </n-grid>
</template>

<script setup lang="ts">
import { icon } from '../../../../plugins';
import { defineEmits } from 'vue';
import { CountTo } from 'vue3-count-to';

const { PersonIcon } = icon.ionicons5
const { MessageOutlined, ShoppingCartOutlined, AccountBookOutlined } = icon.antd


const emit = defineEmits(['handleSetLineChartData'])
const handleSetLineChartData = (type) => {
    emit('handleSetLineChartData', type)
}


</script>

<style lang="scss" scoped>
.card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    .card-panel-icon-wrapper {
        float: left;
        margin: 14px 0 0px 14px;
        padding: 0px 16px 30px 16px;
        transition: all 0.38s ease-out;
        font-size: 60px;
        height: 52px;
    }

    .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 26px;
        margin-left: 0px;
        width: 90px;

        .card-panel-text {
            line-height: 18px;
            color: rgba(0, 0, 0, 0.45);
            font-size: 16px;
            margin-bottom: 12px;
        }

        .card-panel-num {
            font-size: 20px;
        }
    }

    &:hover {
        .card-panel-icon-wrapper {
            color: #fff;
            border-radius: 3px;
        }

        .icon-people {
            background: #40c9c6;
        }

        .icon-message {
            background: #36a3f7;
        }

        .icon-money {
            background: #f4516c;
        }

        .icon-shopping {
            background: #34bfa3
        }
    }

    .icon-people {
        color: #40c9c6;
    }

    .icon-message {
        color: #36a3f7;
    }

    .icon-money {
        color: #f4516c;
    }

    .icon-shopping {
        color: #34bfa3
    }
}
</style>