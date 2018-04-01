var express = require('express');
var ToDo = require('../models/ToDo');
var app = express();

app.get('/', (req, res) => {
  ToDo.find({}).then((todos) => {
    res.status(200).send(todos);
  }).catch(err => {
    res.status(400).send({error: 'Error Retrieving List!'});
  })
})

app.post('/', (req, res) => {
  var todo = new ToDo(req.body);
  todo.save(err => {
    if(err){
      res.status(400).send({error: 'Cannot Add Todo!'});
    } else {
      res.status(200).send(todo);
    }
  })
})

app.put('/:id', (req, res) => {
  ToDo.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec((err, todo) => {
    if(err || !todo){
      res.status(400).send({error: 'Cannot Update Todo!'});
    } else {
      res.status(200).send(todo);
    }
  })
})

app.delete('/:id', (req, res) => {
  ToDo.findByIdAndRemove(req.params.id).exec((err, todo) => {
    if(err){
      res.status(400).send({error: 'Cannot Remove ToDo!'});
    } else {
      res.status(200).send(todo);
    }
  })
})

module.exports = app;
