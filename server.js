const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express()


require('dotenv').config()
require('./config/database')
require('./config/auth')

app.use(logger('dev'));
app.use(express.json())

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', require('./routes/api/user'));
app.use('/api/survey', require('./routes/api/survey'));




app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname ,'build'))
})

const port = process.env.port || 3020

app.listen(port, ()=> console.log(`Express app running on port ${port}`))