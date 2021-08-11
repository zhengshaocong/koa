const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const value = modulesFiles(modulePath)
  modules = { ...modules, ...value }
  return modules
}, {})
// module.exports = modules
export default modules
