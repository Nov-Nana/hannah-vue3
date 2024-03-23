import { defineAsyncComponent,AsyncComponentLoader } from "vue"
import { AsyncLoading, AsyncSkeletonLoading } from '../components/GoLoading'
/**
 * 异步加载组件
 */
export const loadAsyncComponent = (loader) => {
    defineAsyncComponent({
        loader,
        loadingComponent: AsyncLoading,
        delay: 20
    })
}
export const loadSkeletonAsyncComponent = (loader: AsyncComponentLoader<any>) =>
    defineAsyncComponent({
        loader,
        loadingComponent: AsyncSkeletonLoading,
        delay: 20,
    })