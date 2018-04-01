require('dotenv').config()
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var ToDo = require('./routes/todo')

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/merrntodo';

var app = express()

app.use(express.static('./public'));

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
})

app.use('/todo', ToDo)

mongoose.connect(MONGO_URI).then(() => {
  console.log('db Connected');
}).catch( err => {
    console.log('DB Connection Error: ', err);
})

var server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
