//not in use because of problems with ecpo sdk 20, to use uncomment packager opts in app.json
module.exports = {
    getTransformModulePath() {
      return require.resolve('react-native-typescript-transformer')
    },
    getSourceExts() {
      return ['ts', 'tsx'];
    }
  }