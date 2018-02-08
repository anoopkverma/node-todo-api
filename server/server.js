const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb')

const {Todo} = require('./models/todo')
const {User} = require('./models/user')
const {mongoose} = require('./db/mongoose')

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var newTodo =  new Todo({
    'text': req.body.text
  })

  newTodo.save().then((doc) => {
    res.send('Successfully created!!')
  }, (err) => {
    res.status(400).send();
  })
})

// app.get('/todos', (req, res) => {
//   res.send("hi");
// })

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    console.log(err);
  })
})

app.get('/todos/:id', (req, res) => {
  // res.send(req.params);
  var id = req.params.id;
  if (!ObjectId.isValid(id)) {
    res.status(404).send('<h1>Todo with Id: ' + id + ' is not valid</h1>');
  }
  Todo.findById(id).then((doc) => {
    if (!doc) {
      res.status(404).send('<h1>Not Found!!</h1>')
    }
    res.status(200).send(doc);
  }, (err) => {
    res.status(400).send('<h1>Bad Request!!</h1>')
  })

})

app.listen(port, () => {
  console.log('Server is running on port: 3000');
})

module.exports = {app}
