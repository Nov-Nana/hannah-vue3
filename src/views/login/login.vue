<template>
    <!-- 登录 -->
    <div class="go-login-box">
        <!-- 背景 -->
        <div class="go-login-box-bg">
            <aside class="bg-slot">
            </aside>
            <aside class="bg-img-box">
                <!-- <transition-group name="list-complete">
                    <template v-for="item in bgList" :key="item">
                        <div class="bg-img-box-li list-complete-item">
                            <n-collapse-transition :appear="true" :show="showBg">
                                <img :src="getImageUrl(item, 'chart/charts')" alt="chart">
                            </n-collapse-transition>
                        </div>
                    </template>
                </transition-group> -->
            </aside>
        </div>
        <!-- 头部 -->
        <layout-header>
            <template #left></template>
            <template #right>
                <go-lang-select></go-lang-select>
                <go-theme-select></go-theme-select>
            </template>
        </layout-header>
        <div class="go-login">
            <div class="go-login-carousle">
                <n-carousel autoplay dot-type="line" :interval="Number(carouselInterval)">
                    <img class="go-login-carousle-img" v-for="item in carouselImgList" :key="item"
                        :src="getImageUrl(item, 'login')" alt="image">
                </n-carousel>
            </div>
            <div class="login-account">
                <div class="login-account-container">
                    <n-collapse-transition :appear="true" :show="show">
                        <n-card class="login-account-card" :title="$t('login.desc')">
                            <div class="login-account-top">
                                <img class="login-account-top-logo" src="../../assets/images/login/input.png" alt="展示图">
                            </div>
                            <n-form ref="formRef" label-placement="left" size="large" :model="formInline" :rules="rules">
                                <n-form-item path="username">
                                    <n-input v-model:value="formInline.username" type="text" maxlength="16"
                                        :placeholder="$t('global.form_account')">
                                        <template #prefix>
                                            <n-icon size="18">
                                                <person-outline-icon></person-outline-icon>
                                            </n-icon>
                                        </template>
                                    </n-input>
                                </n-form-item>
                                <n-form-item path="password">
                                    <n-input v-model:value="formInline.password" type="password" maxlength="16"
                                        :placeholder="$t('global.form_password')" show-password-on="click">
                                        <template #prefix>
                                            <n-icon size="18">
                                                <lock-closed-outline-icon></lock-closed-outline-icon>
                                            </n-icon>
                                        </template>
                                    </n-input>
                                </n-form-item>
                                <n-form-item>
                                    <div class="justify-between flex">
                                        <div class="flex-initial">
                                            <n-checkbox v-model:checked="autoLogin">
                                                {{ $t('login.form_auto') }}
                                            </n-checkbox>
                                        </div>
                                    </div>
                                </n-form-item>
                                <n-form-item>
                                    <n-button type="primary" @click="handleSubmit" size="large" :loading="loading" block>
                                        {{ $t('login.form_button') }}</n-button>
                                </n-form-item>
                            </n-form>
                        </n-card>
                    </n-collapse-transition>
                </div>
            </div>
        </div>
        <div class="go-login-box-footer">
            <!-- <layout-footer></layout-footer> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import LayoutHeader from '../../layout/components/LayoutHeader/index.vue'
// import LayoutFooter from '../../layout/components/LayoutFooter/index.vue'
import { shuffle } from 'lodash';
import { NCollapseTransition } from 'naive-ui';
import { reactive } from 'vue';
import { icon } from '../../plugins';
import { crytoEncode, routerTurnByName, setLocalStorage } from '../../utils';
import { StorageEnum } from '../../enums/storageEnum';
import { PageEnum } from '../../enums/pageEnum';
import { carouselInterval } from '../../settings/designSetting';
import { useDesignStore } from '../../store/modules/designStore/designStore';
import { GoThemeSelect } from '../../components/GoThemeSelect'
import { GoLangSelect } from '../../components/GoLangSelect'

const { PersonOutlineIcon, LockClosedOutlineIcon } = icon.ionicons5

const t = window['$t']
const formInline = reactive({
    username: 'admin',
    password: '123456'
})
const rules = {
    username: {
        required: true,
        message: t('global.form_account'),
        trigger: 'blur'
    },
    password: {
        required: true,
        message: t('global.form_password'),
        trigger: 'blur'
    }
}
// 自动登录
const autoLogin = ref(true)
const showBg = ref(false)
const designStore = useDesignStore()

onMounted(() => {
    // 解决图片加载慢导致页面抖动问题
    setTimeout(() => {
        showBg.value = true
    }, 100)
    setTimeout(() => {
        show.value = true
    })
    document.documentElement.setAttribute('data-theme', designStore.themeName)
})

// 背景图
const bgList = ref([
    'bar_y',
    'bar_x',
    'line_gradient',
    'line',
    'funnel',
    'heatmap',
    'map',
    'pie',
    'radar',
])
// 轮播图
const carouselImgList = ref([
    'one',
    'two',
    'three'
])

// 处理url获取
const getImageUrl = (name: string, folder: string) => {
    return new URL(`../../assets/images/${folder}/${name}.png`, import.meta.url).href
}

// 定时器
const disruptInternal = ref()
// 打乱图片顺序
const disruptBgImg = () => {
    disruptInternal.value = setInterval(() => {
        bgList.value = shuffle(bgList.value)
    }, carouselInterval)
}
onMounted(() => {
    disruptBgImg()
})


const formRef = ref()
const loading = ref(false)
const { GO_LOGIN_INFO_STORE } = StorageEnum
// 提交登录
const handleSubmit = (e: Event) => {
    e.preventDefault()
    formRef.value.validate(async (error: any) => {
        if (!error) {
            const { username, password } = formInline
            loading.value = true
            setLocalStorage(
                GO_LOGIN_INFO_STORE,
                crytoEncode(
                    JSON.stringify({
                        username, password
                    })
                )
            )
            window['$message'].success(`${t('login.login_success')}!`)
            routerTurnByName(PageEnum.BASE_HOME_NAME, true)
        } else {
            window['$message'].error(`${t('login.login_message')}!`)
        }
    })
}

const show = ref(true)

</script>

<style lang="scss" scoped>
$width: 450px;
$go-login-height: 100vh;
$account-img-height: 210px;
$footer-height: 50px;
$carousel-width: 30%;
$carousel-image-height: 60vh;

* {
    box-sizing: border-box;
}

@include go(login-box) {
    height: $go-login-height;
    overflow: hidden;
    @include background-image('background-image');

    @include go(login) {
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: -$--header-height;
        height: $go-login-height;
        width: 100vw;

        &-carousle {
            width: $carousel-width;
            margin-top: 100px;
            min-width: 500px;

            &-img {
                display: block;
                margin: 0 auto;
                height: $carousel-image-height;
            }
        }

        .login-account {
            display: flex;
            flex-direction: column;
            margin: 0 160px;

            &-container {
                width: $width;
            }

            &-card {
                @extend .go-background-filter;
                @include fetch-bg-color('filter-color');
                box-shadow: 0 0 20px 5px rgba(40, 40, 40, 0.3);
            }

            &-top {
                padding-top: 10px;
                text-align: center;
                height: $account-img-height;
                margin-bottom: 20px;
            }
        }
    }

    &-bg {
        z-index: 0;
        position: fixed;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100vh;
        background: url('../../assets/images/login/login-bg.png') no-repeat 0 -120px;

        .bg-slot {
            width: $carousel-width;
        }

        .bg-img-box {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            width: 770px;
            margin-right: -20px;

            &-li {
                img {
                    margin-right: 20px;
                    margin-top: 20px;
                    width: 230px;
                    border-radius: 2 * $--border-radius-base;
                    opacity: 0.9;
                }
            }
        }
    }

    &-footer {
        z-index: 2;
        position: fixed;
        width: 100%;
        bottom: 0;
    }
}

@media only screen and (max-width: 1200px) {
    .go-login-box .go-login-carousle{
        display: none !important;
    }
    .bg-img-box,
    .bg-slot{
        display: none !important;
    }

    .go-login-box-footer {
        position: relative;
    }
}
</style>