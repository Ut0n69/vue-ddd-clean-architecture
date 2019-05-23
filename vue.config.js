const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '/src/client')
      }
    }
  },
  devServer: {
    open: true,
    port: 8080,
    watchContentBase: true,
    contentBase: 'src/client/',
    inline: true,
    hot: true,
    progress: true
  },
  outputDir: 'dist/client'
}
