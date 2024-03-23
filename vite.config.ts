import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer' // 打包分析插件
import AutoImport from 'unplugin-auto-import/vite' // 自动引入
// import viteCompression  from 'vite-plugin-compression' // 压缩

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  base: '/hannah-vue3/',
  // 路径重定向
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src')
      }
    ]
  },
  // 全局注册 css
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: `@import "./src/styles/common/style.scss";`
      }
    }
  },
  // 依赖优化 - 预构建
  optimizeDeps: {
    include: ['vue', 'pinia', 'vue-router', 'ant-design-vue/es', '@vueuse/core'],
  },
  plugins: [
    vue(),
    visualizer(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts'
    }),
    // viteCompression()
  ],
  server: {
    port: 2525,
  }
})
