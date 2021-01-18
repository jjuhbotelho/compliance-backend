const Express = require('express');
const setupRouter = require('./setup/router');
const setupDatabase = require('./setup/database');
const setupMiddleware = require('./setup/middleware');


//Create an application
const app = Express();

//Default port for app
const port = 5000;

//Setup a first endpoint at localhost:5000/ to return a text
app.get('/', (req, res) => {
  //Response object will send a text to cliente
  res.json({hello: 'world'});
});

setupMiddleware(app);

async function start() {
  const db = await setupDatabase();

  setupRouter(app, db);

  //Setting up for application listen port 5000
  app.listen(port, () => {
    console.log(`Application is listing on port: ${port}`)
  });
}

start().catch(console.error);

