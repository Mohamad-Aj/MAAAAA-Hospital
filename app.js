//This is the server
const express = require('express')
const app = express();
var path = require('path');
var cons = require('consolidate');

const indexRouter = require('./routes/index')
const doctorRouter = require('./routes/doctor')

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRouter)
app.use('/doctor',doctorRouter)

app.listen(3000)