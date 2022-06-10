module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // 定制主题
        style: (name) => `${name}/style/less`,
      },
      'vant',
    ],
    '@babel/plugin-proposal-optional-chaining',
  ],
};
