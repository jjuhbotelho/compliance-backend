const Express = require('express');
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

setupDatabase()  

  //Application only starts if database connection is set
  .then(() => { 
    //Setting up for application listen port 5000
    app.listen(port, () => {
      console.log(`Application is listing on port: ${port}`)
    });
  })
  .catch(console.error);

