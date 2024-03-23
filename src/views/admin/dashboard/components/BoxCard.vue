<template>
    <div class="box-card-component">
        <div slot="header" class="box-card-header">
            <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png">
        </div>
        <div class="box-content-wrapper">
            <div class="avatar">
                <LinThumb :width="'60px'" :height="'60px'" :image="avatar" class="linThumb"></LinThumb>
            </div>
            <div class="skills-progress">
                <div class="progress-item">
                    <div>Vue</div>
                    <n-progress type="line" :percentage="70" />
                </div>
                <div class="progress-item">
                    <div>JavaScript</div>
                    <n-progress type="line" :percentage="18" />
                </div>
                <div class="progress-item">
                    <div>CSS</div>
                    <n-progress type="line" :percentage="12" />
                </div>
                <div class="progress-item">
                    <div>ESLint</div>
                    <n-progress type="line" :percentage="100" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { LinThumb } from '../../../../components/LinThumb/index'

const avatar =
    "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"

</script>
<style lang="scss">
.box-card-component {
    width: 100%;
    background-color: #fff;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);

    .box-card-header {
        overflow: hidden;

        img {
            height: 220px;
            transition: all 0.2s linear;
        }

        img:hover {
            transform: scale(1.1, 1.1);
            -webkit-filter: contrast(130%);
            filter: contrast(130%);
        }
    }

    .box-content-wrapper {
        position: relative;
        .avatar{
            position: relative;
            top: -40px;
            left: 40px;
            background-color: #fff;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
        }
        .skills-progress{
            margin-top: -60px;
            padding: 20px;
        }
    }
}
</style>