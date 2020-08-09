module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: `http://127.0.0.1:7001`,
    overlay: {
      warning: false,
      errors: false
    }
  }
}
