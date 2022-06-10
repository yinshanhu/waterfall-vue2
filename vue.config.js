module.exports = {
  publicPath: '/waterfall/',
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 3000,
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // vant: toast
            'toast-text-color': '#fff',
            'toast-border-radius': '5px',
            'toast-background-color': 'rgba(0, 0, 0, 0.8)',

            // vant: cell
            'cell-line-height': '36px',
          },
        },
      },
    },
  },
};
