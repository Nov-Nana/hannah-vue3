<template>
    <n-space :wrap="false">
        <div class="label">{{ t('admin.cell_auto_width') }}: </div>
        <n-radio-group size="small" v-model:value="props.value" :on-update:value="change" name="radiogroup">
            <n-space>
                <n-radio :value="true">
                    TRUE
                </n-radio>  
                <n-radio :value="false">
                    FALSE
                </n-radio>  
            </n-space>
        </n-radio-group>
    </n-space>
</template>

<script setup lang="ts">

const t = window['$t']

const props = defineProps({
    value: Boolean
})

const emits = defineEmits(['update:value'])

const change = (value) => {
    emits('update:value', value)
}
</script>

<style lang="scss">
.label {
    // width: 120px;
    font-size: 14px;
    color: #606266;
    line-height: 24px;
    font-weight: bolder;
}
</style>