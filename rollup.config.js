const alias = require('rollup-plugin-alias')
const replace = require('rollup-plugin-replace')

const version = require('./package.json').version

export default {
  input: 'lib/platforms/web/entry-runtime-with-compile.js',
  output: {
    file: 'dist/basket.js',
    format: 'umd',
    name: 'Basket'
  },
  plugins: [
    // 替换字符串
    replace({
      __VERSION__: version
    }),
    // 别名，简化引用路径
    alias({
      // 如果引用路径不包含后缀，则认为是.js文件
      resolve: ['.js'],

      core: __dirname + '/lib/core'
    })
  ]
}
