const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();

var Post = require("../models/post");
let PHDetail = require("../models/porthealthdetail");
let BPSDetail = require("../models/bpsdetail");

//Returns all Portfolio Health detail records
app.get('/api/v1/phdetail', (req, res) => {
  PHDetail.find({}, function(error, phdetail) {
    if (error) {
      console.error(error);
    }
    res.send({
      phdetail: phdetail
    })
  })
})

//Returns PH Detail records for 1 OID
app.get('/api/v1/phdetail/:personoid', (req, res) => {
  var db = req.db;
  PHDetail.find({
    personoid: req.params.PersonOID
  }, function(error, phdetail) {
    if (error) {
      console.error(error);
    }
    res.send({
      phdetail: phdetail
    })
  })
})

//Returns all BPS detail records
app.get('/api/v1/bpsdetail', (req, res) => {
  BPSDetail.find({}, function(error, bpsdetail) {
    if (error) {
      console.error(error);
    }
    res.send({
      bpsdetail: bpsdetail
    })
  })
})

//Returns BPS Detail records for 1 OID
app.get('/api/v1/bpsdetail/:personoid', (req, res) => {
  var db = req.db;
  BPSDetail.find({
    personoid: req.params.PersonOID
  }, function(error, bpsdetail) {
    if (error) {
      console.error(error);
    }
    res.send({
      bpsdetail: bpsdetail
    })
  })
})


//Tutorial code
app.get('/posts', (req, res) => {
  Post.find({}, 'title description', function(error, posts) {
    if (error) {
      console.error(error);
    }
    res.send({
      posts: posts
    })
  }).sort({
    _id: -1
  })
})

app.post('/add_post', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_post = new Post({
    title: title,
    description: description
  })

  new_post.save(function(error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true
    })
  })
})

app.put('/posts/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title description', function(error, post) {
    if (error) {
      console.error(error);
    }

    post.title = req.body.title
    post.description = req.body.description
    post.save(function(error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

app.delete('/posts/:id', (req, res) => {
  var db = req.db;
  Post.remove({
    _id: req.params.id
  }, function(err, post) {
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

app.get('/post/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title description', function(error, post) {
    if (error) {
      console.error(error);
    }
    res.send(post)
  })
})

app.listen(process.env.PORT || 8081)