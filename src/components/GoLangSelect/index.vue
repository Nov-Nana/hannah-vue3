<template>
    <n-dropdown trigger="hover" :options="options" :show-arrow="true" @select="handleSelect">
        <n-button quaternary>
            <n-icon size="20" :depyh="1">
                <language-icon></language-icon>
            </n-icon>
        </n-button>
    </n-dropdown>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { icon } from '../../plugins'
import { langList } from '../../i18n'
import { useLangStore } from "../../store/modules/langStore/langStore.ts";
import { LangEnum } from "../../enums/styleEnum.ts";

const { LanguageIcon } = icon.ionicons5
const options = langList
const langStore = useLangStore()
const { locale } = useI18n()

const handleSelect = (key: LangEnum) => {
    locale.value = key
    langStore.changeLang(key)
}
</script>

<style lang="scss" scoped></style>