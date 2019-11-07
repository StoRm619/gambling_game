require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan'); // used to see requests
const db = require('./models');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const PORT = process.env.PORT || 3001;
const axios = require('axios');

const isAuthenticated = require("./config/isAuthenticated");
const auth = require("./config/auth");

// Setting CORS so that any website can
// Access our API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

//log all requests to the console
app.use(morgan('dev'));

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gamblingame', { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));


// LOGIN ROUTE
app.post('/api/login', (req, res) => {
  auth
    .logUserIn(req.body.username, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

app.get('/api/livedata',(req, res) => {
  axios.get("https://api.pandascore.co/matches?token=" + process.env.PANDASCORE_TOKEN)
    .then(response => res.json(response.data))

});

// SIGNUP ROUTE
app.post('/api/signup', (req, res) => {
  db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

app.get('/api/allUsers', (req, res) => {
  db.User.find({})
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
})

app.put('/api/update', (req, res) => {
  db.User.update({ username: req.body.username }, { $set: { chronos: req.body.chronos, userBetA: req.body.userBetA } })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
})

app.put('/api/updateB', (req, res) => {
  db.User.update({ username: req.body.username }, { $set: { chronos: req.body.chronos, userBetB: req.body.userBetB } })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
})

app.put('/api/payWinners', (req, res) => {
  //at each user in loop add chronos, and reset bets for next round
  db.User.update({ username: req.body.username }, { $set: { chronos: req.body.chronos, userBetA: 0 , userBetB: 0} })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
})

// Any route with isAuthenticated is protected and you need a valid token
// to access
app.get('/api/user/:id', isAuthenticated, (req, res) => {
  db.User.findById(req.params.id).then(data => {
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({ success: false, message: 'No user found' });
    }
  }).catch(err => res.status(400).send(err));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', isAuthenticated /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); //Sending some response when authenticated
});

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
    res.status(401).send(err);
  }
  else {
    next(err);
  }
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('chat message', function (msg) {
    console.log('message: ' + JSON.stringify(msg));
    io.emit('chat message', msg)
  });
});

http.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

