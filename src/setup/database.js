const Mongodb = require('mongodb');
 
//Uri representing the database connected
const uri = "mongodb+srv://root:PeNQF1L9FnvkyVRO@compliance.v4cem.mongodb.net/compliance?retryWrites=true&w=majority";

module.exports = async () => {
  //New MongoDB Client
  const client = new Mongodb.MongoClient(uri, {
    useUnifiedTopology: true
  });

  //Establishes connection to database
  await client.connect();

  return client.db();
}