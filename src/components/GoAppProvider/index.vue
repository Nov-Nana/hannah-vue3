<template>
    <n-loading-bar-provider>
        <n-dialog-provider>
            <dialog-content></dialog-content>
            <loading-content></loading-content>
            <n-notification-provider>
                <n-message-provider>
                    <message-content></message-content>
                    <slot></slot>
                </n-message-provider>
            </n-notification-provider>
        </n-dialog-provider>
    </n-loading-bar-provider>
</template>

<script lang="ts" setup>
import {
    NLoadingBarProvider,
    NDialogProvider,
    NNotificationProvider,
    NMessageProvider
} from 'naive-ui'
import { DialogContent } from '../Plugins/DialogContent';
import { LoadingContent } from '../Plugins/LoadingContent';
import { MessageContent } from '../Plugins/MessageContent'
</script>

<style lang="scss" scoped></style>