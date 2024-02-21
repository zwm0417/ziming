import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    emptyOutDir: true,
    //打包文件目录
    outDir: 'es',
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: ['index.ts'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../ziming/es'
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../ziming/lib'
        }
      ]
    },
    lib: {
      entry: './index.ts'
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './src',
      outDir: ['../ziming/es/src', '../ziming/lib/src'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsconfigPath: '../../tsconfig.json'
    })
  ]
});
