<template>
    <div class="go-footer">
        <slot>
            <n-space :size="50">
                <n-text depth="2">
                    <n-a>{{ $t('global.doc_addr') }}：</n-a>
                    <n-a italic :href="docPath" target="_blank">{{ docPath }}</n-a>
                </n-text>
                <n-text depth="3">
                    <n-a italic href="https://beian.miit.gov.cn/" target="_blank">京ICP备20XXXXXXXX号-1</n-a>
                </n-text>
            </n-space>
        </slot>
    </div>
</template>
<script setup lang="ts">

import { docPath } from "../../../settings/pathConst.ts";
</script>
<style lang="scss" scoped>
.go-footer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;;
    padding: 0 40px;
    height: $--footer-height;
}
</style>