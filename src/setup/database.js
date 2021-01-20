const Mongodb = require('mongodb');
const Config = require('../config')

module.exports = async () => {
  //New MongoDB Client
  const client = new Mongodb.MongoClient(Config.databaseUri, {
    useUnifiedTopology: true
  });

  //Establishes connection to database
  await client.connect();

  return client.db();
}