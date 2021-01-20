const BodyParser = require('body-parser');
const cors = require('cors');

module.exports = (app) => {
  //Returns middleware that only uses json
  app.use(BodyParser.json());

  app.use(cors());
}