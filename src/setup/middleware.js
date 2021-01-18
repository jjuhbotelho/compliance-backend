const BodyParser = require('body-parser');

module.exports = (app) => {
  //Returns middleware that only uses json
  app.use(BodyParser.json())
}