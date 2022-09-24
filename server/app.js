const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
// const axios = require('axios');
module.exports = app

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json({limit: "50mb"}))

// auth and api routes
app.use('/auth', require('./auth'))
app.use('/api', require('./api'))

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));

// app.get('/stores', (req, res, next) => {
//   try {
//     axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
//       req.body.lat
//     },${req.body.lng}&type=${req.body.type}&radius=${
//       req.body.radius
//     }&key=${req.body.key}`).then(function (response){
//       res.send(response.data)
//     }).catch(function (error){
//       console.log(error)
//     })
//   } catch (ex) {
//     next(ex)
//   }
// })

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
