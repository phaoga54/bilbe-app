module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@src":"./src",
          "@components": "./src/components",
          "@redux":"./src/redux",
          "@assets":"./src/assets",
          "@svgs":"./src/assets/svgs",
          "@images":"./src/assets/images",
        }
      }
    ]
  ]

};
