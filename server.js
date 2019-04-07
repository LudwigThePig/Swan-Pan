// Dependencies in alphabetical order
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const path = require('path');

const app = express(); //getting this party started 🎉

//Configuring dependencies
dotenv.config();
app.use(express.static('public'));
app.use(helmet());
app.use(helmet.frameguard({ action: 'sameorigin' }))

//Routing
app.get('/ping', function (req, res) {
  console.log('pong');
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'login.html'))
})
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Database set up
mongoose.connect(process.env.MONGO, (err, db)=>{
  if (err){
    console.log(err);
  } else {
    console.log('You are now connected to the database!');
  }
});

//Setting up the logs
app.listen(process.env.PORT || 8080, function () {
  console.log("Listening on port " + process.env.PORT);
  if(process.env.NODE_ENV==='test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        runner.run();
      } catch(e) {
        const error = e;
          console.log('Tests are not valid:');
          console.log(error);
      }
    }, 1500);
  }
});