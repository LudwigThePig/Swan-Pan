const express = require('express')
const next = require('next')
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(helmet());
    server.use(helmet.frameguard({ action: 'sameorigin' }))

    server.use(cors({origin: '*'})); //For FCC testing purposes only

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.use(session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
    }));

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })
    
    mongoose.connect(process.env.MONGO, (err, db)=>{
      if (err){
        console.log(err);
      } else {
        console.log('You are now connected to the database!');
      }
    });

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })